import { ArrowRight, BookOpen, Calendar, Download, Heart, Instagram, ShoppingBag } from 'lucide-react';
import logoPatricia from '@/assets/logo-patricia.jpg';

const links = [
  {
    icon: Download,
    label: 'Me siento agotada/o',
    sublabel: 'Guía Gratuita de Regulación Emocional',
    href: '#lead-magnet',
    accent: true,
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
  },
];

const Hola = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-10">
      {/* Profile */}
      <div className="text-center mb-8 animate-fade-up">
        <div className="w-24 h-24 rounded-full glass mx-auto mb-4 flex items-center justify-center overflow-hidden p-2">
          <img src={logoPatricia} alt="Patricia Martínez" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-xl font-display font-bold text-foreground">Patricia Martínez</h1>
        <p className="text-sm text-muted-foreground mt-1">Psicóloga Infantojuvenil 🧠💛</p>
        <p className="text-xs text-muted-foreground mt-0.5">Valencia & Online</p>
      </div>

      {/* Links */}
      <div className="w-full max-w-sm space-y-3">
        {links.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            className={`flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-200 animate-fade-up ${
              link.accent
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
            <ArrowRight className={`w-4 h-4 shrink-0 ${link.accent ? 'text-primary-foreground/60' : 'text-muted-foreground'}`} />
          </a>
        ))}
      </div>

      {/* Instagram */}
      <a
        href="https://instagram.com/patri_psicologia"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Instagram className="w-4 h-4" />
        @patri_psicologia
      </a>

      <p className="text-[10px] text-muted-foreground/50 mt-6">
        © {new Date().getFullYear()} Patricia Martínez Díaz
      </p>
    </div>
  );
};

export default Hola;