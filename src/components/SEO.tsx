import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE = 'https://genpsicologia.com';

interface SEOProps {
  title: string;
  description: string;
  lang?: 'es' | 'en';
  canonical?: string;
  ogImage?: string;
}

const SEO = ({
  title,
  description,
  lang = 'es',
  canonical,
  ogImage = 'https://genpsicologia.com/og-image.png',
}: SEOProps) => {
  const { pathname } = useLocation();
  const fullTitle = title.includes('Gen Psicología') ? title : `${title} | Gen Psicología`;
  const finalCanonical = canonical || `${BASE}${pathname}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_GB'} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
