import { Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/context';

/**
 * Floating bottom CTA visible only on mobile.
 * Hidden on /hola and /contacto to avoid duplication.
 */
const MobileBookingCta = () => {
  const { lp, lang } = useLanguage();
  const { pathname } = useLocation();

  // Hide on pages that already have prominent CTAs
  const hiddenPaths = ['/hola', '/en/hello', '/contacto', '/en/contact'];
  if (hiddenPaths.includes(pathname)) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-fade-up">
      <Link
        to={lp('/contacto')}
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm transition-all active:scale-[0.97] min-h-[48px]"
        style={{ boxShadow: 'var(--shadow-glow-primary)' }}
      >
        <Calendar className="w-4 h-4" />
        {lang === 'es' ? 'Pedir Cita' : 'Book Session'}
      </Link>
    </div>
  );
};

export default MobileBookingCta;
