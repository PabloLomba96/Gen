import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/context';

const BASE = 'https://genpsicologia.com';

// Spanish path → English path (without /en prefix)
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

function getEsPaths(pathname: string, lang: 'es' | 'en'): { es: string; en: string } | null {
  if (lang === 'es') {
    // Dynamic service pages
    if (pathname.startsWith('/servicios/')) {
      return { es: pathname, en: '/en/services/' + pathname.split('/servicios/')[1] };
    }
    if (pathname.startsWith('/blog/')) {
      return { es: pathname, en: '/en/blog/' + pathname.split('/blog/')[1] };
    }
    const enSegment = esToEn[pathname];
    if (enSegment) {
      return { es: pathname, en: enSegment === '/' ? '/en' : '/en' + enSegment };
    }
  } else {
    const withoutPrefix = pathname.replace(/^\/en/, '') || '/';
    if (withoutPrefix.startsWith('/services/')) {
      const slug = withoutPrefix.split('/services/')[1];
      return { es: '/servicios/' + slug, en: pathname };
    }
    if (withoutPrefix.startsWith('/blog/')) {
      return { es: '/blog/' + withoutPrefix.split('/blog/')[1], en: pathname };
    }
    // Reverse lookup
    for (const [es, en] of Object.entries(esToEn)) {
      if (en === withoutPrefix) {
        return { es, en: pathname };
      }
    }
  }
  return null;
}

const HrefLang = () => {
  const { lang } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    // Remove old hreflang links
    document.querySelectorAll('link[data-hreflang]').forEach((el) => el.remove());

    const paths = getEsPaths(pathname, lang);
    if (!paths) return;

    const links = [
      { rel: 'alternate', hreflang: 'es', href: BASE + paths.es },
      { rel: 'alternate', hreflang: 'en', href: BASE + paths.en },
      { rel: 'alternate', hreflang: 'x-default', href: BASE + paths.es },
    ];

    links.forEach(({ rel, hreflang, href }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.hreflang = hreflang;
      link.href = href;
      link.setAttribute('data-hreflang', 'true');
      document.head.appendChild(link);
    });

    // Also update canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = BASE + pathname;

    return () => {
      document.querySelectorAll('link[data-hreflang]').forEach((el) => el.remove());
    };
  }, [pathname, lang]);

  return null;
};

export default HrefLang;
