import { Button } from '@/components/ui/button';
import { ArrowRight, Video, MapPin, UserCheck, Lightbulb, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import ServiceCard from '@/components/servicios/ServiceCard';
import ModalityCard from '@/components/servicios/ModalityCard';
import JsonLd from '@/components/JsonLd';
import { services, adultServices, childServices } from '@/data/services';
import { servicesEn, adultServicesEn, childServicesEn } from '@/data/services-en';
import { useLanguage } from '@/i18n/context';

const Servicios = () => {
  const { t, lp, lang } = useLanguage();
  const s = t('serviciosPage') as any;
  const adults = lang === 'en' ? adultServicesEn : adultServices;
  const children = lang === 'en' ? childServicesEn : childServices;
  const allServices = lang === 'en' ? servicesEn : services;
  const modalityIcons = [MapPin, Video];

  const adultLabel = lang === 'es' ? 'Adultos' : 'Adults';
  const childLabel = lang === 'es' ? 'Infantojuvenil' : 'Child & Adolescent';
  const morningLabel = lang === 'es' ? 'Horarios de mañana' : 'Morning sessions';
  const afternoonLabel = lang === 'es' ? 'Horarios de tarde' : 'Afternoon sessions';

  const serviciosJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios de Psicología — Gen Psicología',
    url: 'https://genpsicologia.com/servicios',
    numberOfItems: allServices.length,
    itemListElement: allServices.map((sv, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'Service', name: sv.title, description: sv.description, url: `https://genpsicologia.com/servicios/${sv.slug}` },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={serviciosJsonLd} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <Link to={lp('/')} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.breadcrumbHome}</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-foreground">{s.breadcrumbServices}</span>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                {s.title} <span className="text-gradient">{s.titleHighlight}</span>?
              </h1>
              <p className="text-lg text-muted-foreground">{s.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Adults */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">{adultLabel}</h2>
                <p className="text-sm text-muted-foreground">{morningLabel}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {adults.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Children */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                <Moon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">{childLabel}</h2>
                <p className="text-sm text-muted-foreground">{afternoonLabel}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {children.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* School coordination */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <UserCheck className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.schoolCoordTitle}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.schoolCoordText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Minor note */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-accent/5 border border-accent/20 rounded-2xl p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">{s.minorNoteLabel}</strong> {s.minorNote}
              </p>
            </div>
          </div>
        </section>

        {/* Modalities */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">{s.modalitiesLabel}</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">{s.modalitiesTitle}</h2>
              <p className="text-lg text-muted-foreground">{s.modalitiesSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {(s.modalities as any[]).map((mod: any, i: number) => (
                <ModalityCard key={mod.title} modality={{ icon: modalityIcons[i], title: mod.title, description: mod.description }} />
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">{s.processLabel}</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">{s.processTitle}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {(s.processSteps as any[]).map((item: any) => (
                <div key={item.step} className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-xl font-display font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not found */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Lightbulb className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.notFoundTitle}</h3>
            <p className="text-muted-foreground mb-6">{s.notFoundText}</p>
            <Button asChild variant="outline" className="rounded-full">
              <Link to={lp('/contacto')}>{s.notFoundCta}</Link>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">{s.ctaTitle}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{s.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8">
                <Link to={lp('/contacto')}>
                  {s.ctaPrimary}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8">
                <a href="https://instagram.com/genpsicologia" target="_blank" rel="noopener noreferrer">{s.ctaInstagram}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
