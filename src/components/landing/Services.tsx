import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Heart, Sparkles, Users, Puzzle, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Baby, title: 'Psicología Infantil', description: 'Desarrollo emocional, conducta, miedos y autoestima.' },
  { icon: Users, title: 'Adolescentes', description: 'Identidad, relaciones sociales y gestión emocional.' },
  { icon: Brain, title: 'Altas Capacidades', description: 'Evaluación y apoyo integral para niños y familias.' },
  { icon: Puzzle, title: 'TDAH y TEA', description: 'Diagnóstico e intervención en neurodesarrollo.' },
  { icon: Heart, title: 'Regulación Emocional', description: 'Herramientas para entender y gestionar emociones.' },
  { icon: Sparkles, title: 'Batería Social', description: 'Introversión, sobrecarga social y límites saludables.' },
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Servicios</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada familia es diferente. Trabajamos juntos para encontrar el camino.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 shadow-md group"
          >
            <Link to="/servicios">
              Ver Todos los Servicios
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;