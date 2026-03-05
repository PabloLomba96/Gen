import { Button } from '@/components/ui/button';
import { GraduationCap, Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Formación Especializada',
    description: 'Dos Másteres en Psicología: infancia, adolescencia y desarrollo cognitivo.',
  },
  {
    icon: Award,
    title: 'Divergentes & Pausa Salud',
    description: 'Colaboro con centros referentes. Atención particular presencial y online.',
  },
  {
    icon: Heart,
    title: 'Enfoque Humanista',
    description: 'Cada niño es único. Acompaño respetando su ritmo y necesidades.',
  },
];

const About = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 space-y-4 animate-fade-up">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Sobre Mí
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              Hola, soy Patricia
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Psicóloga especializada en infancia y adolescencia con años de experiencia en Valencia. 
              Trabajo con ansiedad, neurodivergencia, altas capacidades y regulación emocional, 
              creando un espacio seguro desde el juego y la creatividad.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {credentials.map((item, index) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              asChild
              variant="outline"
              className="rounded-full border-2 px-8 h-12 group"
            >
              <Link to="/sobre-mi">
                Conocer Mi Historia
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;