import { ArrowRight, BookOpen, Calendar, Download, Heart, Instagram, ShoppingBag } from 'lucide-react';
import OverlappingCircles from '@/components/OverlappingCircles';

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
    label: 'Cita Online / Valencia',
    sublabel: 'Reserva tu sesión informativa',
    href: '/contacto',
    accent: false,
  },
  {
    icon: ShoppingBag,
    label: 'Recursos y Workbooks',
    sublabel: 'Desde 7€ — Herramientas prácticas',
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

const Hola = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-10">
      {/* Profile */}
      <div className="text-center mb-8 animate-fade-up">
        <div className="mx-auto mb-4 flex items-center justify-center">
          <OverlappingCircles size="lg" />
        </div>
        <h1 className="text-xl font-display font-bold text-foreground">Gen Psicología</h1>
        <p className="text-sm text-muted-foreground mt-1">Centro de Psicología Infantojuvenil 🧠💛</p>
        <p className="text-xs text-muted-foreground mt-0.5">Valencia & Online</p>
      </div>

      {/* Links */}
      <div className="w-full max-w-sm space-y-3">
        {links.map((link, index) => {
          const isDisabled = 'proximamente' in link && link.proximamente;
          const Tag = isDisabled ? 'div' : 'a';
          return (
            <Tag
              key={link.label}
              {...(!isDisabled ? { href: link.href } : {})}
              className={`flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-200 animate-fade-up ${
                isDisabled
                  ? link.accent
                    ? 'bg-primary/60 text-primary-foreground opacity-80 cursor-default'
                    : 'glass opacity-75 cursor-default'
                  : link.accent
                    ? 'bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:scale-[1.02]'
                    : 'glass hover:shadow-md hover:scale-[1.01]'
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                link.accent ? 'bg-primary-foreground/20' : 'bg-primary/10'
              }`}>
                <link.icon className={`w-5 h-5 ${link.accent ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-sm ${link.accent ? '' : 'text-foreground'}`}>{link.label}</p>
                <p className={`text-xs mt-0.5 ${link.accent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {link.sublabel}
                </p>
              </div>
              {isDisabled ? (
                <span className={`text-xs font-medium shrink-0 px-2 py-1 rounded-full ${link.accent ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  Próximamente
                </span>
              ) : (
                <ArrowRight className={`w-4 h-4 shrink-0 ${link.accent ? 'text-primary-foreground/60' : 'text-muted-foreground'}`} />
              )}
            </Tag>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-5">
        <a
          href="https://instagram.com/genpsicologia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="w-4 h-4" />
          @genpsicologia
        </a>
        <a
          href="https://instagram.com/patri_psicologia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="w-4 h-4" />
          @patri_psicologia
        </a>
      </div>

      <p className="text-[10px] text-muted-foreground/50 mt-6">
        © {new Date().getFullYear()} Gen Centro de Psicología — Patricia Martínez Díaz
      </p>
    </div>
  );
};

export default Hola;
