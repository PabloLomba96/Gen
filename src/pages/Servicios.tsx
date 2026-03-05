import { Button } from '@/components/ui/button';
import { ArrowRight, Baby, Brain, Heart, Sparkles, Users, Puzzle, Video, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const services = [
  {
    icon: Baby,
    title: 'Psicología Infantil',
    description: 'Apoyo especializado para niños y niñas. Desarrollo emocional, conducta, miedos y autoestima.',
    details: [
      'Evaluación y diagnóstico infantil',
      'Intervención en problemas de conducta',
      'Trabajo con miedos y fobias',
      'Desarrollo de la autoestima',
    ],
    color: 'primary',
  },
  {
    icon: Users,
    title: 'Adolescentes',
    description: 'Acompañamiento en esta etapa de cambios. Identidad, relaciones sociales y gestión emocional.',
    details: [
      'Crisis de identidad y autoconcepto',
      'Relaciones sociales y bullying',
      'Gestión del estrés académico',
      'Comunicación familiar',
    ],
    color: 'accent',
  },
  {
    icon: Brain,
    title: 'Altas Capacidades',
    description: 'Evaluación y apoyo para niños con altas capacidades intelectuales y sus familias.',
    details: [
      'Evaluación de altas capacidades',
      'Orientación a familias',
      'Gestión de la disincronía',
      'Asesoramiento escolar',
    ],
    color: 'primary',
  },
  {
    icon: Puzzle,
    title: 'TDAH y TEA',
    description: 'Diagnóstico e intervención especializada en trastornos del neurodesarrollo.',
    details: [
      'Diagnóstico especializado',
      'Intervención conductual',
      'Estrategias para el aula',
      'Apoyo a la familia',
    ],
    color: 'accent',
  },
  {
    icon: Heart,
    title: 'Regulación Emocional',
    description: 'Herramientas para que los pequeños aprendan a entender y gestionar sus emociones.',
    details: [
      'Identificación de emociones',
      'Técnicas de relajación infantil',
      'Gestión de la ira y frustración',
      'Mindfulness para niños',
    ],
    color: 'primary',
  },
  {
    icon: Sparkles,
    title: 'Creatividad y Talento',
    description: 'Estimulamos el pensamiento divergente y desarrollamos el potencial de cada niño.',
    details: [
      'Estimulación del pensamiento divergente',
      'Desarrollo de habilidades creativas',
      'Potenciar talentos individuales',
      'Proyectos de autoexpresión',
    ],
    color: 'accent',
  },
];

const modalities = [
  {
    icon: MapPin,
    title: 'Consulta Presencial',
    description: 'Atiendo de forma presencial en Valencia. Los clientes particulares que contactan a través de esta web son atendidos en consulta privada.',
  },
  {
    icon: Video,
    title: 'Terapia Online',
    description: 'Sesiones online para familias que prefieren esta modalidad o no pueden desplazarse. Igual de efectivas y con mayor flexibilidad horaria.',
  },
];

const Servicios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-foreground">Servicios</span>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                ¿Cómo puedo <span className="text-gradient">ayudarte</span>?
              </h1>
              <p className="text-lg text-muted-foreground">
                Trabajo desde el juego y la diversión, haciendo del aprendizaje una experiencia 
                única para cada niño. Cada intervención es personalizada y basada en evidencia.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
                  style={{ boxShadow: 'var(--shadow-soft)' }}
                >
                  <div 
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                      service.color === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                    }`}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modalities */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Modalidades</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                Presencial y Online
              </h2>
              <p className="text-lg text-muted-foreground">
                Elige la modalidad que mejor se adapte a tu familia.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {modalities.map((mod) => (
                <div
                  key={mod.title}
                  className="bg-card rounded-2xl p-8 border border-border"
                  style={{ boxShadow: 'var(--shadow-soft)' }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <mod.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{mod.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Proceso</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">¿Cómo funciona?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: '01', title: 'Contacto', desc: 'Rellena el formulario o escríbeme por Instagram.' },
                { step: '02', title: 'Primera consulta', desc: 'Nos conocemos, evalúo la situación y te explico cómo puedo ayudaros.' },
                { step: '03', title: 'Plan de trabajo', desc: 'Diseño un plan personalizado adaptado a las necesidades de tu hijo.' },
                { step: '04', title: 'Sesiones', desc: 'Comenzamos las sesiones, con seguimiento continuo y feedback a la familia.' },
              ].map((item) => (
                <div key={item.step} className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-xl font-display font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
              ¿Listo para dar el primer paso?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              La primera consulta es para conocernos. Sin compromiso y con total confidencialidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8">
                <Link to="/contacto">
                  Reservar Primera Consulta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8">
                <a href="https://instagram.com/patri_psicologia" target="_blank" rel="noopener noreferrer">
                  Contactar por Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
