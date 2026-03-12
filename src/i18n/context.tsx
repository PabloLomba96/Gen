import { createContext, useContext, useMemo, useCallback, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { es } from './translations/es';
import { en } from './translations/en';

export type Lang = 'es' | 'en';

type Translations = typeof es;

interface LanguageContextValue {
  lang: Lang;
  t: (key: string) => any;
  lp: (esPath: string) => string;
  switchLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// Path mapping: Spanish path → English path (without /en prefix)
const esPathToEnSegment: Record<string, string> = {
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

const enSegmentToEsPath: Record<string, string> = {};
Object.entries(esPathToEnSegment).forEach(([es, en]) => {
  enSegmentToEsPath[en] = es;
});

// Service slug mapping (ES ↔ EN) — must stay in sync with HrefLang.tsx
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

function translatePath(esPath: string, targetLang: Lang): string {
  if (targetLang === 'es') return esPath;

  // Handle dynamic service routes with slug translation
  if (esPath.startsWith('/servicios/')) {
    const esSlug = esPath.split('/servicios/')[1];
    const enSlug = serviceSlugEsToEn[esSlug] || esSlug;
    return '/en/services/' + enSlug;
  }
  // Handle dynamic blog routes
  if (esPath.startsWith('/blog/')) {
    return '/en/blog/' + esPath.split('/blog/')[1];
  }

  const enSegment = esPathToEnSegment[esPath];
  if (enSegment) {
    return enSegment === '/' ? '/en' : '/en' + enSegment;
  }

  return esPath;
}

function currentPathToOtherLang(pathname: string, currentLang: Lang): string {
  if (currentLang === 'es') {
    // Convert ES path to EN path
    // Handle dynamic segments
    if (pathname.startsWith('/servicios/')) {
      return '/en/services/' + pathname.split('/servicios/')[1];
    }
    if (pathname.startsWith('/blog/')) {
      return '/en/blog/' + pathname.split('/blog/')[1];
    }
    const enSegment = esPathToEnSegment[pathname];
    if (enSegment) {
      return enSegment === '/' ? '/en' : '/en' + enSegment;
    }
    return '/en' + pathname;
  } else {
    // Convert EN path to ES path
    const withoutPrefix = pathname.replace(/^\/en/, '') || '/';

    // Handle dynamic segments
    if (withoutPrefix.startsWith('/services/')) {
      return '/servicios/' + withoutPrefix.split('/services/')[1];
    }
    if (withoutPrefix.startsWith('/blog/')) {
      return '/blog/' + withoutPrefix.split('/blog/')[1];
    }

    const esPath = enSegmentToEsPath[withoutPrefix];
    return esPath || withoutPrefix;
  }
}

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((acc, key) => {
    if (acc === undefined || acc === null) return path;
    // Handle array index
    const arrayMatch = key.match(/^(\w+)\[(\d+)\]$/);
    if (arrayMatch) {
      return acc[arrayMatch[1]]?.[parseInt(arrayMatch[2])];
    }
    return acc[key];
  }, obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const lang: Lang = location.pathname.startsWith('/en') ? 'en' : 'es';
  const translations = lang === 'es' ? es : en;

  const t = useCallback(
    (key: string): any => {
      const value = getNestedValue(translations, key);
      return value !== undefined ? value : key;
    },
    [translations]
  );

  const lp = useCallback(
    (esPath: string): string => translatePath(esPath, lang),
    [lang]
  );

  const switchLanguage = useCallback(() => {
    const targetLang = lang === 'es' ? 'en' : 'es';
    const newPath = currentPathToOtherLang(location.pathname, lang);
    navigate(newPath);
  }, [lang, location.pathname, navigate]);

  const value = useMemo(
    () => ({ lang, t, lp, switchLanguage }),
    [lang, t, lp, switchLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
