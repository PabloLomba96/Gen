import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import OverlappingCircles from '@/components/OverlappingCircles';
import { useLanguage } from '@/i18n/context';
import { Instagram } from 'lucide-react';
import { pushToDataLayer } from '@/hooks/useGTM';
import cvBadge from '@/assets/cv16625-badge.png';

const Footer = () => {
  const { t, lp, lang } = useLanguage();
  const navLinks = t('footer.navLinks') as Array<{ label: string; href: string }>;

  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2 space-y-4">
            <Link to={lp('/')} className="inline-flex items-center gap-2.5">
              <OverlappingCircles size="md" />
              <span className="text-xl font-display font-bold text-background tracking-tight">
                GEN <span className="text-background/40 font-normal">|</span>{' '}
                <span className="font-semibold text-lg text-background/80">
                  {lang === 'es' ? 'Centro de Psicología' : 'Psychology Centre'}
                </span>
              </span>
            </Link>
            <p className="text-background/55 max-w-sm leading-relaxed text-sm">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com/genpsicologia"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pushToDataLayer('click_social', { network: 'instagram', handle: 'genpsicologia', location: 'footer' })}
                className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors text-xs"
                aria-label="Instagram Gen Psicología"
              >
                <Instagram className="w-4 h-4" />
                <span className="opacity-80 group-hover:opacity-100">Gen Psicología</span>
              </a>
              <a
                href="https://instagram.com/patri_psicologia"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pushToDataLayer('click_social', { network: 'instagram', handle: 'patri_psicologia', location: 'footer' })}
                className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors text-xs"
                aria-label="Instagram Patri Psicología"
              >
                <Instagram className="w-4 h-4" />
                <span className="opacity-80 group-hover:opacity-100">Patri Psicología</span>
              </a>
              <a
                href="https://wa.me/34611889209"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pushToDataLayer('click_social', { network: 'whatsapp', location: 'footer' })}
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a
                href="mailto:hola@genpsicologia.com"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">{t('footer.navTitle')}</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={lp(link.href)} className="text-background/55 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">{t('footer.contactTitle')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/55">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <a href="mailto:hola@genpsicologia.com" className="hover:text-background transition-colors">
                  hola@genpsicologia.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/55">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>{t('footer.locationDetail')}</span>
              </li>
              <li className="flex items-center gap-2 text-background/55">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <a href="tel:+34611889209" className="hover:text-background transition-colors">+34 611 889 209</a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <img
                src={cvBadge}
                alt={lang === 'es' ? 'Col·legi Oficial de Psicologia — Colegiada CV16625' : 'Official College of Psychology — Licensed CV16625'}
                className="w-12 h-auto rounded-sm opacity-80"
                width={48}
                height={60}
                loading="lazy"
              />
              <div className="text-xs text-background/45 leading-tight">
                <p className="font-semibold text-background/60">{lang === 'es' ? 'Colegiada CV16625' : 'Licensed CV16625'}</p>
                <p>{lang === 'es' ? 'Clínica autorizada Sanidad' : 'Health-authorized clinic'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-background/35">
          <p>{(t('footer.copyright') as string).replace('{year}', new Date().getFullYear().toString())}</p>
          <div className="flex items-center gap-5">
            <Link to={lp('/privacidad')} className="hover:text-background/60 transition-colors">{t('footer.privacyLink')}</Link>
            <Link to={lp('/aviso-legal')} className="hover:text-background/60 transition-colors">{t('footer.legalLink')}</Link>
            <Link to={lp('/cookies')} className="hover:text-background/60 transition-colors">{t('footer.cookiesLink')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
