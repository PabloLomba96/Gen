import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/i18n/context';

const Testimonials = () => {
  const { t } = useLanguage();
  const items = t('testimonials.items') as Array<{ name: string; role: string; content: string; highlight: string }>;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">{t('testimonials.label')}</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div
              key={item.name}
              className="glass rounded-2xl p-7 hover:shadow-lg transition-all animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-7 h-7 text-primary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                "{item.content}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                    <span className="text-sm font-semibold text-foreground">{item.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent-foreground font-medium">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-6 flex-wrap justify-center text-sm">
            <div className="flex items-center gap-1.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
              <span className="font-semibold text-foreground ml-1">{t('testimonials.trustRating')}</span>
            </div>
            <span className="w-px h-5 bg-border" />
            <span className="text-muted-foreground"><strong className="text-foreground">{t('testimonials.trustFamilies')}</strong> {t('testimonials.trustFamiliesLabel')}</span>
            <span className="w-px h-5 bg-border" />
            <span className="text-muted-foreground"><strong className="text-foreground">{t('testimonials.trustExperience')}</strong> {t('testimonials.trustExperienceLabel')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
