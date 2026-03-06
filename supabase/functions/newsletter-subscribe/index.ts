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
      p_endpoint: "newsletter",
      p_max: 5,
      p_window_seconds: 60,
    });

    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "Demasiadas solicitudes. Inténtalo más tarde." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { email, idioma } = await req.json();

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email) || email.length > 255) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const safeIdioma = idioma === 'en' ? 'en' : 'es';

    // Insert subscriber
    const { error: dbError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: email.trim(), idioma: safeIdioma });

    if (dbError) {
      if (dbError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "duplicate" }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw dbError;
    }

    // Notify team
    const idiomaLabel = safeIdioma === 'en' ? '🇬🇧 Inglés' : '🇪🇸 Español';
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "Gen Psicología <no-reply@genpsicologia.com>",
            to: ["patricia@genpsicologia.com"],
            subject: `Nueva suscripción newsletter: ${escapeHtml(email.trim())}`,
            html: `
              <h2>🎉 Nueva suscripción a Píldoras de Bienestar</h2>
              <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
              <p><strong>Idioma preferido:</strong> ${idiomaLabel}</p>
              <p style="color:#888;font-size:13px;">Este email se ha suscrito a tu newsletter desde la web.</p>
            `,
          }),
        });
      } catch {
        // Non-blocking
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Error interno" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
