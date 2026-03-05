import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoPatricia from '@/assets/logo-patricia.png';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      
      {/* Decorative circles echoing the logo */}
      <div className="absolute top-24 right-[-8%] w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute bottom-16 left-[-6%] w-72 h-72 rounded-full bg-primary/6 blur-3xl" />
      {/* Subtle overlap circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-overlap opacity-[0.04] blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div className="space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/10 border border-accent/15">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-muted-foreground">Psicóloga Infantojuvenil en Valencia</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-display font-bold text-foreground leading-[1.13]">
                Del agotamiento{' '}
                <br className="hidden sm:block" />
                a la calma:{' '}
                <span className="text-gradient">herramientas reales</span>{' '}
                para mentes jóvenes
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Especialista en Ansiedad, Batería Social y Neurodivergencia. 
                Acompaño a familias desde el entendimiento, la escucha activa y la ayuda.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />Valencia
              </span>
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground">
                <Video className="w-3.5 h-3.5 text-accent" />Online
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-14 rounded-full group"
                style={{ boxShadow: 'var(--shadow-glow-primary)' }}
              >
                <Link to="/contacto">
                  Reserva Sesión Informativa
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 h-14 border-2 border-border hover:bg-secondary/80 rounded-full"
              >
                <Link to="/tienda">Ver Recursos Gratuitos</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-3">
              <div className="flex -space-x-2.5">
                {['LM', 'CA', 'MJ', 'PR'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-[10px] font-semibold text-muted-foreground">{initials}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">+500 familias</span> confían en nosotros
              </p>
            </div>
          </div>

          {/* Right: Logo showcase */}
          <div className="relative animate-scale-in hidden lg:flex justify-center" style={{ animationDelay: '0.15s' }}>
            <div className="relative">
              {/* Soft glow behind logo */}
              <div className="absolute inset-0 rounded-full bg-overlap opacity-10 blur-2xl scale-110" />
              
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={logoPatricia}
                  alt="Patricia Martínez Psicología — Las manos que ayudan, el punto medio entre entendimiento, escucha activa y ayuda"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>

              {/* Floating cards — positioned OUTSIDE the logo area */}
              {/* Top-left: Primera consulta gratuita */}
              <div className="absolute -left-28 -top-4 glass rounded-2xl p-3.5 shadow-lg animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                    <span className="text-sm">💬</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Primera consulta</p>
                    <p className="text-[10px] text-muted-foreground">Informativa y sin compromiso</p>
                  </div>
                </div>
              </div>

              {/* Right: Presencial y Online */}
              <div className="absolute -right-28 top-1/4 glass rounded-2xl p-3.5 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-primary/12 flex items-center justify-center">
                    <span className="text-sm">🏠</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Presencial y Online</p>
                    <p className="text-[10px] text-muted-foreground">Tú eliges cómo</p>
                  </div>
                </div>
              </div>

              {/* Bottom-right: Espacio seguro */}
              <div className="absolute -right-20 -bottom-6 glass rounded-2xl p-3.5 shadow-lg animate-float" style={{ animationDelay: '4s' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-overlap/20 flex items-center justify-center">
                    <span className="text-sm">🌿</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Espacio seguro</p>
                    <p className="text-[10px] text-muted-foreground">A su ritmo, sin presión</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;