import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { useLanguage } from '@/i18n/context';

const Privacidad = () => {
  const { t, lp, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={lang === 'en' ? 'Privacy Policy — Gen Psychology Centre Valencia' : 'Política de Privacidad — Gen Centro de Psicología Valencia'}
        description={lang === 'en'
          ? 'Privacy policy for Gen Psychology Centre. How we collect, use and protect your personal data in compliance with GDPR.'
          : 'Política de privacidad de Gen Centro de Psicología. Información sobre el tratamiento de datos personales conforme al RGPD.'}
        lang={lang}
        canonical={`https://genpsicologia.com${lp('/privacidad')}`}
      />
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 text-sm">
              <Link to={lp('/')} className="text-muted-foreground hover:text-primary transition-colors">{t('legal.breadcrumbHome')}</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{t('privacidad.title')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">{t('privacidad.title')}</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8 text-muted-foreground text-sm leading-relaxed">
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">1. Responsable del tratamiento</h2>
                <ul className="space-y-1.5 list-none pl-0">
                  <li><strong className="text-foreground">Responsable:</strong> Patricia Martínez Díaz</li>
                  <li><strong className="text-foreground">Nombre comercial:</strong> Gen Centro de Psicología</li>
                  <li><strong className="text-foreground">Email de contacto:</strong> patricia@genpsicologia.com</li>
                  <li><strong className="text-foreground">Finalidad:</strong> Gestión de consultas, citas, suscripciones a newsletter y prestación de servicios de psicología.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">2. Datos que recogemos</h2>
                <p>A través de los formularios de este sitio web, podemos recoger los siguientes datos personales:</p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>Nombre y apellidos</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono (opcional)</li>
                  <li>Motivo de consulta y mensaje</li>
                </ul>
                <p className="mt-3"><strong className="text-foreground">Datos de salud:</strong> En el contexto de la atención psicológica profesional (fuera de este sitio web), podrán tratarse datos de categoría especial (datos de salud) conforme al artículo 9.2.h del RGPD, con las garantías establecidas en la legislación sanitaria vigente. Estos datos nunca se recogen a través de los formularios web.</p>
              </div>
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">3. Finalidad y base legal</h2>
                <ul className="space-y-2 list-none pl-0">
                  <li><strong className="text-foreground">Formulario de contacto:</strong> Responder a consultas y solicitudes de información. Base legal: consentimiento del interesado (art. 6.1.a RGPD).</li>
                  <li><strong className="text-foreground">Newsletter:</strong> Envío de comunicaciones informativas sobre psicología infantojuvenil. Base legal: consentimiento del interesado (art. 6.1.a RGPD).</li>
                  <li><strong className="text-foreground">Prestación de servicios:</strong> Gestión de la relación profesional. Base legal: ejecución de contrato (art. 6.1.b RGPD) y obligación legal (art. 6.1.c RGPD).</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">4. Conservación de datos</h2>
                <p>Los datos personales se conservarán mientras sean necesarios para la finalidad para la que fueron recogidos y, posteriormente, durante los plazos legalmente establecidos. Los datos de contacto de consultas no atendidas se eliminarán en un plazo máximo de 12 meses. Los datos clínicos se conservarán según la legislación sanitaria aplicable (mínimo 5 años desde la última asistencia).</p>
              </div>
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">5. Derechos del interesado</h2>
                <p>Como titular de los datos, tienes derecho a:</p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li><strong className="text-foreground">Acceso:</strong> Conocer qué datos personales tratamos sobre ti.</li>
                  <li><strong className="text-foreground">Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
                  <li><strong className="text-foreground">Supresión:</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
                  <li><strong className="text-foreground">Oposición:</strong> Oponerte al tratamiento en determinadas circunstancias.</li>
                  <li><strong className="text-foreground">Limitación:</strong> Solicitar la limitación del tratamiento.</li>
                  <li><strong className="text-foreground">Portabilidad:</strong> Recibir tus datos en un formato estructurado.</li>
                </ul>
                <p className="mt-3">Puedes ejercer estos derechos enviando un email a <a href="mailto:patricia@genpsicologia.com" className="text-primary hover:underline">patricia@genpsicologia.com</a>. También tienes derecho a presentar una reclamación ante la <strong className="text-foreground">Agencia Española de Protección de Datos (AEPD)</strong> — <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.</p>
              </div>
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">6. Destinatarios</h2>
                <p>Tus datos no serán cedidos a terceros salvo obligación legal. Utilizamos proveedores de servicios tecnológicos que actúan como encargados del tratamiento y que ofrecen garantías adecuadas de protección de datos.</p>
              </div>
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">7. Menores de edad</h2>
                <p>El tratamiento de datos de menores de 14 años requiere el consentimiento de sus padres o tutores legales. Para la atención psicológica de menores, es imprescindible el consentimiento firmado de ambos progenitores o tutores legales.</p>
              </div>
              <div>
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">8. Seguridad</h2>
                <p>Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado, conforme al estado de la tecnología y la naturaleza de los datos.</p>
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

export default Privacidad;
