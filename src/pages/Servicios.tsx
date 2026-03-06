import { Button } from '@/components/ui/button';
import { ArrowRight, Baby, Brain, Heart, Sparkles, Users, Puzzle, Video, MapPin, CheckCircle, BookOpen, UserCheck, HeartHandshake, ShieldCheck, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import ServiceCard from '@/components/servicios/ServiceCard';
import ModalityCard from '@/components/servicios/ModalityCard';

const services = [
  {
    icon: Baby,
    title: 'Terapia Infantil',
    description: 'Acompañamiento emocional para niños en cada etapa de su desarrollo. Trabajamos desde el juego, la creatividad y el vínculo.',
    details: [
      'Gestión emocional y rabietas',
      'Ansiedad por separación',
      'Miedos y fobias infantiles',
      'Autoestima y seguridad',
      'Problemas de conducta',
      'Separación de progenitores',
    ],
    color: 'primary' as const,
  },
  {
    icon: Users,
    title: 'Terapia Adolescentes',
    description: 'La adolescencia es una etapa de transformación profunda. Acompañamos a tu hijo/a a entender y gestionar lo que está viviendo.',
    details: [
      'Crisis de identidad y autoconcepto',
      'Acoso escolar (bullying)',
      'Relaciones y vínculos',
      'Estrés y ansiedad',
      'Baja autoestima',
      'Problemas de sueño',
    ],
    color: 'accent' as const,
  },
  {
    icon: Brain,
    title: 'Altas Capacidades (AACC)',
    description: 'Evaluación y apoyo integral para niños con altas capacidades intelectuales y sus familias.',
    details: [
      'Evaluación de altas capacidades',
      'Gestión de la disincronía',
      'Orientación a familias',
      'Asesoramiento escolar',
      'Desarrollo del talento',
      'Gestión de la sobrecarga sensorial',
    ],
    color: 'primary' as const,
  },
  {
    icon: Puzzle,
    title: 'TDAH y TEA',
    description: 'Diagnóstico e intervención especializada en trastornos del neurodesarrollo con enfoque personalizado.',
    details: [
      'Evaluación y diagnóstico',
      'Intervención conductual',
      'Estrategias para el aula',
      'Funciones ejecutivas',
      'Coordinación con colegios',
      'Apoyo a la familia',
    ],
    color: 'accent' as const,
  },
  {
    icon: BookOpen,
    title: 'Dificultades del Aprendizaje',
    description: 'Intervención en dificultades de lectura, escritura, comprensión y atención adaptada al ritmo de cada niño.',
    details: [
      'Dificultades de lectoescritura',
      'Disgrafía y discalculia',
      'Trastorno Específico del Lenguaje (TEL)',
      'Dificultad de concentración',
      'Rendimiento académico',
      'Atención y funciones ejecutivas',
    ],
    color: 'primary' as const,
  },
  {
    icon: Heart,
    title: 'Regulación Emocional',
    description: 'Herramientas para que los pequeños aprendan a entender, expresar y gestionar sus emociones de forma saludable.',
    details: [
      'Identificación de emociones',
      'Gestión de la ira y frustración',
      'Técnicas de relajación infantil',
      'Mindfulness para niños',
      'Duelo y procesos de pérdida',
      'Experiencias traumáticas',
    ],
    color: 'accent' as const,
  },
  {
    icon: HeartHandshake,
    title: 'Terapia Familiar',
    description: 'Acompañamos a la familia para mejorar la comunicación, resolver conflictos y fortalecer los vínculos.',
    details: [
      'Dificultades de comunicación',
      'Conflictos familiares',
      'Pautas de crianza',
      'Separación y divorcio',
      'Rechazo hacia progenitores',
      'Orientación parental',
    ],
    color: 'primary' as const,
  },
  {
    icon: Sparkles,
    title: 'Creatividad y Talento',
    description: 'Estimulamos el pensamiento divergente y desarrollamos el potencial único de cada niño.',
    details: [
      'Pensamiento divergente',
      'Habilidades creativas',
      'Potenciar talentos individuales',
      'Proyectos de autoexpresión',
      'Introversión y límites sociales',
      'Sobrecarga social',
    ],
    color: 'accent' as const,
  },
  {
    icon: ShieldCheck,
    title: 'Trauma y Apego',
    description: 'Intervención especializada en experiencias traumáticas y dificultades vinculares desde una mirada integradora.',
    details: [
      'Abuso sexual infantil (ASI)',
      'Experiencias traumáticas',
      'Dificultades de apego',
      'Trauma complejo',
      'Duelo infantil',
      'Seguridad emocional',
    ],
    color: 'primary' as const,
  },
];

const modalities = [
  {
    icon: MapPin,
    title: 'Consulta Presencial',
    description: 'Atiendo de forma presencial en Valencia. Un espacio cálido y seguro donde tu hijo/a se sentirá acompañado/a.',
  },
  {
    icon: Video,
    title: 'Terapia Online',
    description: 'Sesiones online para familias que prefieren esta modalidad o no pueden desplazarse. Misma calidad, mayor flexibilidad.',
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
                Trabajo desde el juego, la creatividad y el vínculo, haciendo del aprendizaje una experiencia 
                única para cada niño. Cada intervención es personalizada, basada en evidencia y adaptada 
                al momento vital de tu hijo/a y tu familia.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Coordinación con colegios */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <UserCheck className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">Coordinación con Colegios</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Creo en la importancia de que todos los entornos del niño trabajen en la misma dirección. 
                    Por ello, mantengo comunicación con los centros educativos (cuando la familia lo autoriza) 
                    para compartir información relevante, unificar criterios y favorecer su adaptación escolar. 
                    Esta coordinación permite que el niño reciba un apoyo más completo y coherente tanto en casa como en el aula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nota importante menores */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-accent/5 border border-accent/20 rounded-2xl p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Nota importante:</strong> Para comenzar a trabajar con un menor de edad, 
                es imprescindible que ambos progenitores o tutores legales estén de acuerdo y den su consentimiento firmado.
              </p>
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
                <ModalityCard key={mod.title} modality={mod} />
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
                { step: '01', title: 'Contacto', desc: 'Rellena el formulario o escríbeme por Instagram. Te responderé en 24-48h.' },
                { step: '02', title: 'Primera consulta', desc: 'Nos conocemos, evalúo la situación y te explico cómo puedo ayudaros.' },
                { step: '03', title: 'Plan de trabajo', desc: 'Diseño un plan personalizado adaptado a las necesidades de tu hijo/a.' },
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

        {/* Not found message */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Lightbulb className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">
              ¿No encuentras tu motivo de consulta?
            </h3>
            <p className="text-muted-foreground mb-6">
              Escríbeme y revisaremos tu situación de manera personalizada. Y si por cualquier motivo no pudiera 
              acompañarte en el proceso, te orientaré y derivaré con confianza a un profesional que sí pueda hacerlo.
            </p>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/contacto">Cuéntame tu caso</Link>
            </Button>
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
                <a href="https://instagram.com/genpsicologia" target="_blank" rel="noopener noreferrer">
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
