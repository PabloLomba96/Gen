import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '@/i18n/context';

const Cookies = () => {
  const { t, lp } = useLanguage();

  useEffect(() => {
    document.title = `${t('cookies.title')} — Gen Centro de Psicología`;
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 text-sm">
              <Link to={lp('/')} className="text-muted-foreground hover:text-primary transition-colors">{t('legal.breadcrumbHome')}</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{t('cookies.title')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">{t('cookies.title')}</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8 text-muted-foreground text-sm leading-relaxed">
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">1. ¿Qué son las cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde tus preferencias y mejore tu experiencia de navegación.</p>
              </div>
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">2. Cookies que utilizamos</h2>
                <p>Este sitio web utiliza únicamente las cookies estrictamente necesarias para su funcionamiento:</p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="py-2 pr-4 font-semibold text-foreground">Tipo</th>
                        <th className="py-2 pr-4 font-semibold text-foreground">Finalidad</th>
                        <th className="py-2 font-semibold text-foreground">Duración</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4">Técnicas</td>
                        <td className="py-2 pr-4">Necesarias</td>
                        <td className="py-2 pr-4">Funcionamiento básico del sitio web</td>
                        <td className="py-2">Sesión</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">Actualmente, este sitio web <strong className="text-foreground">no utiliza cookies analíticas, publicitarias ni de terceros</strong>. Si en el futuro se incorporasen, esta política será actualizada y se solicitará tu consentimiento previo.</p>
              </div>
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">3. Gestión de cookies</h2>
                <p>Puedes configurar tu navegador para rechazar la instalación de cookies o para que te avise cuando un sitio web intente instalarlas.</p>
                <ul className="mt-3 space-y-1.5 list-disc pl-5">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">4. Base legal</h2>
                <p>Las cookies estrictamente necesarias no requieren consentimiento del usuario (art. 22.2 LSSICE). Para cualquier otro tipo de cookie, se solicitará el consentimiento previo e informado del usuario.</p>
              </div>
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">5. Contacto</h2>
                <p>Si tienes dudas sobre nuestra política de cookies, puedes contactar con nosotros en <a href="mailto:patricia@genpsicologia.com" className="text-primary hover:underline">patricia@genpsicologia.com</a>.</p>
              </div>
              <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border">{t('legal.lastUpdated')}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
