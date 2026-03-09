import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCookieConsent } from '@/components/CookieBanner';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

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
  });
};

const useGTM = () => {
  const location = useLocation();

  // Grant consent on first load if user already accepted
  useEffect(() => {
    if (getCookieConsent() === 'all') {
      grantConsent();
    }
  }, []);

  // SPA pageview tracking
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'pageview', page: location.pathname });
  }, [location.pathname]);
};

export default useGTM;
