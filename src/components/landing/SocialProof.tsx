import { Instagram, Eye, Users, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Eye,
    value: '+100M',
    label: 'Visualizaciones',
    color: 'primary',
  },
  {
    icon: Users,
    value: '6.2K+',
    label: 'Seguidores',
    color: 'accent',
  },
  {
    icon: TrendingUp,
    value: '4.1M',
    label: 'Mejor Reel',
    color: 'primary',
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <Instagram className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">@genpsicologia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Psicología cercana en redes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comparto contenido sobre psicología infantil, crianza respetuosa y desarrollo emocional 
              para acercar la psicología a las familias.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 lg:p-8 text-center border border-border"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              >
                <div 
                  className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                    stat.color === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-accent/10 text-accent'
                  }`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Viral Reels Preview */}
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="text-center mb-8">
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Contenido que conecta
              </h3>
              <p className="text-muted-foreground">
                Cada meme tiene un mensaje. Aquí profundizo en lo que significan.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { views: '4.1M', theme: 'Juicio' },
                { views: '3M', theme: 'Depresión' },
                { views: '2.2M', theme: 'Ansiedad' },
                { views: '1.9M', theme: 'Navidad' },
              ].map((reel, i) => (
                <div
                  key={i}
                  className="aspect-[9/16] rounded-xl bg-gradient-to-br from-muted to-secondary overflow-hidden relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-center">
                      <Eye className="w-8 h-8 text-background mx-auto mb-2" />
                      <p className="text-background font-bold">{reel.views}</p>
                      <p className="text-background/80 text-xs">{reel.theme}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-1 text-foreground bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium w-fit">
                      <Eye className="w-3 h-3" />
                      {reel.views}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a 
                href="https://instagram.com/genpsicologia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Síguenos en Instagram
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
