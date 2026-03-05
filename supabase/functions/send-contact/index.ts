import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

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
    const { nombre, email, telefono, motivo, mensaje, enviarCopia } = await req.json();

    if (!nombre || !email || !motivo || !mensaje) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
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
            subject: `Nueva consulta: ${motivo} - ${nombre}`,
            html: htmlBody,
          }),
        });
      } catch (emailError) {
        console.error("Email error:", emailError);
      }

      // Send copy to client if requested
      if (enviarCopia) {
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
