import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getCookieConsent } from '@/components/CookieBanner';

const GTM_ID = 'GTM-PG7SVQ8M';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const injectGTM = () => {
  if (document.getElementById('gtm-script')) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
};

const useGTM = () => {
  const location = useLocation();
  const injected = useRef(false);

  // Inject GTM on mount or when consent changes
  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === 'all' && !injected.current) {
      injectGTM();
      injected.current = true;
    }
  });

  // Track SPA route changes
  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === 'all' && injected.current) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'pageview', page: location.pathname });
    }
  }, [location.pathname]);
};

export default useGTM;
