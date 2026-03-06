import { useLanguage } from '@/i18n/context';

const SpainFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
    <rect width="24" height="16" rx="2" fill="hsl(35, 25%, 93%)" />
    <rect y="0" width="24" height="4" fill="hsl(345, 38%, 45%)" />
    <rect y="4" width="24" height="8" fill="hsl(40, 50%, 65%)" />
    <rect y="12" width="24" height="4" fill="hsl(345, 38%, 45%)" />
  </svg>
);

const UKFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
    <rect width="24" height="16" rx="2" fill="hsl(180, 45%, 58%)" />
    {/* White cross */}
    <rect x="10" y="0" width="4" height="16" fill="hsl(40, 33%, 97%)" />
    <rect x="0" y="6" width="24" height="4" fill="hsl(40, 33%, 97%)" />
    {/* Granate cross */}
    <rect x="11" y="0" width="2" height="16" fill="hsl(345, 38%, 45%)" />
    <rect x="0" y="7" width="24" height="2" fill="hsl(345, 38%, 45%)" />
    {/* Diagonal lines (simplified) */}
    <line x1="0" y1="0" x2="10" y2="6" stroke="hsl(40, 33%, 97%)" strokeWidth="2" />
    <line x1="24" y1="0" x2="14" y2="6" stroke="hsl(40, 33%, 97%)" strokeWidth="2" />
    <line x1="0" y1="16" x2="10" y2="10" stroke="hsl(40, 33%, 97%)" strokeWidth="2" />
    <line x1="24" y1="16" x2="14" y2="10" stroke="hsl(40, 33%, 97%)" strokeWidth="2" />
    <line x1="0" y1="0" x2="10" y2="6" stroke="hsl(345, 38%, 45%)" strokeWidth="0.8" />
    <line x1="24" y1="0" x2="14" y2="6" stroke="hsl(345, 38%, 45%)" strokeWidth="0.8" />
    <line x1="0" y1="16" x2="10" y2="10" stroke="hsl(345, 38%, 45%)" strokeWidth="0.8" />
    <line x1="24" y1="16" x2="14" y2="10" stroke="hsl(345, 38%, 45%)" strokeWidth="0.8" />
  </svg>
);

const LanguageSwitcher = () => {
  const { lang, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={lang === 'en' ? switchLanguage : undefined}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
          lang === 'es'
            ? 'bg-primary/10 text-primary'
            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
        }`}
        aria-label="Cambiar a español"
      >
        <SpainFlag className="w-5 h-3.5" />
        ES
      </button>
      <button
        onClick={lang === 'es' ? switchLanguage : undefined}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
          lang === 'en'
            ? 'bg-primary/10 text-primary'
            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
        }`}
        aria-label="Switch to English"
      >
        <UKFlag className="w-5 h-3.5" />
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
