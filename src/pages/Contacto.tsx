import Header from '@/components/landing/Header';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import JsonLd from '@/components/JsonLd';
import SEO from '@/components/SEO';
import { useLanguage } from '@/i18n/context';

const BASE = 'https://genpsicologia.com';
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
  const { lang, lp } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={lang === 'en' ? 'Contact — Book Your Appointment' : 'Contacto — Pide tu Cita'}
        description={lang === 'en' ? 'Get in touch with Gen Psicología. Book an in-person session in Valencia or an online appointment. We reply within 24 h.' : 'Contacta con Gen Psicología. Reserva tu sesión presencial en Valencia o tu cita online. Respondemos en menos de 24 h.'}
        lang={lang}
        canonical={`${BASE}${lp('/contacto')}`}
      />
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
