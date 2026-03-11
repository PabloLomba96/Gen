import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/context';

const BASE = 'https://genpsicologia.com';

// ── Service slug mapping (ES ↔ EN) ──
const serviceSlugEsToEn: Record<string, string> = {
  'terapia-individual-adultos': 'individual-therapy-adults',
  'terapia-de-pareja': 'couples-therapy',
  'neurodivergencias': 'neurodivergence',
  'desarrollo-y-creatividad': 'development-creativity',
  'dificultades-aprendizaje': 'learning-difficulties',
  'terapia-familiar': 'family-therapy',
  'regulacion-emocional-autoestima': 'emotional-regulation-self-esteem',
  'evaluaciones-psicologicas': 'psychological-evaluations',
  'terapia-expats-adultos': 'therapy-expats-adults',
  'terapia-expats-infantojuvenil': 'therapy-expats-children',
};

const serviceSlugEnToEs: Record<string, string> = {};
Object.entries(serviceSlugEsToEn).forEach(([es, en]) => {
  serviceSlugEnToEs[en] = es;
});

// ── Static route mapping (ES path → EN segment without /en) ──
const esToEn: Record<string, string> = {
  '/': '/',
  '/sobre-mi': '/about',
  '/servicios': '/services',
  '/contacto': '/contact',
  '/tienda': '/shop',
  '/blog': '/blog',
  '/hola': '/hello',
  '/aviso-legal': '/legal',
  '/privacidad': '/privacy',
  '/cookies': '/cookies',
};

function getAlternatePaths(
  pathname: string,
  lang: 'es' | 'en',
): { es: string; en: string } | null {
  if (lang === 'es') {
    // Service detail
    if (pathname.startsWith('/servicios/')) {
      const esSlug = pathname.split('/servicios/')[1];
      const enSlug = serviceSlugEsToEn[esSlug];
      if (!enSlug) return null; // unknown slug — don't emit broken hreflang
      return { es: pathname, en: `/en/services/${enSlug}` };
    }
    // Blog (slugs are identical in both languages)
    if (pathname.startsWith('/blog/')) {
      return { es: pathname, en: `/en/blog/${pathname.split('/blog/')[1]}` };
    }
    // Static pages
    const enSegment = esToEn[pathname];
    if (enSegment) {
      return { es: pathname, en: enSegment === '/' ? '/en' : `/en${enSegment}` };
    }
    return null;
  }

  // English routes
  const withoutPrefix = pathname.replace(/^\/en/, '') || '/';

  // Service detail
  if (withoutPrefix.startsWith('/services/')) {
    const enSlug = withoutPrefix.split('/services/')[1];
    const esSlug = serviceSlugEnToEs[enSlug];
    if (!esSlug) return null;
    return { es: `/servicios/${esSlug}`, en: pathname };
  }
  // Blog
  if (withoutPrefix.startsWith('/blog/')) {
    return { es: `/blog/${withoutPrefix.split('/blog/')[1]}`, en: pathname };
  }
  // Static reverse lookup
  for (const [es, en] of Object.entries(esToEn)) {
    if (en === withoutPrefix) {
      return { es, en: pathname };
    }
  }
  return null;
}

const HrefLang = () => {
  const { lang } = useLanguage();
  const { pathname } = useLocation();

  const paths = getAlternatePaths(pathname, lang);

  if (!paths) return null;

  return (
    <Helmet>
      <link rel="alternate" hrefLang="es" href={`${BASE}${paths.es}`} />
      <link rel="alternate" hrefLang="en" href={`${BASE}${paths.en}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE}${paths.es}`} />
    </Helmet>
  );
};

export default HrefLang;
