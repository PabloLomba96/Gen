import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Services from '@/components/landing/Services';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import Newsletter from '@/components/landing/Newsletter';
import Footer from '@/components/landing/Footer';
import JsonLd from '@/components/JsonLd';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Para qué edades trabajáis?',
      acceptedAnswer: { '@type': 'Answer', text: 'Trabajamos con niños a partir de 3 años, adolescentes y también ofrecemos orientación a familias y centros educativos.' },
    },
    {
      '@type': 'Question',
      name: '¿Las sesiones son presenciales u online?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ofrecemos ambas modalidades. Las sesiones presenciales se realizan en Valencia y las online por videollamada segura.' },
    },
    {
      '@type': 'Question',
      name: '¿Cómo es la primera consulta?',
      acceptedAnswer: { '@type': 'Answer', text: 'La primera consulta es una sesión de evaluación donde nos conocemos, exploras tu motivo de consulta y valoramos juntos el plan de intervención más adecuado.' },
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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