import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Persistent rate limiting — use CF-Connecting-IP (set by proxy, not spoofable) or rightmost X-Forwarded-For
    const clientIp = req.headers.get("cf-connecting-ip")
      || req.headers.get("x-real-ip")
      || req.headers.get("x-forwarded-for")?.split(",").pop()?.trim()
      || "unknown";
    const { data: allowed } = await supabase.rpc("check_rate_limit", {
      p_ip: clientIp,
      p_endpoint: "contact",
      p_max: 5,
      p_window_seconds: 60,
    });

    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "Demasiadas solicitudes. Inténtalo más tarde." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { nombre, email, telefono, motivo, mensaje } = await req.json();

    if (!nombre || !email || !motivo || !mensaje) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (typeof email !== "string" || !EMAIL_REGEX.test(email) || email.length > 255) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (typeof nombre !== "string" || nombre.length > 100) {
      return new Response(
        JSON.stringify({ error: "Nombre inválido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (typeof mensaje !== "string" || mensaje.length > 2000) {
      return new Response(
        JSON.stringify({ error: "Mensaje demasiado largo" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { error: dbError } = await supabase.from("contact_messages").insert({
      nombre,
      email,
      telefono: telefono || null,
      motivo,
      mensaje,
    });

    if (dbError) {
      console.error("DB error:", { code: dbError.code, message: dbError.message });
      return new Response(
        JSON.stringify({ error: "Error al guardar el mensaje" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      const htmlBody = `
        <h2>Nueva consulta desde tu web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono || "No proporcionado")}</p>
        <p><strong>Motivo:</strong> ${escapeHtml(motivo)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(mensaje)}</p>
      `;

      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "Formulario Web <onboarding@resend.dev>",
            to: ["patri.psicologia29@gmail.com"],
            subject: `Nueva consulta: ${escapeHtml(motivo)} - ${escapeHtml(nombre)}`,
            html: htmlBody,
          }),
        });
      } catch (emailError) {
        console.error("Email error:", emailError);
      }

    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
