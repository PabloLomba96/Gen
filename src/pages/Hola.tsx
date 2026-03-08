import { ArrowRight, BookOpen, Calendar, Download, Heart, Instagram, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import OverlappingCircles from '@/components/OverlappingCircles';
import logoPatricia from '@/assets/logo-patricia.jpg';
import SEO from '@/components/SEO';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/i18n/context';

const linkIcons = [Download, Calendar, ShoppingBag, BookOpen, Heart];
const linkHrefs = ['#lead-magnet', '/contacto', '/tienda', '/blog', '#amazon'];
const linkAccent = [true, false, false, false, false];
const linkDisabled = [true, false, false, false, true];

const socialLinks = [
  { handle: '@genpsicologia', href: 'https://instagram.com/genpsicologia', followers: '9.8K' },
  { handle: '@patri_psicologia', href: 'https://instagram.com/patri_psicologia', followers: '9.5K' },
];

const Hola = () => {
  const { t, lp, lang } = useLanguage();
  const s = t('hola') as any;
  const linksData = s.links as any[];

  return (
    <>
    <SEO
      title={lang === 'en' ? 'Hello — Gen Psicología Links' : 'Hola — Enlaces Gen Psicología'}
      description={lang === 'en' ? 'All links from Gen Psicología: book a session, blog, shop and social media.' : 'Todos los enlaces de Gen Psicología: reserva sesión, blog, tienda y redes sociales.'}
      lang={lang}
      canonical={`https://genpsicologia.com${lp('/hola')}`}
    />
    <div className="min-h-screen flex flex-col items-center px-4 py-10 relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }}
      />

      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>

      {/* Profile */}
      <div className="text-center mb-8 animate-fade-up relative z-10">
        <Link to={lp('/')} className="inline-block relative mx-auto mb-5 w-24 h-24">
          <div className="absolute inset-0 rounded-full p-[3px]"
            style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-background">
              <img src={logoPatricia} alt="Patricia Martínez — Psicóloga infantojuvenil en Valencia" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1">
            <OverlappingCircles size="sm" />
          </div>
        </Link>

        <h1 className="text-xl font-display font-bold text-foreground">{s.profileTitle}</h1>
        <p className="text-sm text-muted-foreground mt-1.5 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          {s.profileSubtitle}
          <Sparkles className="w-3.5 h-3.5 text-accent" />
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">{s.profileLocation}</p>
      </div>

      {/* Links */}
      <div className="w-full max-w-sm space-y-3 relative z-10">
        {linksData.map((link: any, index: number) => {
          const isDisabled = linkDisabled[index];
          const accent = linkAccent[index];
          const Icon = linkIcons[index];
          const href = lp(linkHrefs[index]);
          const Tag = isDisabled ? 'div' : 'a';
          return (
            <Tag
              key={link.label}
              {...(!isDisabled ? { href } : {})}
              className={`group flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-300 animate-fade-up ${
                isDisabled
                  ? accent ? 'bg-primary/50 text-primary-foreground opacity-80 cursor-default' : 'glass opacity-60 cursor-default'
                  : accent ? 'bg-primary text-primary-foreground hover:scale-[1.03] active:scale-[0.98]' : 'glass hover:scale-[1.02] active:scale-[0.98]'
              }`}
              style={{
                animationDelay: `${index * 0.08}s`,
                ...(accent && !isDisabled ? { boxShadow: 'var(--shadow-glow-primary)' } : { boxShadow: 'var(--shadow-soft)' }),
              }}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                accent ? 'bg-primary-foreground/20' : 'bg-primary/10'
              }`}>
                <Icon className={`w-5 h-5 ${accent ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-sm leading-tight ${accent ? '' : 'text-foreground'}`}>{link.label}</p>
                <p className={`text-xs mt-0.5 leading-snug ${accent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{link.sublabel}</p>
              </div>
              {isDisabled ? (
                <span className={`text-[10px] font-semibold uppercase tracking-wider shrink-0 px-2 py-1 rounded-full ${
                  accent ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>{s.soon}</span>
              ) : (
                <ArrowRight className={`w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 ${
                  accent ? 'text-primary-foreground/60' : 'text-muted-foreground'
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
            <a key={social.handle} href={social.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm text-muted-foreground hover:text-primary transition-colors"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              <Instagram className="w-4 h-4" />
              <span className="font-medium">{social.handle}</span>
              {social.followers && <span className="text-[10px] font-bold text-accent ml-0.5">{social.followers}</span>}
            </a>
          ))}
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground/40 mt-8 relative z-10">
        {(s.copyright as string).replace('{year}', new Date().getFullYear().toString())}
      </p>
    </div>
    </>
  );
};

export default Hola;
