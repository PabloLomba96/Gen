import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Services from '@/components/landing/Services';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import Newsletter from '@/components/landing/Newsletter';
import Footer from '@/components/landing/Footer';
import JsonLd from '@/components/JsonLd';
import SEO from '@/components/SEO';
import { useLanguage } from '@/i18n/context';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo sé si mi hijo necesita un psicólogo?',
      acceptedAnswer: { '@type': 'Answer', text: 'Si notas cambios bruscos de comportamiento, rabietas muy intensas, miedos que le impiden hacer vida normal, problemas de sueño, dificultades en el colegio o tristeza persistente, es buen momento para consultar.' },
    },
    {
      '@type': 'Question',
      name: '¿A partir de qué edad se puede llevar a un niño al psicólogo?',
      acceptedAnswer: { '@type': 'Answer', text: 'A partir de los 3 años ya se pueden realizar intervenciones adaptadas a su edad a través del juego terapéutico. También ofrezco orientación a padres de niños más pequeños.' },
    },
    {
      '@type': 'Question',
      name: '¿Mi hijo tiene ansiedad? ¿Cuáles son las señales?',
      acceptedAnswer: { '@type': 'Answer', text: 'Algunos signos de ansiedad infantil son: preocupación excesiva, miedos desproporcionados, dolor de barriga o cabeza sin causa médica, dificultad para dormir, negarse a ir al colegio, irritabilidad o llanto frecuente.' },
    },
    {
      '@type': 'Question',
      name: '¿Se puede hacer terapia infantil online?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí, ofrezco sesiones online igual de efectivas y con mayor flexibilidad horaria para familias que no pueden desplazarse a Valencia.' },
    },
    {
      '@type': 'Question',
      name: '¿Cómo funciona la primera consulta?',
      acceptedAnswer: { '@type': 'Answer', text: 'La primera consulta es una toma de contacto para conocernos: me cuentas qué os preocupa, evalúo la situación y os explico cómo puedo ayudaros. Es sin compromiso y con total confidencialidad.' },
    },
    {
      '@type': 'Question',
      name: '¿Cómo sé si necesito ir a terapia?',
      acceptedAnswer: { '@type': 'Answer', text: 'Si sientes que la ansiedad, la tristeza o el estrés interfieren en tu día a día, o simplemente buscas un espacio de autoconocimiento, la terapia es para ti. No hace falta estar "al límite" para pedir ayuda.' },
    },
    {
      '@type': 'Question',
      name: '¿Tratáis ansiedad laboral o crisis vitales?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí, en nuestras sesiones de mañana para adultos trabajamos específicamente la gestión del estrés, burnout, autoestima y transiciones vitales.' },
    },
  ],
};

const medicalClinicJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  'name': 'Gen Psicología',
  'description': 'Clínica de Psicología y Psicoterapia especializada en procesos terapéuticos y evaluaciones para adultos y población infantojuvenil.',
  'url': 'https://genpsicologia.com/',
  'logo': 'https://genpsicologia.com/logo-gen.png',
  'image': 'https://genpsicologia.com/og-image.png',
  'telephone': '+34611889209',
  'email': 'hola@genpsicologia.com',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Valencia',
    'addressLocality': 'Valencia',
    'addressRegion': 'Comunidad Valenciana',
    'postalCode': '46002',
    'addressCountry': 'ES'
  },
  'founder': {
    '@type': 'Person',
    'name': 'Patricia Martinez Diaz',
    'jobTitle': 'Psicóloga',
    'identifier': 'Nº Col. CV16625',
    'url': 'https://genpsicologia.com/sobre-mi'
  },
  'medicalSpecialty': 'Psychological'
};

const Index = () => {
  const { lang } = useLanguage();

  const seoTitle = lang === 'es'
    ? 'Gen Psicología | Terapia para Adultos, Adolescentes y Niños en Valencia'
    : 'Gen Psychology | Therapy for Adults, Adolescents & Children in Valencia';
  const seoDesc = lang === 'es'
    ? 'Centro de Psicología en Valencia: terapia para adultos, adolescentes y niños. Neurodivergencias, regulación emocional, terapia de pareja. Presencial y online. Patricia Martínez Díaz (CV16625).'
    : 'Psychology Centre in Valencia: therapy for adults, adolescents and children. Neurodivergence, emotional regulation, couples therapy. In-person and online. Patricia Martínez Díaz (CV16625).';
  const canonical = lang === 'es' ? 'https://genpsicologia.com/' : 'https://genpsicologia.com/en';

  return (
    <div className="min-h-screen bg-background">
      <SEO title={seoTitle} description={seoDesc} lang={lang} canonical={canonical} />
      <JsonLd data={faqJsonLd} />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
