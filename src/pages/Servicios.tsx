import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Video, MapPin, UserCheck, Lightbulb, Sun, Moon, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import ServiceCard from '@/components/servicios/ServiceCard';

import JsonLd from '@/components/JsonLd';
import SEO from '@/components/SEO';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import { Badge } from '@/components/ui/badge';
import { services, adultServices, childServices, expatServices, todosServices } from '@/data/services';
import { servicesEn, adultServicesEn, childServicesEn, expatServicesEn, todosServicesEn } from '@/data/services-en';
import { useLanguage } from '@/i18n/context';
import { useLocation } from 'react-router-dom';
import { brandGen } from '@/lib/brandGen';

const Servicios = () => {
  const location = useLocation();
  const validTabs = ['adultos', 'infantojuvenil', 'expats'];
  const hashTab = location.hash.replace('#', '');
  const initialTab = validTabs.includes(hashTab) ? hashTab : 'adultos';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const h = location.hash.replace('#', '');
    if (validTabs.includes(h)) setActiveTab(h);
  }, [location.hash]);

  const { t, lp, lang } = useLanguage();
  const s = t('serviciosPage') as any;
  const todos = lang === 'en' ? todosServicesEn : todosServices;
  const adultsOnly = lang === 'en' ? adultServicesEn : adultServices;
  const childrenOnly = lang === 'en' ? childServicesEn : childServices;
  const expatsOnly = lang === 'en' ? expatServicesEn : expatServices;
  const allServices = lang === 'en' ? servicesEn : services;
  const modalityIcons = [MapPin, Video];

  const seoTitle = lang === 'es'
    ? 'Servicios de Psicología en Valencia | Adultos, Infantojuvenil y Expats'
    : 'Psychology Services in Valencia | Adults, Children & Expats';
  const seoDesc = lang === 'es'
    ? 'Terapia presencial en Valencia y online: adultos, adolescentes, niños y familias expat. Neurodivergencias, regulación emocional, terapia de pareja. Patricia Martínez Díaz (CV16625).'
    : 'In-person therapy in Valencia & online: adults, adolescents, children and expat families. Neurodivergence, emotional regulation, couples therapy. Patricia Martínez Díaz (CV16625).';
  const canonical = lang === 'es' ? 'https://genpsicologia.com/servicios' : 'https://genpsicologia.com/en/services';

  const serviciosJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: lang === 'es' ? 'Servicios de Psicología — Gen Psicología' : 'Psychology Services — Gen Psychology',
    url: canonical,
    numberOfItems: allServices.length,
    itemListElement: allServices.map((sv, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: sv.title,
        description: sv.description,
        url: `https://genpsicologia.com${lp(`/servicios/${sv.slug}`)}`,
      },
    })),
  };

  const expatsContent = lang === 'es' ? {
    title: 'Terapia en inglés para expats',
    subtitle: 'Vivir en un país nuevo puede ser emocionante y desafiante a la vez. Ofrezco terapia en inglés para adultos y niños que necesitan apoyo durante su adaptación.',
    adultsTitle: 'Para adultos',
    adultsDesc: 'Estrés por adaptación cultural, soledad, ansiedad laboral en un entorno nuevo, dificultades de pareja por el cambio de país, duelo migratorio.',
    childrenTitle: 'Para niños y adolescentes',
    childrenDesc: 'Adaptación escolar en un nuevo idioma, dificultades sociales, neurodivergencia diagnosticada o sospechada en un nuevo sistema educativo, regulación emocional.',
    cta: 'Contactar en inglés',
    badges: ['Cultural adaptation', 'Bilingual therapy', 'School coordination', 'Online available'],
  } : {
    title: 'English-speaking therapy for expats',
    subtitle: 'Moving to a new country can be both exciting and challenging. I offer therapy in English for adults and children who need support during their adjustment.',
    adultsTitle: 'For adults',
    adultsDesc: 'Cultural adjustment stress, loneliness, workplace anxiety in a new environment, relationship difficulties due to relocation, migratory grief.',
    childrenTitle: 'For children & adolescents',
    childrenDesc: 'School adaptation in a new language, social difficulties, neurodivergence diagnosed or suspected in a new educational system, emotional regulation.',
    cta: 'Contact in English',
    badges: ['Cultural adaptation', 'Bilingual therapy', 'School coordination', 'Online available'],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title={seoTitle} description={seoDesc} lang={lang} canonical={canonical} />
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

        {/* Modalities highlight */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    {lang === 'es' ? 'Consulta Presencial en Valencia' : 'In-person therapy in Valencia'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === 'es' ? 'Espacio cálido y seguro para ti y tu familia' : 'A warm, safe space for you and your family'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Video className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    {lang === 'es' ? 'Terapia Online' : 'Online Therapy'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === 'es' ? 'Misma calidad, mayor flexibilidad horaria' : 'Same quality, greater scheduling flexibility'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="h-auto flex-wrap gap-1 p-1 bg-secondary/60">
                  <TabsTrigger value="adultos" className="px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-background">
                    <Sun className="w-4 h-4 mr-1.5 sm:mr-2 shrink-0" />
                    {lang === 'es' ? 'Adultos' : 'Adults'}
                  </TabsTrigger>
                  <TabsTrigger value="infantojuvenil" className="px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-background">
                    <Moon className="w-4 h-4 mr-1.5 sm:mr-2 shrink-0" />
                    {lang === 'es' ? 'Infantojuvenil' : 'Child & Adolescent'}
                  </TabsTrigger>
                  <TabsTrigger value="expats" className="px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-background">
                    <Globe className="w-4 h-4 mr-1.5 sm:mr-2 shrink-0" />
                    Expats & English
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Adults */}
              <TabsContent value="adultos">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sun className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-foreground">
                        {lang === 'es' ? 'Terapia para Adultos' : 'Adult Therapy'}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {lang === 'es' ? 'Presencial y online' : 'In-person & online'}
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {adultsOnly.map((service) => (
                      <ServiceCard key={service.slug} service={service} />
                    ))}
                  </div>

                  {/* Separator + transversal services */}
                  <div className="flex items-center gap-3 mt-12 mb-8">
                    <div className="flex-1 h-px bg-border" />
                    <Badge variant="secondary" className="text-xs px-3 py-1 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {lang === 'es' ? 'Para todos' : 'For Everyone'}
                    </Badge>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {todos.map((service) => (
                      <ServiceCard key={service.slug} service={service} />
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Children */}
              <TabsContent value="infantojuvenil">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Moon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-foreground">
                        {lang === 'es' ? 'Psicología Infantojuvenil' : 'Child & Adolescent Psychology'}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {lang === 'es' ? 'Presencial y online' : 'In-person & online'}
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {childrenOnly.map((service) => (
                      <ServiceCard key={service.slug} service={service} />
                    ))}
                  </div>

                  {/* Separator + transversal services */}
                  <div className="flex items-center gap-3 mt-12 mb-8">
                    <div className="flex-1 h-px bg-border" />
                    <Badge variant="secondary" className="text-xs px-3 py-1 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {lang === 'es' ? 'Para todos' : 'For Everyone'}
                    </Badge>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {todos.map((service) => (
                      <ServiceCard key={service.slug} service={service} />
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Expats */}
              <TabsContent value="expats">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-overlap/20 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-foreground">{expatsContent.title}</h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">{expatsContent.subtitle}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {expatsContent.badges.map((b) => (
                      <Badge key={b} variant="secondary" className="text-xs">{b}</Badge>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {expatsOnly.map((service) => (
                      <ServiceCard key={service.slug} service={service} />
                    ))}
                  </div>

                  {/* Separator + transversal services */}
                  <div className="flex items-center gap-3 mt-12 mb-8">
                    <div className="flex-1 h-px bg-border" />
                    <Badge variant="secondary" className="text-xs px-3 py-1 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {lang === 'es' ? 'Para todos' : 'For Everyone'}
                    </Badge>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {todos.map((service) => (
                      <ServiceCard key={service.slug} service={service} />
                    ))}
                  </div>

                  <div className="mb-8 p-4 rounded-xl bg-secondary/40 border border-border text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">💶 {lang === 'es' ? 'Divisas' : 'Currency'}:</span>{' '}
                    {lang === 'es'
                      ? 'Con indicación previa, aceptamos también pagos en USD, GBP y CNY. El importe se calculará según el tipo de cambio vigente y se comunicará antes de la prestación del servicio.'
                      : 'With prior notice, we also accept payments in USD, GBP and CNY. The amount will be calculated based on the current exchange rate and communicated before the session.'}
                  </div>

                  <Button asChild size="lg" className="rounded-full">
                    <Link to={`${lp('/contacto')}?from=expats`}>
                      {expatsContent.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* School coordination - only for infantojuvenil and expats */}
        {activeTab !== 'adultos' && (
        <section className="py-16 bg-secondary/20">
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
        )}

        {/* Minor note */}
        {activeTab !== 'adultos' && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-accent/5 border border-accent/20 rounded-2xl p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">{s.minorNoteLabel}</strong> {s.minorNote}
              </p>
            </div>
          </div>
        </section>
        )}

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
