import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import OverlappingCircles from '@/components/OverlappingCircles';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/i18n/context';
import { pushToDataLayer } from '@/hooks/useGTM';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t, lp, lang } = useLanguage();

  const adultItems = lang === 'es'
    ? [
        { href: '/servicios/terapia-individual-adultos', label: 'Terapia Individual' },
        { href: '/servicios/terapia-de-pareja', label: 'Terapia de Pareja' },
      ]
    : [
        { href: '/servicios/individual-therapy-adults', label: 'Individual Therapy' },
        { href: '/servicios/couples-therapy', label: 'Couples Therapy' },
      ];

  const childItems = lang === 'es'
    ? [
        { href: '/servicios/neurodivergencias', label: 'Neurodivergencias' },
        { href: '/servicios/desarrollo-y-creatividad', label: 'Desarrollo y Creatividad' },
        { href: '/servicios/dificultades-aprendizaje', label: 'Dificultades de Aprendizaje' },
      ]
    : [
        { href: '/servicios/neurodivergence', label: 'Neurodivergence' },
        { href: '/servicios/development-creativity', label: 'Development & Creativity' },
        { href: '/servicios/learning-difficulties', label: 'Learning Difficulties' },
      ];

  const todosItems = lang === 'es'
    ? [
        { href: '/servicios/terapia-familiar', label: 'Terapia Familiar' },
        { href: '/servicios/regulacion-emocional-autoestima', label: 'Emociones y Autoestima' },
        { href: '/servicios/evaluaciones-psicologicas', label: 'Evaluaciones Psicológicas' },
      ]
    : [
        { href: '/servicios/family-therapy', label: 'Family Therapy' },
        { href: '/servicios/emotional-regulation-self-esteem', label: 'Emotions & Self-Esteem' },
        { href: '/servicios/psychological-evaluations', label: 'Evaluations' },
      ];

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/sobre-mi', label: t('nav.about') },
    { href: '/tienda', label: t('nav.resources') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/contacto', label: t('nav.contact') },
  ];

  const isActive = (href: string) => location.pathname === lp(href);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const adultLabel = lang === 'es' ? 'Adultos' : 'Adults';
  const childLabel = lang === 'es' ? 'Infantojuvenil' : 'Child & Adolescent';
  const todosLabel = lang === 'es' ? 'Para todos' : 'For Everyone';
  const morningLabel = lang === 'es' ? 'Presencial y online' : 'In-person & online';
  const afternoonLabel = lang === 'es' ? 'Presencial y online' : 'In-person & online';
  const allAgesLabel = lang === 'es' ? 'Todas las edades' : 'All ages';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to={lp('/')} className="flex items-center gap-2.5">
            <OverlappingCircles size="sm" />
            <span className="text-lg md:text-xl font-display font-bold text-foreground tracking-tight">
              GEN <span className="text-muted-foreground font-normal">|</span>{' '}
              <span className="text-primary font-semibold text-base md:text-lg">
                {lang === 'es' ? 'Centro de Psicología' : 'Psychology Centre'}
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                to={lp(link.href)}
                onClick={() => pushToDataLayer('click_navigation', { link_name: link.label, location: 'header' })}
                className={`text-sm font-medium transition-colors ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  location.pathname.includes('/servicios') || location.pathname.includes('/services')
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('nav.services')}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-card rounded-2xl border border-border p-4 animate-fade-up" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <Link
                    to={lp('/servicios')}
                    onClick={() => setIsServicesOpen(false)}
                    className="text-xs font-semibold text-primary hover:underline mb-3 block"
                  >
                    {lang === 'es' ? 'Ver todos los servicios →' : 'View all services →'}
                  </Link>

                  <div className="space-y-4">
                    {/* Adults */}
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">{adultLabel}</p>
                      <p className="text-[10px] text-muted-foreground mb-2">{morningLabel}</p>
                      {adultItems.map(item => (
                        <Link
                          key={item.href}
                          to={lp(item.href)}
                          onClick={() => setIsServicesOpen(false)}
                          className="block text-sm text-muted-foreground hover:text-primary py-1 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-border" />

                    {/* Children */}
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">{childLabel}</p>
                      <p className="text-[10px] text-muted-foreground mb-2">{afternoonLabel}</p>
                      {childItems.map(item => (
                        <Link
                          key={item.href}
                          to={lp(item.href)}
                          onClick={() => setIsServicesOpen(false)}
                          className="block text-sm text-muted-foreground hover:text-primary py-1 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-border" />

                    {/* For Everyone */}
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">{todosLabel}</p>
                      <p className="text-[10px] text-muted-foreground mb-2">{allAgesLabel}</p>
                      {todosItems.map(item => (
                        <Link
                          key={item.href}
                          to={lp(item.href)}
                          onClick={() => setIsServicesOpen(false)}
                          className="block text-sm text-muted-foreground hover:text-primary py-1 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                to={lp(link.href)}
                onClick={() => pushToDataLayer('click_navigation', { link_name: link.label, location: 'header' })}
                className={`text-sm font-medium transition-colors ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all rounded-full px-6">
              <Link to={lp('/contacto')} onClick={() => pushToDataLayer('click_book_session', { location: 'header_cta' })}>{t('nav.bookSession')}</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-foreground" aria-label="Abrir menú">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link key={link.href} to={lp(link.href)} onClick={() => { pushToDataLayer('click_navigation', { link_name: link.label, location: 'mobile_menu' }); setIsMenuOpen(false); }}
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${isActive(link.href) ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'}`}>
                  {link.label}
                </Link>
              ))}

              {/* Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`text-base font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-between ${
                  location.pathname.includes('/servicios') ? 'text-primary bg-primary/5' : 'text-muted-foreground'
                }`}
              >
                {t('nav.services')}
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 space-y-1">
                  <Link to={lp('/servicios')} onClick={() => setIsMenuOpen(false)}
                    className="block text-sm text-primary font-medium py-2 px-4">
                    {lang === 'es' ? 'Ver todos →' : 'View all →'}
                  </Link>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider px-4 pt-2">{adultLabel}</p>
                  {adultItems.map(item => (
                    <Link key={item.href} to={lp(item.href)} onClick={() => { pushToDataLayer('click_navigation', { link_name: item.label, location: 'mobile_menu_services' }); setIsMenuOpen(false); }}
                      className="block text-sm text-muted-foreground py-2 px-4 hover:text-primary">{item.label}</Link>
                  ))}
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider px-4 pt-2">{childLabel}</p>
                  {childItems.map(item => (
                    <Link key={item.href} to={lp(item.href)} onClick={() => { pushToDataLayer('click_navigation', { link_name: item.label, location: 'mobile_menu_services' }); setIsMenuOpen(false); }}
                      className="block text-sm text-muted-foreground py-2 px-4 hover:text-primary">{item.label}</Link>
                  ))}
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider px-4 pt-2">{todosLabel}</p>
                  {todosItems.map(item => (
                    <Link key={item.href} to={lp(item.href)} onClick={() => { pushToDataLayer('click_navigation', { link_name: item.label, location: 'mobile_menu_services' }); setIsMenuOpen(false); }}
                      className="block text-sm text-muted-foreground py-2 px-4 hover:text-primary">{item.label}</Link>
                  ))}
                </div>
              )}

              {navLinks.slice(2).map((link) => (
                <Link key={link.href} to={lp(link.href)} onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${isActive(link.href) ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'}`}>
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                <Link to={lp('/contacto')} onClick={() => setIsMenuOpen(false)}>{t('nav.bookSession')}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
