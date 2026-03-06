import { Navigate, useParams } from 'react-router-dom';

/**
 * Redirects old service slugs to the new location-based slugs.
 * This preserves SEO juice from any existing backlinks or Google indexing.
 */
const slugRedirects: Record<string, string> = {
  'terapia-infantil': 'psicologia-infantil-valencia',
  'terapia-adolescentes': 'psicologo-adolescentes-valencia',
  'altas-capacidades': 'altas-capacidades-valencia',
  'tdah-tea': 'tdah-tea-valencia',
  'dificultades-aprendizaje': 'dificultades-aprendizaje-valencia',
  'regulacion-emocional': 'terapia-rabietas-regulacion-emocional-ninos',
  'terapia-familiar': 'terapia-familiar-valencia',
  'creatividad-talento': 'creatividad-talento-ninos-valencia',
  'trauma-apego': 'trauma-infantil-apego-valencia',
};

const ServiceRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  const newSlug = slug ? slugRedirects[slug] : undefined;

  if (newSlug) {
    return <Navigate to={`/servicios/${newSlug}`} replace />;
  }

  // If no redirect match, this will be handled by ServicioDetalle
  return null;
};

export { slugRedirects };
export default ServiceRedirect;
