import Header from '@/components/landing/Header';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import JsonLd from '@/components/JsonLd';

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto — Gen Centro de Psicología',
  url: 'https://genpsicologia.com/contacto',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'Gen Centro de Psicología',
    telephone: '+34611889209',
    email: 'patricia@genpsicologia.com',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
  },
};

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={contactJsonLd} />
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
