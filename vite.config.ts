import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from "vite-plugin-sitemap";

const hostname = "https://genpsicologia.com";

// ── Static routes (ES → EN) ──
const staticRoutes: [string, string][] = [
  ["/", "/en"],
  ["/sobre-mi", "/en/about"],
  ["/servicios", "/en/services"],
  ["/contacto", "/en/contact"],
  ["/tienda", "/en/shop"],
  ["/blog", "/en/blog"],
  ["/hola", "/en/hello"],
  ["/aviso-legal", "/en/legal"],
  ["/privacidad", "/en/privacy"],
  ["/cookies", "/en/cookies"],
];

// ── Service slugs (ES → EN) ──
const serviceSlugs: [string, string][] = [
  ["terapia-individual-adultos", "individual-therapy-adults"],
  ["terapia-de-pareja", "couples-therapy"],
  ["neurodivergencias", "neurodivergence"],
  ["desarrollo-y-creatividad", "development-creativity"],
  ["dificultades-aprendizaje", "learning-difficulties"],
  ["terapia-familiar", "family-therapy"],
  ["regulacion-emocional-autoestima", "emotional-regulation-self-esteem"],
  ["evaluaciones-psicologicas", "psychological-evaluations"],
  ["terapia-expats-adultos", "therapy-expats-adults"],
  ["terapia-expats-infantojuvenil", "therapy-expats-children"],
];

// ── Blog slugs (shared between ES/EN) ──
const blogSlugs = [
  "adiccion-pantallas-ninos-adolescentes",
  "como-saber-hijo-necesita-psicologo",
  "ansiedad-infantil-senales-sintomas",
  "cuando-llevar-nino-psicologo-edad",
  "terapia-infantil-online-funciona",
  "rabietas-ninos-cuando-preocuparse",
  "psicologia-infantil-miedos-ansiedad-rabietas",
  "psicologia-adolescentes-ansiedad-bullying-autoestima",
  "altas-capacidades-intelectuales-evaluacion-ninos",
  "tdah-tea-diagnostico-terapia-ninos",
  "dificultades-aprendizaje-dislexia-ninos",
  "como-gestionar-rabietas-regulacion-emocional-ninos",
  "terapia-familiar-conflictos-crianza",
  "creatividad-talento-ninos-introvertidos",
  "trauma-infantil-apego-terapia",
];

// Build flat route list for the plugin
const dynamicRoutes: string[] = [];

// Static pages
for (const [es, en] of staticRoutes) {
  dynamicRoutes.push(es, en);
}

// Service detail pages
for (const [esSlug, enSlug] of serviceSlugs) {
  dynamicRoutes.push(`/servicios/${esSlug}`, `/en/services/${enSlug}`);
}

// Blog articles (same slug for ES and EN)
for (const slug of blogSlugs) {
  dynamicRoutes.push(`/blog/${slug}`, `/en/blog/${slug}`);
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    Sitemap({
      hostname,
      dynamicRoutes,
      exclude: ["/404", "/en/404"],
      generateRobotsTxt: false, // We manage robots.txt manually
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
