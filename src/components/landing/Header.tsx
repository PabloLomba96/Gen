import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import OverlappingCircles from '@/components/OverlappingCircles';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/i18n/context';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, lp, lang } = useLanguage();

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/sobre-mi', label: t('nav.about') },
    { href: '/servicios', label: t('nav.services') },
    { href: '/tienda', label: t('nav.resources') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/contacto', label: t('nav.contact') },
  ];

  const isActive = (href: string) => {
    const localizedHref = lp(href);
    return location.pathname === localizedHref;
  };

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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={lp(link.href)}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all rounded-full px-6"
            >
              <Link to={lp('/contacto')}>{t('nav.bookSession')}</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={lp(link.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                    isActive(link.href)
                      ? 'text-primary bg-primary/5'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                <Link to={lp('/contacto')} onClick={() => setIsMenuOpen(false)}>
                  {t('nav.bookSession')}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
