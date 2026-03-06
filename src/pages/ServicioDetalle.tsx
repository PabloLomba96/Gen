import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, CheckCircle, MapPin, Video } from 'lucide-react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import JsonLd from '@/components/JsonLd';
import { services } from '@/data/services';
import { useEffect } from 'react';

const ServicioDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', service.metaDescription);
    }
  }, [service]);

  if (!service) return <Navigate to="/servicios" replace />;

  const otherServices = services.filter((s) => s.slug !== slug);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDescription,
    url: `https://genpsicologia.com/servicios/${service.slug}`,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Gen Centro de Psicología',
      url: 'https://genpsicologia.com',
      telephone: '+34611889209',
      email: 'patricia@genpsicologia.com',
    },
    areaServed: [
      { '@type': 'City', name: 'Valencia' },
      { '@type': 'Country', name: 'España' },
    ],
    serviceType: service.title,
    availableChannel: [
      { '@type': 'ServiceChannel', serviceLocation: { '@type': 'Place', name: 'Valencia, España' }, name: 'Presencial' },
      { '@type': 'ServiceChannel', name: 'Online (Videollamada)' },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={serviceJsonLd} />
      <Header />
      <main className="pt-20">
        {/* Breadcrumb + Hero */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 flex-wrap text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors">Servicios</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{service.title}</span>
            </div>

            <div className="max-w-4xl">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                service.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
              }`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {service.longDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                  ¿En qué te puedo ayudar?
                </h2>
                <ul className="space-y-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-4">Modalidades disponibles</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Presencial</p>
                        <p className="text-xs text-muted-foreground">Valencia, España</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Video className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Online</p>
                        <p className="text-xs text-muted-foreground">Videollamada segura</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full h-14">
                  <Link to="/contacto">
                    Reservar Primera Consulta
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-foreground mb-10 text-center">
              Otros servicios
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicios/${s.slug}`}
                  className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all text-center"
                  style={{ boxShadow: 'var(--shadow-soft)' }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                    s.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                  }`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {s.shortTitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
              ¿Quieres que hablemos?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              La primera consulta es para conocernos. Sin compromiso y con total confidencialidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8">
                <Link to="/contacto">
                  Contactar
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8">
                <Link to="/servicios">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Ver Todos los Servicios
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicioDetalle;
