import { Helmet } from 'react-helmet-async';

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
  const fullTitle = title.includes('Gen Psicología') ? title : `${title} | Gen Psicología`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_GB'} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
