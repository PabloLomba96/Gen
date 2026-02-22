import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Headphones, FileText, Star, ShoppingBag, Download, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const products = [
  {
    icon: FileText,
    title: 'Guía de Regulación Emocional',
    description: 'Ejercicios y técnicas para ayudar a los niños a identificar y gestionar sus emociones. Incluye actividades para hacer en casa.',
    price: 'Gratis',
    type: 'PDF Descargable',
    popular: true,
  },
  {
    icon: Headphones,
    title: 'Cuentos para Dormir',
    description: 'Historias relajantes con técnicas de mindfulness para ayudar a los pequeños a descansar y reducir la ansiedad nocturna.',
    price: '4,99€',
    type: 'Audio MP3',
    popular: false,
  },
  {
    icon: FileText,
    title: 'Kit de Emociones',
    description: 'Tarjetas imprimibles con emociones para que los niños aprendan a identificar y expresar lo que sienten.',
    price: '2,99€',
    type: 'PDF Imprimible',
    popular: false,
  },
  {
    icon: Download,
    title: 'Rutina Visual para el Cole',
    description: 'Plantillas visuales para organizar la rutina escolar, especialmente útiles para niños con TDAH o TEA.',
    price: 'Gratis',
    type: 'PDF Descargable',
    popular: true,
  },
];

const recommendations = [
  {
    title: 'Libros para familias',
    description: 'Mi selección de lecturas sobre crianza respetuosa, desarrollo infantil y gestión emocional.',
    icon: BookOpen,
  },
  {
    title: 'Juegos terapéuticos',
    description: 'Juegos y materiales que uso en consulta y que puedes usar en casa para trabajar emociones.',
    icon: ShoppingBag,
  },
  {
    title: 'Apps recomendadas',
    description: 'Aplicaciones útiles para mindfulness infantil, organización y regulación emocional.',
    icon: Star,
  },
];

const Recursos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-foreground">Recursos</span>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Herramientas para <span className="text-gradient">empezar hoy</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                No siempre puedes empezar terapia, pero siempre puedes empezar a cuidarte. 
                Recursos prácticos y accesibles para familias.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Products */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Productos Digitales</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Materiales descargables</h2>
              <p className="text-lg text-muted-foreground">
                Recursos creados por mí, basados en mi experiencia en consulta, para que puedas usarlos en casa.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
                  style={{ boxShadow: 'var(--shadow-soft)' }}
                >
                  {product.popular && (
                    <div className="absolute -top-3 right-6 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
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
                          {product.price === 'Gratis' ? 'Descargar' : 'Comprar'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Recomendaciones</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Lo que recomiendo</h2>
              <p className="text-lg text-muted-foreground">
                Libros, juegos y herramientas que uso y recomiendo a las familias.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {recommendations.map((item) => (
                <a
                  key={item.title}
                  href="#"
                  className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
                  style={{ boxShadow: 'var(--shadow-soft)' }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h4 className="text-lg font-display font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-primary/20 text-center">
              <Instagram className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
                Más contenido gratuito en Instagram
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                En mi Instagram comparto contenido diario sobre psicología infantil, 
                crianza respetuosa y desarrollo emocional. ¡Sígueme para no perderte nada!
              </p>
              <Button asChild size="lg" className="h-14 px-8">
                <a href="https://instagram.com/patri_psicologia" target="_blank" rel="noopener noreferrer">
                  Seguir @patri_psicologia
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
              ¿Necesitas ayuda profesional?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Los recursos son un buen inicio, pero a veces necesitamos acompañamiento profesional. Estoy aquí para ayudarte.
            </p>
            <Button asChild size="lg" className="h-14 px-8">
              <Link to="/#contacto">
                Reservar Primera Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Recursos;
