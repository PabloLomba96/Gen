import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/context';
import { Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookie-consent';

export type CookieConsent = 'all' | 'essential';

export const getCookieConsent = (): CookieConsent | null => {
  return localStorage.getItem(COOKIE_CONSENT_KEY) as CookieConsent | null;
};

export const revokeCookieConsent = () => {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.location.reload();
};

const CookieBanner = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) {
      setVisible(true);
    }
  }, []);

  const handleAccept = (consent: CookieConsent) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, consent);
    setVisible(false);

    // Dynamically import to avoid circular deps
    if (consent === 'all') {
      import('@/hooks/useGTM').then(({ grantConsent }) => grantConsent());
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="glass container mx-auto max-w-3xl rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="h-6 w-6 text-primary shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
          {t('cookieBanner.text')}
        </p>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleAccept('essential')}
            className="flex-1 sm:flex-initial"
          >
            {t('cookieBanner.reject')}
          </Button>
          <Button
            size="sm"
            onClick={() => handleAccept('all')}
            className="flex-1 sm:flex-initial"
          >
            {t('cookieBanner.accept')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
