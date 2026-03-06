import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Headphones, FileText, Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/context';

const Resources = () => {
  const { lang, lp } = useLanguage();
  const isEn = lang === 'en';

  const products = [
    {
      icon: FileText,
      title: isEn ? 'Emotional Regulation Guide' : 'Guía de Regulación Emocional',
      description: isEn ? 'Exercises and techniques to help children identify and manage their emotions.' : 'Ejercicios y técnicas para ayudar a los niños a identificar y gestionar sus emociones.',
      price: isEn ? 'Free' : 'Gratis',
      type: isEn ? 'Downloadable PDF' : 'PDF Descargable',
      popular: true,
    },
    {
      icon: Headphones,
      title: isEn ? 'Bedtime Stories' : 'Cuentos para Dormir',
      description: isEn ? 'Relaxing stories with mindfulness techniques to help little ones rest.' : 'Historias relajantes con técnicas de mindfulness para ayudar a los pequeños a descansar.',
      price: '4,99€',
      type: 'Audio MP3',
      popular: false,
    },
  ];

  const recommendations = [
    {
      title: isEn ? 'Books for families' : 'Libros para familias',
      description: isEn ? 'My selection of reads on respectful parenting and child development.' : 'Mi selección de lecturas sobre crianza respetuosa y desarrollo infantil.',
      icon: BookOpen,
    },
    {
      title: isEn ? 'Therapeutic games' : 'Juegos terapéuticos',
      description: isEn ? 'Games and materials I use in practice that you can use at home.' : 'Juegos y materiales que uso en consulta y que puedes usar en casa.',
      icon: ShoppingBag,
    },
  ];

  return (
    <section id="recursos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">{isEn ? 'Resources' : 'Recursos'}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">{isEn ? 'Tools to get started today' : 'Herramientas para empezar hoy'}</h2>
          <p className="text-lg text-muted-foreground">{isEn ? "You can't always start therapy, but you can always start caring for yourself. Practical, accessible resources." : 'No siempre puedes empezar terapia, pero siempre puedes empezar a cuidarte. Recursos prácticos y accesibles.'}</p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold text-foreground mb-8 text-center">{isEn ? 'Digital Products' : 'Productos Digitales'}</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <div key={product.title} className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl" style={{ boxShadow: 'var(--shadow-soft)' }}>
                {product.popular && (
                  <div className="absolute -top-3 right-6 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <Star className="w-3 h-3 fill-current" />{isEn ? 'Best seller' : 'Más vendido'}
                  </div>
                )}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{product.type}</span>
                      <h4 className="text-lg font-display font-semibold text-foreground">{product.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        {isEn ? 'Buy' : 'Comprar'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-8 text-center">{isEn ? 'My Recommendations' : 'Mis Recomendaciones'}</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recommendations.map((item) => (
              <a key={item.title} href="#" className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl flex items-center gap-6" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-display font-semibold text-foreground group-hover:text-accent transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-8 h-14 border-2 hover:bg-secondary group">
              <Link to={lp('/tienda')}>
                {isEn ? 'View All Resources' : 'Ver Todos los Recursos'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
