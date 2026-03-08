import { ArrowRight, FileText, Headphones, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Newsletter from '@/components/landing/Newsletter';
import SEO from '@/components/SEO';
import ProductCard from '@/components/tienda/ProductCard';
import { useLanguage } from '@/i18n/context';

const productIcons = [FileText, Headphones, Sparkles];

const Tienda = () => {
  const { t, lp, lang } = useLanguage();
  const s = t('tienda') as any;

  const canonical = `https://genpsicologia.com${lp('/tienda')}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={lang === 'en' ? 'Shop — Emotional Wellness Resources' : 'Tienda — Recursos de Bienestar Emocional'}
        description={lang === 'en' ? 'Downloadable guides, audio stories and printable kits for emotional regulation in children.' : 'Guías descargables, cuentos en audio y kits imprimibles para la regulación emocional infantil.'}
        lang={lang}
        canonical={canonical}
      />
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
              {(s.products as any[]).map((product: any, i: number) => (
                <ProductCard
                  key={product.title}
                  icon={productIcons[i] || FileText}
                  type={product.type}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  popular={product.popular}
                  externalUrl={product.externalUrl}
                />
              ))}
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
