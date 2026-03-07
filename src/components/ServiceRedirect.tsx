import { Navigate, useParams } from 'react-router-dom';

/**
 * Redirects old service slugs to new ones or to /servicios.
 * Preserves SEO from old backlinks.
 */
const slugRedirects: Record<string, string> = {
  // Old slugs → new slugs
  'terapia-infantil': 'neurodivergencias',
  'psicologia-infantil-valencia': 'neurodivergencias',
  'terapia-adolescentes': 'regulacion-emocional-autoestima',
  'psicologo-adolescentes-valencia': 'regulacion-emocional-autoestima',
  'altas-capacidades': 'neurodivergencias',
  'altas-capacidades-valencia': 'neurodivergencias',
  'tdah-tea': 'neurodivergencias',
  'tdah-tea-valencia': 'neurodivergencias',
  'dificultades-aprendizaje-valencia': 'dificultades-aprendizaje',
  'regulacion-emocional': 'regulacion-emocional-autoestima',
  'terapia-rabietas-regulacion-emocional-ninos': 'regulacion-emocional-autoestima',
  'terapia-familiar-valencia': 'terapia-familiar',
  'creatividad-talento': 'desarrollo-y-creatividad',
  'creatividad-talento-ninos-valencia': 'desarrollo-y-creatividad',
  'trauma-apego': 'regulacion-emocional-autoestima',
  'trauma-infantil-apego-valencia': 'regulacion-emocional-autoestima',
};

const ServiceRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  const newSlug = slug ? slugRedirects[slug] : undefined;

  if (newSlug) {
    return <Navigate to={`/servicios/${newSlug}`} replace />;
  }

  return <Navigate to="/servicios" replace />;
};

export { slugRedirects };
export default ServiceRedirect;
