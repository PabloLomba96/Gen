import { Button } from '@/components/ui/button';
import { GraduationCap, Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/context';

const icons = [GraduationCap, Award, Heart];

const About = () => {
  const { t, lp, lang } = useLanguage();
  const credentials = t('about.credentials') as Array<{ title: string; description: string }>;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 space-y-4 animate-fade-up">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              {t('about.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              {t('about.title')}
            </h2>
            <p className="text-base sm:text-lg font-display text-foreground/80 italic">
              {lang === 'es' ? (
                <>Una terapia basada en la conexión <span className="text-primary font-semibold italic">gen</span>uina.</>
              ) : (
                <>Therapy based on a <span className="text-primary font-semibold italic">gen</span>uine connection.</>
              )}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {credentials.map((item, index) => {
              const Icon = icons[index] || Heart;
              return (
                <div
                  key={item.title}
                  className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button 
              asChild
              variant="outline"
              className="rounded-full border-2 px-8 h-12 group"
            >
              <Link to={lp('/sobre-mi')}>
                {t('about.cta')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
