import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoPatricia from '@/assets/logo-patricia.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Soft background gradient */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Decorative blobs */}
      <div className="absolute top-32 right-[-5%] w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[-5%] w-64 h-64 bg-primary/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Subtle badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground/70">Especialista en infancia y adolescencia</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-display font-bold text-foreground leading-[1.15]">
                Del agotamiento a la calma:{' '}
                <span className="text-gradient">herramientas reales</span>{' '}
                para mentes jóvenes
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Especialista en Ansiedad, Batería Social y Neurodivergencia. 
                En Valencia y Online.
              </p>
            </div>

            {/* Location tags */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Valencia
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm">
                <Video className="w-3.5 h-3.5 text-accent" />
                Terapia Online
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-14 shadow-lg hover:shadow-xl transition-all rounded-full group"
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
                <Link to="/tienda">
                  Ver Recursos Gratuitos
                </Link>
              </Button>
            </div>

            {/* Social Proof minimal */}
            <div className="flex items-center gap-4 pt-2">
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

          {/* Right Content - Professional photo placeholder */}
          <div className="relative animate-scale-in hidden lg:block" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-md mx-auto">
              {/* Photo placeholder with warm styling */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary rounded-3xl" />
                <div 
                  className="relative h-full rounded-3xl glass flex flex-col items-center justify-center p-10 text-center"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <img 
                    src={logoPatricia} 
                    alt="Patricia Martínez Psicología" 
                    className="w-40 h-40 object-contain mb-6"
                  />
                  <p className="text-lg font-display font-semibold text-foreground">Patricia Martínez</p>
                  <p className="text-sm text-muted-foreground mt-1">Psicóloga Infantojuvenil</p>
                  <p className="text-xs text-muted-foreground mt-4 italic max-w-xs">
                    "Cada niño tiene un mundo interior lleno de posibilidades."
                  </p>
                </div>
              </div>

              {/* Floating card */}
              <div 
                className="absolute -left-6 bottom-20 glass rounded-2xl p-4 shadow-lg animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <Video className="w-5 h-5 text-cian" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Online</p>
                    <p className="text-xs text-muted-foreground">Desde cualquier lugar</p>
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