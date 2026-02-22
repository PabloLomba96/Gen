import { Button } from '@/components/ui/button';
import { ArrowRight, Baby, Brain, Heart, Sparkles, Users, Puzzle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Baby,
    title: 'Psicología Infantil',
    description: 'Apoyo especializado para niños y niñas. Desarrollo emocional, conducta, miedos y autoestima.',
    color: 'primary',
  },
  {
    icon: Users,
    title: 'Adolescentes',
    description: 'Acompañamiento en esta etapa de cambios. Identidad, relaciones sociales y gestión emocional.',
    color: 'accent',
  },
  {
    icon: Brain,
    title: 'Altas Capacidades',
    description: 'Evaluación y apoyo para niños con altas capacidades intelectuales y sus familias.',
    color: 'primary',
  },
  {
    icon: Puzzle,
    title: 'TDAH y TEA',
    description: 'Diagnóstico e intervención especializada en trastornos del neurodesarrollo.',
    color: 'accent',
  },
  {
    icon: Heart,
    title: 'Regulación Emocional',
    description: 'Herramientas para que los pequeños aprendan a entender y gestionar sus emociones.',
    color: 'primary',
  },
  {
    icon: Sparkles,
    title: 'Creatividad y Talento',
    description: 'Estimulamos el pensamiento divergente y desarrollamos el potencial de cada niño.',
    color: 'accent',
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-lg text-muted-foreground">
            En Divergentes trabajamos desde el juego y la diversión, 
            haciendo del aprendizaje una experiencia única para cada niño.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <div 
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  service.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-accent/10 text-accent'
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 shadow-lg group"
          >
            <Link to="/servicios">
              Ver Todos los Servicios
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
