import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Heart, Award, Quote, MapPin, Video, Users, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoPatricia from '@/assets/logo-patricia.jpg';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Formación Especializada',
    description: 'Dos Másteres en Psicología: especialización en infancia, adolescencia y desarrollo cognitivo.',
  },
  {
    icon: Award,
    title: 'Experiencia en Divergentes',
    description: 'Colaboro con el Centro Divergentes de Valencia, referente en altas capacidades y neurodiversidad, atendiendo a los clientes derivados por el centro.',
  },
  {
    icon: Heart,
    title: 'Enfoque Humanista',
    description: 'Cada niño es único. Mi objetivo es acompañar su desarrollo respetando su ritmo y necesidades.',
  },
  {
    icon: Users,
    title: 'Pausa Salud',
    description: 'También colaboro con Pausa Salud, ampliando mis áreas de intervención y trabajando en equipo multidisciplinar.',
  },
];

const values = [
  {
    title: 'Escucha activa',
    description: 'Cada niño tiene su propio mundo. Mi trabajo empieza por escuchar sin juicio.',
  },
  {
    title: 'Juego como herramienta',
    description: 'El juego es el lenguaje natural de los niños. A través de él, trabajamos emociones y habilidades.',
  },
  {
    title: 'Evidencia científica',
    description: 'Mis intervenciones están basadas en las últimas investigaciones en psicología infantil.',
  },
  {
    title: 'Trabajo con la familia',
    description: 'Los padres son parte esencial del proceso. Os acompaño con pautas y orientación.',
  },
];

const SobreMi = () => {
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
              <span className="text-sm text-foreground">Sobre Mí</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Image Side */}
              <div className="relative">
                <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                  <div className="absolute top-8 left-8 w-full h-full rounded-3xl border-2 border-primary/20" />
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
                  <div 
                    className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 border border-border max-w-xs animate-float"
                    style={{ boxShadow: 'var(--shadow-card)' }}
                  >
                    <Quote className="w-8 h-8 text-primary/30 mb-2" />
                    <p className="text-sm text-foreground italic leading-relaxed">
                      "Cada niño tiene un mundo interior lleno de posibilidades. Mi trabajo es ayudarle a descubrirlo."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Patricia</p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground">
                  Hola, soy <span className="text-gradient">Patricia</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Soy Psicóloga especializada en infancia y adolescencia, con años de experiencia 
                  trabajando en Valencia. Mi pasión es acompañar a los más pequeños 
                  en su desarrollo emocional, ayudándoles a entender y gestionar sus emociones.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Colaboro con el <strong>Centro Divergentes</strong>, referente en Valencia en altas capacidades 
                  y neurodiversidad, atendiendo a los clientes derivados por el centro. También trabajo con 
                  <strong> Pausa Salud</strong>. Los clientes que contactan a través de esta web los atiendo 
                  de forma particular, ofreciendo tanto consulta presencial en Valencia como terapia online.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trabajo con niños y adolescentes en diferentes áreas: altas capacidades intelectuales, 
                  TDAH, TEA, regulación emocional, ansiedad, autoestima y dificultades en las relaciones 
                  sociales. Mi enfoque combina el juego, la creatividad y técnicas basadas en evidencia 
                  para crear un espacio seguro donde cada niño pueda desarrollar todo su potencial.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm">Dos Másteres en Psicología</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">Valencia, España</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Video className="w-4 h-4 text-primary" />
                    <span className="text-sm">Terapia Presencial y Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Mi Trayectoria</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Formación y experiencia</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {credentials.map((credential) => (
                <div 
                  key={credential.title}
                  className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
                  style={{ boxShadow: 'var(--shadow-soft)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <credential.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{credential.title}</h3>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Mi Filosofía</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Cómo trabajo</h2>
              <p className="text-lg text-muted-foreground">
                Mi enfoque se basa en el respeto, la escucha y el juego como herramientas fundamentales.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={value.title} className="flex gap-4 p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
              ¿Quieres que hablemos?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              La primera consulta es para conocernos y entender cómo puedo ayudaros. Sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8">
                <Link to="/#contacto">
                  Reservar Primera Consulta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8">
                <Link to="/servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SobreMi;
