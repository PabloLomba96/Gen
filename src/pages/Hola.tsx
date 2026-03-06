import { ArrowRight, BookOpen, Calendar, Download, Heart, Instagram, ShoppingBag, Sparkles } from 'lucide-react';
import OverlappingCircles from '@/components/OverlappingCircles';
import logoPatricia from '@/assets/logo-patricia.jpg';

const links = [
  {
    icon: Download,
    label: 'Me siento agotada/o',
    sublabel: 'Guía Gratuita de Regulación Emocional',
    href: '#lead-magnet',
    accent: true,
    proximamente: true,
  },
  {
    icon: Calendar,
    label: 'Reserva tu primera cita',
    sublabel: 'Online o presencial en Valencia',
    href: '/contacto',
    accent: false,
  },
  {
    icon: ShoppingBag,
    label: 'Recursos y Workbooks',
    sublabel: 'Herramientas prácticas desde 7 €',
    href: '/tienda',
    accent: false,
  },
  {
    icon: BookOpen,
    label: 'Blog: Píldoras de Bienestar',
    sublabel: 'Artículos sobre crianza y emociones',
    href: '/blog',
    accent: false,
  },
  {
    icon: Heart,
    label: 'Mis Imprescindibles',
    sublabel: 'Libros y juegos que recomiendo',
    href: '#amazon',
    accent: false,
    proximamente: true,
  },
];

const socialLinks = [
  { handle: '@genpsicologia', href: 'https://instagram.com/genpsicologia', followers: '6.2K' },
  { handle: '@patri_psicologia', href: 'https://instagram.com/patri_psicologia' },
];

const Hola = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }}
      />

      {/* Profile */}
      <div className="text-center mb-8 animate-fade-up relative z-10">
        {/* Avatar with ring */}
        <div className="relative mx-auto mb-5 w-24 h-24">
          <div className="absolute inset-0 rounded-full p-[3px]"
            style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-background">
              <img
                src={logoPatricia}
                alt="Patricia Martínez — Psicóloga infantojuvenil en Valencia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Animated circles behind avatar */}
          <div className="absolute -bottom-1 -right-1">
            <OverlappingCircles size="sm" />
          </div>
        </div>

        <h1 className="text-xl font-display font-bold text-foreground">
          Gen Psicología
        </h1>
        <p className="text-sm text-muted-foreground mt-1.5 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          Psicología Infantojuvenil
          <Sparkles className="w-3.5 h-3.5 text-accent" />
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">Valencia · Online</p>
      </div>

      {/* Links */}
      <div className="w-full max-w-sm space-y-3 relative z-10">
        {links.map((link, index) => {
          const isDisabled = 'proximamente' in link && link.proximamente;
          const Tag = isDisabled ? 'div' : 'a';
          return (
            <Tag
              key={link.label}
              {...(!isDisabled ? { href: link.href } : {})}
              className={`group flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-300 animate-fade-up ${
                isDisabled
                  ? link.accent
                    ? 'bg-primary/50 text-primary-foreground opacity-80 cursor-default'
                    : 'glass opacity-60 cursor-default'
                  : link.accent
                    ? 'bg-primary text-primary-foreground hover:scale-[1.03] active:scale-[0.98]'
                    : 'glass hover:scale-[1.02] active:scale-[0.98]'
              }`}
              style={{
                animationDelay: `${index * 0.08}s`,
                ...(link.accent && !isDisabled ? { boxShadow: 'var(--shadow-glow-primary)' } : { boxShadow: 'var(--shadow-soft)' }),
              }}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                link.accent ? 'bg-primary-foreground/20' : 'bg-primary/10'
              }`}>
                <link.icon className={`w-5 h-5 ${link.accent ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-sm leading-tight ${link.accent ? '' : 'text-foreground'}`}>
                  {link.label}
                </p>
                <p className={`text-xs mt-0.5 leading-snug ${link.accent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {link.sublabel}
                </p>
              </div>
              {isDisabled ? (
                <span className={`text-[10px] font-semibold uppercase tracking-wider shrink-0 px-2 py-1 rounded-full ${
                  link.accent ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  Pronto
                </span>
              ) : (
                <ArrowRight className={`w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 ${
                  link.accent ? 'text-primary-foreground/60' : 'text-muted-foreground'
                }`} />
              )}
            </Tag>
          );
        })}
      </div>

      {/* Social */}
      <div className="mt-10 flex flex-col items-center gap-3 relative z-10 animate-fade-up" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.handle}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm text-muted-foreground hover:text-primary transition-colors"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              <Instagram className="w-4 h-4" />
              <span className="font-medium">{social.handle}</span>
              {social.followers && (
                <span className="text-[10px] font-bold text-accent ml-0.5">{social.followers}</span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="text-[10px] text-muted-foreground/40 mt-8 relative z-10">
        © {new Date().getFullYear()} Gen Centro de Psicología — Patricia Martínez Díaz
      </p>
    </div>
  );
};

export default Hola;
