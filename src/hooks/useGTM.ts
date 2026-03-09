import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getCookieConsent } from '@/components/CookieBanner';

const GTM_ID = 'GTM-PG7SVQ8M';

type ConsentValue = 'granted' | 'denied';

interface ConsentParams {
  analytics_storage: ConsentValue;
  ad_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

const initConsentMode = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments as unknown as Record<string, unknown>);
  };

  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  } satisfies ConsentParams);
};

const injectGTM = () => {
  if (document.getElementById('gtm-script')) return;

  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
};

export const pushToDataLayer = (event: string, payload?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...payload });
  }
};

export const grantConsent = () => {
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  } satisfies ConsentParams);
};

const useGTM = () => {
  const location = useLocation();
  const initialized = useRef(false);

  // Init consent mode + GTM once
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    initConsentMode();
    injectGTM();

    // If user already accepted, grant immediately
    if (getCookieConsent() === 'all') {
      grantConsent();
    }
  }, []);

  // SPA pageview tracking
  useEffect(() => {
    if (initialized.current) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'pageview', page: location.pathname });
    }
  }, [location.pathname]);
};

export default useGTM;
