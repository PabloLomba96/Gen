import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '@/i18n/context';

const AvisoLegal = () => {
  const { t, lp } = useLanguage();

  useEffect(() => {
    document.title = `${t('avisoLegal.title')} — Gen Centro de Psicología`;
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
              <span className="text-foreground">{t('avisoLegal.title')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">{t('avisoLegal.title')}</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-neutral">
              <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">1. Datos identificativos</h2>
                  <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa al usuario de los datos del titular de este sitio web:</p>
                  <ul className="mt-3 space-y-1.5 list-none pl-0">
                    <li><strong className="text-foreground">Titular:</strong> Patricia Martínez Díaz</li>
                    <li><strong className="text-foreground">Nombre comercial:</strong> Gen Centro de Psicología</li>
                    <li><strong className="text-foreground">Nº de Colegiada:</strong> CV16625 (Colegio Oficial de Psicología de la Comunitat Valenciana)</li>
                    <li><strong className="text-foreground">Email:</strong> patricia@genpsicologia.com</li>
                    <li><strong className="text-foreground">Teléfono:</strong> +34 611 889 209</li>
                    <li><strong className="text-foreground">Ubicación:</strong> Valencia, España</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">2. Objeto</h2>
                  <p>Este sitio web tiene como finalidad informar sobre los servicios de psicología que ofrece Gen Centro de Psicología, facilitar el contacto con la profesional y poner a disposición del usuario recursos relacionados con la salud mental infantojuvenil.</p>
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">3. Condiciones de uso</h2>
                  <p>El acceso a este sitio web es gratuito y no requiere registro previo. El usuario se compromete a hacer un uso adecuado del mismo conforme a la legislación vigente, la buena fe y el orden público. Queda prohibido el uso del sitio web con fines ilícitos o que perjudiquen a terceros.</p>
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">4. Propiedad intelectual e industrial</h2>
                  <p>Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseño gráfico, código fuente, etc.) son propiedad de Patricia Martínez Díaz o de terceros que han autorizado su uso, y están protegidos por la legislación vigente en materia de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.</p>
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">5. Exclusión de responsabilidad</h2>
                  <p>Gen Centro de Psicología no se hace responsable de los daños o perjuicios que pudieran derivarse del uso de este sitio web, incluyendo errores u omisiones en los contenidos, falta de disponibilidad del sitio o la transmisión de virus informáticos. Los contenidos de este sitio web son de carácter informativo y no sustituyen en ningún caso la consulta profesional personalizada.</p>
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">6. Enlaces externos</h2>
                  <p>Este sitio web puede contener enlaces a páginas de terceros. Gen Centro de Psicología no se responsabiliza del contenido ni de las políticas de privacidad de dichos sitios.</p>
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground mb-3">7. Legislación aplicable y jurisdicción</h2>
                  <p>Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de la ciudad de Valencia.</p>
                </div>
                <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border">{t('legal.lastUpdated')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AvisoLegal;
