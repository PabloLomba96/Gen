import { useParams, Link, Navigate } from 'react-router-dom';
import { slugRedirects } from '@/components/ServiceRedirect';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, CheckCircle, MapPin, Video, AlertCircle, BookOpen, User, Baby, UserCheck } from 'lucide-react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import JsonLd from '@/components/JsonLd';
import SEO from '@/components/SEO';
import { services } from '@/data/services';
import { servicesEn } from '@/data/services-en';
import { blogArticles } from '@/data/blogArticles';
import { blogArticlesFromServices } from '@/data/blogArticlesFromServices';
import { useLanguage } from '@/i18n/context';
import { useMemo } from 'react';
import { brandGen } from '@/lib/brandGen';
import { pushToDataLayer } from '@/hooks/useGTM';

const ServicioDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lp, lang } = useLanguage();
  const s = t('servicioDetalle') as any;
  const serviceData = lang === 'en' ? servicesEn : services;
  const service = serviceData.find((sv) => sv.slug === slug);
  const otherServices = serviceData.filter((sv) => sv.slug !== slug);

  const allArticles = useMemo(() => [...blogArticles, ...blogArticlesFromServices], []);
  const relatedArticles = useMemo(
    () => allArticles.filter((a) => a.relatedServiceSlug === slug).slice(0, 3),
    [slug, allArticles]
  );


  if (!service) {
    if (slug && slugRedirects[slug]) {
      return <Navigate to={lp(`/servicios/${slugRedirects[slug]}`)} replace />;
    }
    return <Navigate to={lp('/servicios')} replace />;
  }

  const categoryLabels: Record<string, string> = {
    adultos: lang === 'es' ? 'Psicología para Adultos' : 'Adult Psychology',
    infantojuvenil: lang === 'es' ? 'Psicología Infantojuvenil' : 'Child & Adolescent Psychology',
    expats: lang === 'es' ? 'Terapia para Expats' : 'Expat Therapy',
    todos: lang === 'es' ? 'Psicología para Todos' : 'Psychology for Everyone',
  };

  const audienceMap: Record<string, Record<string, unknown>> = {
    adultos: { '@type': 'PeopleAudience', suggestedMinAge: 18, audienceType: 'Adults' },
    infantojuvenil: { '@type': 'PeopleAudience', suggestedMinAge: 3, suggestedMaxAge: 17, audienceType: 'Children & Adolescents' },
    expats: { '@type': 'PeopleAudience', audienceType: 'Expats / English speakers' },
    todos: { '@type': 'PeopleAudience', suggestedMinAge: 0, audienceType: 'All ages' },
  };

  const serviceUrl = `https://genpsicologia.com${lp(`/servicios/${service.slug}`)}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapeuticProcedure',
    name: service.title,
    description: service.longDescription,
    url: serviceUrl,
    category: categoryLabels[service.category] || service.category,
    audience: audienceMap[service.category],
    provider: {
      '@type': 'Physician',
      name: 'Patricia Martínez Díaz',
      jobTitle: 'Psicóloga General Sanitaria',
      identifier: 'Nº Col. CV16625',
      relevantSpecialty: 'Psychology',
      url: 'https://genpsicologia.com/sobre-mi',
      worksFor: {
        '@type': 'MedicalBusiness',
        name: 'Gen Centro de Psicología',
        url: 'https://genpsicologia.com',
        telephone: '+34611889209',
        email: 'patricia@genpsicologia.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Valencia',
          addressCountry: 'ES',
        },
        priceRange: '€€',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Valencia' },
      { '@type': 'Country', name: 'España' },
    ],
    availableChannel: [
      { '@type': 'ServiceChannel', serviceType: lang === 'es' ? 'Presencial' : 'In-person', serviceLocation: { '@type': 'Place', name: 'Valencia' } },
      { '@type': 'ServiceChannel', serviceType: 'Online' },
    ],
    serviceType: service.title,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'es' ? 'Inicio' : 'Home', item: `https://genpsicologia.com${lp('/')}` },
      { '@type': 'ListItem', position: 2, name: lang === 'es' ? 'Servicios' : 'Services', item: `https://genpsicologia.com${lp('/servicios')}` },
      { '@type': 'ListItem', position: 3, name: service.title, item: serviceUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        lang={lang}
        canonical={`https://genpsicologia.com${lp(`/servicios/${service.slug}`)}`}
      />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main className="pt-20">
        {/* Breadcrumb + Hero */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 flex-wrap text-sm">
              <Link to={lp('/')} className="text-muted-foreground hover:text-primary transition-colors">{t('common.breadcrumbHome')}</Link>
              <span className="text-muted-foreground">/</span>
              <Link to={lp('/servicios')} className="text-muted-foreground hover:text-primary transition-colors">{t('nav.services')}</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground" dangerouslySetInnerHTML={{ __html: brandGen(service.title) }} />
            </div>

            <div className="max-w-4xl">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                service.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
              }`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6" dangerouslySetInnerHTML={{ __html: brandGen(service.title) }} />
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl" dangerouslySetInnerHTML={{ __html: brandGen(service.longDescription) }} />
            </div>
          </div>
        </section>

        {/* Symptoms — only when there's NO dual-focus */}
        {service.symptoms && service.symptoms.length > 0 && !(service.adultApproach && service.childApproach) && (
          <section className="py-16 bg-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">{(service.category === 'infantojuvenil' || service.slug.includes('infantojuvenil') || service.slug.includes('children')) ? s.symptomsTitle : s.symptomsTitleAdults}</h2>
                </div>
                <ul className="space-y-3">
                  {service.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border">
                      <span className="text-accent mt-0.5 shrink-0">•</span>
                      <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: brandGen(symptom) }} />
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground text-center">
                  {s.symptomsFooter}{' '}
                  <Link to={lp('/contacto')} className="text-primary font-medium hover:underline" onClick={() => pushToDataLayer('click_book_session', { service_slug: service?.slug, location: 'service_detail_symptoms' })}>{s.symptomsLink}</Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Dual-Focus Section */}
        {service.adultApproach && service.childApproach && (
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-display font-bold text-foreground text-center mb-2">{s.dualFocusTitle}</h2>
                <p className="text-muted-foreground text-center mb-10">{s.dualFocusSubtitle}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Adult column */}
                  <div className="glass rounded-2xl p-6 border border-primary/20">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-foreground">{service.adultApproach.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {service.adultApproach.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: brandGen(item) }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Child column */}
                  <div className="glass rounded-2xl p-6 border border-accent/20">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Baby className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-foreground">{service.childApproach.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {service.childApproach.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: brandGen(item) }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* School Coordination - for infantojuvenil, todos, and expats children */}
        {(service.category === 'infantojuvenil' || 
          service.category === 'todos' || 
          (service.category === 'expats' && (service.slug.includes('infantojuvenil') || service.slug.includes('children')))) && (
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-10 border border-primary/10" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <UserCheck className="w-6 h-6 text-primary" />
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

        {/* Details */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-8">{s.detailsTitle}</h2>
                <ul className="space-y-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: brandGen(detail) }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-4">{s.modalitiesTitle}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{s.inPerson}</p>
                        <p className="text-xs text-muted-foreground">{s.inPersonLocation}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Video className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{s.online}</p>
                        <p className="text-xs text-muted-foreground">{s.onlineLocation}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full h-14">
                  <Link to={lp('/contacto')} onClick={() => pushToDataLayer('click_book_session', { service_slug: service?.slug, location: 'service_detail_cta' })}>
                    {s.bookCta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-foreground mb-10 text-center">{s.otherServicesTitle}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {otherServices.map((sv) => (
                <Link
                  key={sv.slug}
                  to={lp(`/servicios/${sv.slug}`)}
                  className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all text-center"
                  style={{ boxShadow: 'var(--shadow-soft)' }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                    sv.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                  }`}>
                    <sv.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: brandGen(sv.shortTitle) }} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 mb-10 justify-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">{s.relatedArticlesTitle}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={lp(`/blog/${article.slug}`)}
                    className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all"
                    style={{ boxShadow: 'var(--shadow-soft)' }}
                  >
                    <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">{article.category}</span>
                    <h3 className="text-base font-display font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{article.excerpt}</p>
                    <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                      {s.relatedArticlesReadMore}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">{s.ctaTitle}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{s.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8">
                <Link to={lp('/contacto')} onClick={() => pushToDataLayer('click_book_session', { service_slug: service?.slug, location: 'service_detail_footer_cta' })}>
                  {s.ctaContact}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8">
                <Link to={lp('/servicios')}>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  {s.ctaAllServices}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicioDetalle;
