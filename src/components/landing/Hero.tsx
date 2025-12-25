import { Button } from '@/components/ui/button';
import { ArrowRight, Play, MapPin, Video, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--gradient-hero)' }}
      />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-accent">+100M de visualizaciones en redes</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Tu bienestar mental{' '}
                <span className="text-gradient">merece atención</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Soy Patricia Martínez, Psicóloga General Sanitaria. Te ayudo a entender 
                tus emociones y desarrollar herramientas para una vida más plena.
              </p>
            </div>

            {/* Location Tags */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Consulta en Valencia</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Video className="w-4 h-4 text-primary" />
                <span className="text-sm">Terapia Online</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-14 shadow-lg hover:shadow-xl transition-all group"
              >
                Reservar Primera Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base px-8 h-14 border-2 hover:bg-secondary group"
              >
                <Play className="w-5 h-5 mr-2 text-primary" />
                Ver Contenido Gratuito
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {['PM', 'LG', 'AS', 'MR'][i-1]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">+500 pacientes</p>
                <p className="text-xs text-muted-foreground">han mejorado su bienestar</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Area */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20"
                  style={{ transform: 'rotate(3deg)' }}
                />
                <div 
                  className="relative h-full rounded-3xl bg-card overflow-hidden shadow-2xl border border-border"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  {/* Placeholder for profile image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-5xl font-display font-bold text-primary">PM</span>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">Patricia Martínez</h3>
                        <p className="text-sm text-muted-foreground">Psicóloga General Sanitaria</p>
                        <p className="text-xs text-muted-foreground mt-1">Especialista en Infancia y Adolescencia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div 
                className="absolute -left-4 top-1/4 bg-card rounded-2xl p-4 shadow-xl border border-border animate-float"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Video className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Terapia Online</p>
                    <p className="text-xs text-muted-foreground">Desde cualquier lugar</p>
                  </div>
                </div>
              </div>

              <div 
                className="absolute -right-4 bottom-1/4 bg-card rounded-2xl p-4 shadow-xl border border-border animate-float"
                style={{ animationDelay: '2s', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">4.9/5 Valoración</p>
                    <p className="text-xs text-muted-foreground">en Doctoralia</p>
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
