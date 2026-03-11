import { Button } from '@/components/ui/button';
import { ArrowRight, Sun, Moon, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { adultServices, childServices, todosServices } from '@/data/services';
import { adultServicesEn, childServicesEn, todosServicesEn } from '@/data/services-en';
import { useLanguage } from '@/i18n/context';
import { pushToDataLayer } from '@/hooks/useGTM';
import { brandGen } from '@/lib/brandGen';

const Services = () => {
  const { t, lp, lang } = useLanguage();
  const adults = lang === 'es' ? adultServices : adultServicesEn;
  const children = lang === 'es' ? childServices : childServicesEn;
  const todos = lang === 'es' ? todosServices : todosServicesEn;

  const adultLabel = lang === 'es' ? 'Adultos' : 'Adults';
  const childLabel = lang === 'es' ? 'Infantojuvenil' : 'Child & Adolescent';
  const todosLabel = lang === 'es' ? 'Para todos' : 'For Everyone';
  const morningLabel = lang === 'es' ? 'Presencial y online' : 'In-person & online';
  const afternoonLabel = lang === 'es' ? 'Presencial y online' : 'In-person & online';
  const allAgesLabel = lang === 'es' ? 'Todas las edades' : 'All ages';

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t('servicesSection.label')}</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            {t('servicesSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('servicesSection.subtitle')}
          </p>
        </div>

        {/* Adults section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sun className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground">{adultLabel}</h3>
              <p className="text-xs text-muted-foreground">{morningLabel}</p>
              <p className="text-sm font-display text-foreground/70 italic mt-1">
                {lang === 'es' ? (
                  <>Date un mar<span className="text-primary font-semibold">gen</span> para sentir y recupera la a<span className="text-primary font-semibold">gen</span>cia de tu vida.</>
                ) : (
                  <>Give yourself the space to feel and reclaim your a<span className="text-primary font-semibold">gen</span>cy.</>
                )}
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {adults.map((service, index) => (
              <Link
                key={service.slug}
                to={lp(`/servicios/${service.slug}`)}
                onClick={() => pushToDataLayer('click_service_category', { category_name: service.shortTitle, section: adultLabel, location: 'home_services' })}
                className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up block"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2" dangerouslySetInnerHTML={{ __html: brandGen(service.shortTitle) }} />
                <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: brandGen(service.description) }} />
              </Link>
            ))}
          </div>
        </div>

        {/* Children section */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
              <Moon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground">{childLabel}</h3>
              <p className="text-xs text-muted-foreground">{afternoonLabel}</p>
              <p className="text-sm font-display text-foreground/70 italic mt-1">
                {lang === 'es' ? (
                  <>Acompañamiento psicológico para cada <span className="text-primary font-semibold italic">gen</span>eración.</>
                ) : (
                  <>Psychological support for every <span className="text-primary font-semibold italic">gen</span>eration.</>
                )}
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {children.map((service, index) => (
              <Link
                key={service.slug}
                to={lp(`/servicios/${service.slug}`)}
                onClick={() => pushToDataLayer('click_service_category', { category_name: service.shortTitle, section: childLabel, location: 'home_services' })}
                className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up block"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2" dangerouslySetInnerHTML={{ __html: brandGen(service.shortTitle) }} />
                <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: brandGen(service.description) }} />
              </Link>
            ))}
          </div>
        </div>

        {/* For Everyone section */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-overlap/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground">{todosLabel}</h3>
              <p className="text-xs text-muted-foreground">{allAgesLabel}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {todos.map((service, index) => (
              <Link
                key={service.slug}
                to={lp(`/servicios/${service.slug}`)}
                onClick={() => pushToDataLayer('click_service_category', { category_name: service.shortTitle, section: todosLabel, location: 'home_services' })}
                className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up block"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2" dangerouslySetInnerHTML={{ __html: brandGen(service.shortTitle) }} />
                <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: brandGen(service.description) }} />
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 shadow-md group"
          >
            <Link to={lp('/servicios')}>
              {t('servicesSection.cta')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
