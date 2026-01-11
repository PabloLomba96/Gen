import { Button } from '@/components/ui/button';
import { GraduationCap, Heart, Award, ArrowRight, Quote } from 'lucide-react';
import logoPatricia from '@/assets/logo-patricia.jpg';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Formación Especializada',
    description: 'Dos Másteres en Psicología: especialización en infancia, adolescencia y desarrollo cognitivo.',
  },
  {
    icon: Award,
    title: 'Centro Divergentes',
    description: 'Trabajo en uno de los centros de referencia en Valencia para altas capacidades y neurodiversidad.',
  },
  {
    icon: Heart,
    title: 'Enfoque Humanista',
    description: 'Cada niño es único. Mi objetivo es acompañar su desarrollo respetando su ritmo y necesidades.',
  },
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Background decorations */}
              <div 
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"
              />
              <div 
                className="absolute top-8 left-8 w-full h-full rounded-3xl border-2 border-primary/20"
              />
              
              {/* Main image container */}
              <div 
                className="relative h-full rounded-3xl bg-card overflow-hidden border border-border flex items-center justify-center p-8"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <img 
                  src={logoPatricia} 
                  alt="Patricia Martínez Díaz - Psicóloga Infantil" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Quote card */}
              <div 
                className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 border border-border max-w-xs animate-float"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <Quote className="w-8 h-8 text-primary/30 mb-2" />
                <p className="text-sm text-foreground italic leading-relaxed">
                  "Cada niño tiene un mundo interior lleno de posibilidades. 
                  Mi trabajo es ayudarle a descubrirlo."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Patricia</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Sobre Mí
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                Hola, soy Patricia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy Psicóloga especializada en infancia y adolescencia, con años de experiencia 
                en el Centro Divergentes de Valencia. Mi pasión es acompañar a los más pequeños 
                en su desarrollo emocional, ayudándoles a entender y gestionar sus emociones.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabajo con niños y adolescentes en diferentes áreas: altas capacidades intelectuales, 
                TDAH, TEA, regulación emocional, ansiedad, autoestima y dificultades en las relaciones 
                sociales. Mi enfoque combina el juego, la creatividad y técnicas basadas en evidencia 
                para crear un espacio seguro donde cada niño pueda desarrollar todo su potencial.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <div 
                  key={credential.title}
                  className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <credential.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{credential.title}</h3>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 group"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Reservar Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 h-14"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Servicios
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
