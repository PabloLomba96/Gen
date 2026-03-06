import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Headphones, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Newsletter from '@/components/landing/Newsletter';
import { useLanguage } from '@/i18n/context';

const productIcons = [FileText, Headphones, Sparkles];

const Tienda = () => {
  const { t, lp } = useLanguage();
  const s = t('tienda') as any;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">{s.label}</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
                {s.title} <span className="text-gradient">{s.titleHighlight}</span>
              </h1>
              <p className="text-lg text-muted-foreground">{s.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {(s.products as any[]).map((product: any, i: number) => {
                const Icon = productIcons[i] || FileText;
                return (
                  <div
                    key={product.title}
                    className="relative glass rounded-2xl p-7 hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    {product.popular && (
                      <div className="absolute -top-3 right-5 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        <Star className="w-3 h-3 fill-current" />
                        {s.popular}
                      </div>
                    )}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{product.type}</span>
                    <h3 className="text-lg font-display font-semibold text-foreground mt-1 mb-3">{product.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.description}</p>
                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
                        {s.proximamente}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Newsletter />

        {/* CTA */}
        <section className="py-16 bg-secondary/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">{s.ctaTitle}</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">{s.ctaSubtitle}</p>
            <Button asChild className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to={lp('/contacto')}>
                {s.ctaButton}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tienda;
