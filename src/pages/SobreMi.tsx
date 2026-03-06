import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Heart, Award, Quote, MapPin, Video, Users, Star, CheckCircle, BookOpen, Shield, Brain, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoPatricia from '@/assets/logo-patricia.png';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Psicóloga General Sanitaria',
    description: 'Grado en Psicología con mención clínica. Máster en Tratamiento Psicológico con Niños y Adolescentes. Máster en Psicología General Sanitaria.',
  },
  {
    icon: Award,
    title: 'Centro Divergentes',
    description: 'Colaboro con el Centro Divergentes de Valencia, referente en altas capacidades y neurodiversidad, atendiendo a los clientes derivados por el centro.',
  },
  {
    icon: Users,
    title: 'Pausa Salud',
    description: 'Formo parte del equipo multidisciplinar de Pausa Salud, ampliando áreas de intervención y trabajo en equipo.',
  },
  {
    icon: Heart,
    title: 'Enfoque basado en evidencia',
    description: 'Terapia cognitivo-conductual combinada con disciplina positiva, juego terapéutico y técnicas adaptadas a cada caso.',
  },
];

const specializations = [
  'Altas Capacidades Intelectuales',
  'Trastornos del Neurodesarrollo (TDAH, TEA)',
  'Trastornos del Aprendizaje (Dislexia, Discalculia)',
  'Problemas de Conducta',
  'Ansiedad y Fobias',
  'Regulación Emocional',
  'Autoestima y Habilidades Sociales',
  'Duelo y Estrés',
  'Terapia de Pareja',
  'Psicoterapia Oncológica',
];

const formacion = [
  'Grado en Psicología con mención clínica',
  'Máster en Tratamiento Psicológico con Niños y Adolescentes',
  'Máster en Psicología General Sanitaria',
  'Especialista en Altas Capacidades Intelectuales',
  'Especialista en Trastornos del Neurodesarrollo',
  'Formación en intervención en emergencias sociales (COP Valencia)',
  'Red de Apoyo para la prevención del suicidio',
  'Psicoterapia Oncológica',
  'Disciplina Positiva',
  'Trastornos de la conducta infantil',
  'Dificultades del Aprendizaje',
  'Terapia Asistida con Animales',
  'Trauma en niños y adolescentes (COP Valencia)',
];

const values = [
  {
    title: 'Escucha activa',
    description: 'Cada niño tiene su propio mundo. Mi trabajo empieza por escuchar sin juicio.',
  },
  {
    title: 'Juego como herramienta',
    description: 'El juego es el lenguaje natural de los niños. A través de él, trabajamos emociones y habilidades.',
  },
  {
    title: 'Evidencia científica',
    description: 'Mis intervenciones están basadas en las últimas investigaciones en psicología infantil.',
  },
  {
    title: 'Trabajo con la familia',
    description: 'Los padres son parte esencial del proceso. Os acompaño con pautas y orientación.',
  },
];

const SobreMi = () => {
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
              <span className="text-sm text-foreground">Sobre Mí</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Image Side */}
              <div className="relative">
                <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                  <div className="absolute top-8 left-8 w-full h-full rounded-3xl border-2 border-primary/20" />
                  <div 
                    className="relative h-full rounded-3xl bg-card overflow-hidden border border-border flex items-center justify-center p-8"
                    style={{ boxShadow: 'var(--shadow-card)' }}
                  >
                    <img 
                      src={logoPatricia} 
                      alt="Patricia Martínez Díaz — Psicóloga General Sanitaria CV16625 — Gen Centro de Psicología Valencia" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div 
                    className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 border border-border max-w-xs animate-float"
                    style={{ boxShadow: 'var(--shadow-card)' }}
                  >
                    <Quote className="w-8 h-8 text-primary/30 mb-2" />
                    <p className="text-sm text-foreground italic leading-relaxed">
                      "Cada niño tiene un mundo interior lleno de posibilidades. Mi trabajo es ayudarle a descubrirlo."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Patricia Martínez Díaz</p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground">
                  Hola, soy <span className="text-gradient">Patricia</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Soy <strong>Patricia Martínez Díaz</strong>, Psicóloga General Sanitaria colegiada 
                  <strong> CV16625</strong>, especializada en psicología infantojuvenil, trastornos del 
                  neurodesarrollo y altas capacidades. Escogí esta profesión por vocación y soy una 
                  enamorada de este trabajo.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Me he especializado en el ámbito de la Psicología Clínica y de la Salud, con 
                  formación que incluye un <strong>Máster en Tratamiento Psicológico con Niños y 
                  Adolescentes</strong> y un <strong>Máster en Psicología General Sanitaria</strong>. 
                  Colaboro con el <strong>Centro Divergentes</strong>, referente en Valencia en altas 
                  capacidades y neurodiversidad, y con <strong>Pausa Salud</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trabajo con niños, adolescentes y adultos en áreas como altas capacidades intelectuales, 
                  TDAH, TEA, regulación emocional, ansiedad, autoestima, problemas de conducta y 
                  dificultades del aprendizaje. Mi enfoque combina la terapia cognitivo-conductual, 
                  el juego, la creatividad y técnicas basadas en evidencia para crear un espacio seguro 
                  donde cada persona pueda desarrollar todo su potencial.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm">Colegiada CV16625</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm">2 Másteres en Psicología</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">Valencia, España</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Video className="w-4 h-4 text-primary" />
                    <span className="text-sm">Presencial y Online</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">+22 opiniones verificadas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Mi Trayectoria</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Formación y experiencia</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {credentials.map((credential) => (
                <div 
                  key={credential.title}
                  className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
                  style={{ boxShadow: 'var(--shadow-soft)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <credential.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{credential.title}</h3>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formación detallada */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Cualificaciones</span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Formación académica y especializada</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Formación
                  </h3>
                  <ul className="space-y-3">
                    {formacion.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    Especialidades
                  </h3>
                  <ul className="space-y-3">
                    {specializations.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Sparkles className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Mi Filosofía</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Cómo trabajo</h2>
              <p className="text-lg text-muted-foreground">
                Desde la primera sesión, encontrarás un espacio seguro donde expresarte sin juicios. 
                Mi enfoque se basa en el respeto, la escucha y el juego como herramientas fundamentales.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4 p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfiles profesionales */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Encuéntrame también en</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.doctoralia.es/patricia-martinez-5/psicologo-psicologo-infantil/valencia" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                Doctoralia
              </a>
              <a href="https://psicologiaymente.com/psicologos/2079378/patricia-martinez-diaz" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                Psicología y Mente
              </a>
              <a href="https://www.linkedin.com/in/patricia-mart%C3%ADnez-125408145/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/patri_psicologia/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                Instagram
              </a>
              <a href="https://pausasalud.com/patricia-martinez-psicologia/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                Pausa Salud
              </a>
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
              La primera consulta es para conocernos y entender cómo puedo ayudaros. Sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8">
                <Link to="/contacto">
                  Reservar Primera Consulta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8">
                <Link to="/servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SobreMi;
