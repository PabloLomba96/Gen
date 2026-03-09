import { useState } from 'react';
import { ArrowRight, BookOpen, Calendar, Instagram, ShoppingBag, Sparkles, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import OverlappingCircles from '@/components/OverlappingCircles';
import logoPatricia from '@/assets/logo-patricia.jpg';
import SEO from '@/components/SEO';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/i18n/context';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { pushToDataLayer } from '@/hooks/useGTM';

const socialLinks = [
  { handle: '@genpsicologia', href: 'https://instagram.com/genpsicologia' },
  { handle: '@patri_psicologia', href: 'https://instagram.com/patri_psicologia', followers: '9.5K' },
];

const Hola = () => {
  const { t, lp, lang } = useLanguage();
  const { toast } = useToast();
  const s = t('hola') as any;

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('newsletter-subscribe', {
        body: { email: email.trim(), idioma: lang, tags: ['waitlist-guia'] },
      });
      if (error) throw error;
      if (data?.error === 'duplicate') {
        toast({ title: s.waitlistDuplicate, description: s.waitlistDuplicateText });
      } else if (data?.success) {
        setIsSubscribed(true);
        pushToDataLayer('generate_lead', { form_location: 'hola_waitlist' });
      } else if (data?.error) {
        toast({ title: s.waitlistError, description: data.error, variant: 'destructive' });
      }
    } catch {
      toast({ title: s.waitlistError, description: s.waitlistErrorText, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Secondary links: Tienda, Blog
  const secondaryLinks = [
    { icon: ShoppingBag, label: s.linkShop, sublabel: s.linkShopSub, href: lp('/tienda') },
    { icon: BookOpen, label: s.linkBlog, sublabel: s.linkBlogSub, href: lp('/blog') },
  ];

  return (
    <>
      <SEO
        title={lang === 'en' ? 'Hello — Gen Psicología Links' : 'Hola — Enlaces Gen Psicología'}
        description={lang === 'en' ? 'All links from Gen Psicología: book a session, blog, shop and social media.' : 'Todos los enlaces de Gen Psicología: reserva sesión, blog, tienda y redes sociales.'}
        lang={lang}
        canonical={`https://genpsicologia.com${lp('/hola')}`}
      />
      <div
        className="min-h-screen flex flex-col items-center px-4 py-10 relative overflow-hidden"
        style={{ background: 'var(--gradient-hero)' }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />

        {/* Language Switcher */}
        <div className="absolute top-4 right-4 z-20">
          <LanguageSwitcher />
        </div>

        {/* Profile — warm, personal greeting */}
        <div className="text-center mb-6 animate-fade-up relative z-10">
          <Link to={lp('/')} className="inline-block relative mx-auto mb-4 w-24 h-24">
            <div className="absolute inset-0 rounded-full p-[3px]" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' }}>
              <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-background">
                <img
                  src={logoPatricia}
                  alt="Patricia Martínez — Psicóloga infantojuvenil en Valencia"
                  className="w-full h-full object-cover"
                  width={96}
                  height={96}
                  loading="eager"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1">
              <OverlappingCircles size="sm" />
            </div>
          </Link>

          <h1 className="text-2xl font-display font-bold text-foreground">{s.greeting}</h1>
          <p className="text-sm text-muted-foreground mt-1.5 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            {s.profileSubtitle}
            <Sparkles className="w-3.5 h-3.5 text-accent" />
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">{s.profileLocation}</p>
        </div>

        {/* ===== PRIMARY CTA — Book session ===== */}
        <div className="w-full max-w-sm relative z-10 mb-3 animate-fade-up" style={{ animationDelay: '0.08s' }}>
          <Link
            to={lp('/contacto')}
            onClick={() => pushToDataLayer('click_book_session', { location: 'hola_cta' })}
            className="group flex items-center gap-4 w-full p-6 rounded-2xl bg-primary text-primary-foreground transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] relative overflow-hidden min-h-[68px] animate-pulse-subtle"
            style={{ boxShadow: '0 0 25px hsl(var(--primary) / 0.45), var(--shadow-glow-primary)' }}
          >
            {/* Subtle shine animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-primary-foreground/20">
              <Calendar className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-base leading-tight">{s.ctaBook}</p>
              <p className="text-xs mt-0.5 leading-snug text-primary-foreground/75">{s.ctaBookSub}</p>
            </div>
            <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 text-primary-foreground/70" />
          </Link>
        </div>

        {/* ===== LEAD CAPTURE — Waitlist card ===== */}
        <div className="w-full max-w-sm relative z-10 mb-3 animate-fade-up" style={{ animationDelay: '0.16s' }}>
          <div className="glass rounded-2xl p-5" style={{ boxShadow: 'var(--shadow-soft)' }}>
            {isSubscribed ? (
              <div className="flex items-center gap-3 text-center justify-center">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <p className="text-sm font-semibold text-foreground">{s.waitlistSuccess}</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent/10">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground leading-tight">{s.waitlistTitle}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.waitlistSub}</p>
                  </div>
                </div>
                <form onSubmit={handleWaitlist} className="flex gap-2">
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={s.waitlistPlaceholder}
                    className="h-11 rounded-xl px-4 flex-1 text-sm min-w-0"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-11 px-5 text-sm font-semibold whitespace-nowrap shrink-0"
                  >
                    {isSubmitting ? '...' : s.waitlistCta}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* ===== SECONDARY LINKS — Glassmorphism ===== */}
        <div className="w-full max-w-sm space-y-2.5 relative z-10">
          {secondaryLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                to={link.href}
                className="group flex items-center gap-4 w-full p-4 rounded-2xl glass hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 animate-fade-up min-h-[56px]"
                style={{ animationDelay: `${0.24 + index * 0.08}s`, boxShadow: 'var(--shadow-soft)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground leading-tight">{link.label}</p>
                  <p className="text-xs mt-0.5 text-muted-foreground leading-snug">{link.sublabel}</p>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            );
          })}
        </div>

        {/* Social */}
        <div className="mt-8 flex flex-col items-center gap-3 relative z-10 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.handle}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ir a Instagram ${social.handle}`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full glass text-sm text-muted-foreground hover:text-primary transition-colors min-h-[44px]"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              >
                <Instagram className="w-4 h-4" />
                <span className="font-medium">{social.handle}</span>
                {social.followers && <span className="text-[10px] font-bold text-accent ml-0.5">{social.followers}</span>}
              </a>
            ))}
          </div>
        </div>

        <p className="text-[10px] text-muted-foreground/40 mt-6 relative z-10">
          {(s.copyright as string).replace('{year}', new Date().getFullYear().toString())}
        </p>
      </div>
    </>
  );
};

export default Hola;
