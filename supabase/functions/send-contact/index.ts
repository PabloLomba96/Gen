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

// Simple in-memory rate limiter (per isolate lifecycle)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Allowed domains for sending copy emails (prevent open relay abuse)
const ALLOWED_COPY_DOMAINS = new Set<string>(); // empty = allow all validated emails; populate to restrict

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
    // Rate limiting by IP
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(clientIp)) {
      return new Response(
        JSON.stringify({ error: "Demasiadas solicitudes. Inténtalo más tarde." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { nombre, email, telefono, motivo, mensaje, enviarCopia } = await req.json();

    // Server-side validation
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

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

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

      // Send to Patricia
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

      // Send copy to client if requested — with domain validation
      if (enviarCopia) {
        const emailDomain = email.split("@")[1]?.toLowerCase();
        const domainAllowed = ALLOWED_COPY_DOMAINS.size === 0 || ALLOWED_COPY_DOMAINS.has(emailDomain);

        if (domainAllowed) {
          try {
            await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${resendKey}`,
              },
              body: JSON.stringify({
                from: "Patricia Martínez Psicología <onboarding@resend.dev>",
                to: [email],
                subject: `Copia de tu consulta — Patricia Martínez Psicología`,
                html: `
                  <h2>Hemos recibido tu mensaje</h2>
                  <p>Hola ${escapeHtml(nombre)}, aquí tienes una copia de tu consulta:</p>
                  <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;" />
                  <p><strong>Motivo:</strong> ${escapeHtml(motivo)}</p>
                  <p><strong>Mensaje:</strong></p>
                  <p>${escapeHtml(mensaje)}</p>
                  <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;" />
                  <p style="color:#888;font-size:13px;">Te responderemos lo antes posible. Gracias por confiar en nosotros.</p>
                `,
              }),
            });
          } catch (copyError) {
            console.error("Copy email error:", copyError);
          }
        }
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
