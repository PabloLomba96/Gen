import { Button } from '@/components/ui/button';
import { ArrowRight, User, Users, Baby, Brain, Heart, Sparkles } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Terapia Individual',
    description: 'Sesiones personalizadas para adultos. Trabajamos ansiedad, depresión, autoestima y más.',
    color: 'primary',
  },
  {
    icon: Baby,
    title: 'Infancia y Adolescencia',
    description: 'Apoyo especializado para los más pequeños y jóvenes en su desarrollo emocional.',
    color: 'accent',
  },
  {
    icon: Users,
    title: 'Terapia de Pareja',
    description: 'Mejora la comunicación y resuelve conflictos para una relación más sana.',
    color: 'primary',
  },
  {
    icon: Brain,
    title: 'Gestión de Ansiedad',
    description: 'Aprende técnicas efectivas para manejar la ansiedad y el estrés del día a día.',
    color: 'accent',
  },
  {
    icon: Heart,
    title: 'Regulación Emocional',
    description: 'Desarrolla herramientas para entender y gestionar tus emociones de forma saludable.',
    color: 'primary',
  },
  {
    icon: Sparkles,
    title: 'Crecimiento Personal',
    description: 'Descubre tu potencial y trabaja hacia la mejor versión de ti mismo/a.',
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
            Ofrezco diferentes modalidades de terapia adaptadas a tus necesidades, 
            tanto presencial en Valencia como online.
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
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 shadow-lg group"
          >
            Ver Tarifas y Reservar
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
