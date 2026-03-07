import { Button } from '@/components/ui/button';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { adultServices, childServices } from '@/data/services';
import { adultServicesEn, childServicesEn } from '@/data/services-en';
import { useLanguage } from '@/i18n/context';

const Services = () => {
  const { t, lp, lang } = useLanguage();
  const adults = lang === 'es' ? adultServices : adultServicesEn;
  const children = lang === 'es' ? childServices : childServicesEn;

  const adultLabel = lang === 'es' ? 'Adultos' : 'Adults';
  const childLabel = lang === 'es' ? 'Infantojuvenil' : 'Child & Adolescent';
  const morningLabel = lang === 'es' ? 'Presencial y online' : 'In-person & online';
  const afternoonLabel = lang === 'es' ? 'Presencial y online' : 'In-person & online';

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
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {adults.map((service, index) => (
              <Link
                key={service.slug}
                to={lp(`/servicios/${service.slug}`)}
                className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up block"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
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
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {children.map((service, index) => (
              <Link
                key={service.slug}
                to={lp(`/servicios/${service.slug}`)}
                className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up block"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
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
