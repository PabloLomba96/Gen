import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Headphones, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Newsletter from '@/components/landing/Newsletter';

const products = [
  {
    icon: FileText,
    title: 'Workbook: Manual de Recarga para tu Batería Social',
    description: 'Ejercicios y técnicas para ayudar a niños introvertidos a gestionar su energía social. Ideal para familias y educadores.',
    price: '12,90€',
    type: 'Workbook PDF',
    popular: true,
  },
  {
    icon: Headphones,
    title: 'Audio-guía: SOS Ansiedad antes de un examen',
    description: 'Técnicas de relajación y mindfulness adaptadas para adolescentes. Audio guiado de 15 minutos.',
    price: '9€',
    type: 'Audio MP3',
    popular: false,
  },
  {
    icon: Sparkles,
    title: 'Pack de 5 Meditaciones Guiadas para Niños',
    description: 'Historias relajantes con técnicas de respiración para antes de dormir, momentos de estrés y transiciones.',
    price: '7,50€',
    type: 'Audio Pack',
    popular: false,
  },
];

const Tienda = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Recursos</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
                Herramientas para <span className="text-gradient">empezar hoy</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Recursos prácticos creados desde la consulta, para que puedas usarlos en casa.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="relative glass rounded-2xl p-7 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {product.popular && (
                    <div className="absolute -top-3 right-5 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  )}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <product.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{product.type}</span>
                  <h3 className="text-lg font-display font-semibold text-foreground mt-1 mb-3">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.description}</p>
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
                      Próximamente
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />

        {/* CTA */}
        <section className="py-16 bg-secondary/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              ¿Necesitas ayuda profesional?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
              Los recursos son un buen inicio, pero a veces necesitamos acompañamiento profesional.
            </p>
            <Button asChild className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contacto">
                Reservar Sesión Informativa
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