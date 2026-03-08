import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Heart, Award, Quote, MapPin, Video, Users, Star, CheckCircle, BookOpen, Shield, Brain, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoPatricia from '@/assets/logo-patricia.png';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import SEO from '@/components/SEO';
import { useLanguage } from '@/i18n/context';

const BASE = 'https://genpsicologia.com';
const credentialIcons = [GraduationCap, Award, Users, Heart];

const SobreMi = () => {
  const { t, lp, lang } = useLanguage();
  const s = t('sobreMi') as any;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={lang === 'en' ? 'About Me — Child & Adult Psychologist in Valencia' : 'Sobre Mí — Psicóloga Infantil y de Adultos en Valencia'}
        description={lang === 'en' ? 'Meet Patricia Martínez Díaz, licensed psychologist in Valencia specialising in children, teens and adults. In-person & online therapy in English and Spanish.' : 'Conoce a Patricia Martínez Díaz, psicóloga colegiada en Valencia especializada en infancia, adolescencia y adultos. Terapia presencial y online.'}
        lang={lang}
        canonical={`${BASE}${lp('/sobre-mi')}`}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <Link to={lp('/')} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('common.breadcrumbHome')}</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-foreground">{s.breadcrumb}</span>
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
                    <p className="text-sm text-foreground italic leading-relaxed">{s.quote}</p>
                    <p className="text-xs text-muted-foreground mt-2">{s.quoteAuthor}</p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground">
                  {s.title} <span className="text-gradient">{s.titleHighlight}</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.bio1 }} />
                <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.bio2 }} />
                <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: s.bio3 }} />
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm">{s.badges.collegiate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm">{s.badges.masters}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{s.badges.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Video className="w-4 h-4 text-primary" />
                    <span className="text-sm">{s.badges.modality}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">{s.badges.reviews}</span>
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
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">{s.credentialsLabel}</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">{s.credentialsTitle}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {(s.credentials as any[]).map((credential: any, i: number) => {
                const Icon = credentialIcons[i] || Heart;
                return (
                  <div 
                    key={credential.title}
                    className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
                    style={{ boxShadow: 'var(--shadow-soft)' }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{credential.title}</h3>
                      <p className="text-sm text-muted-foreground">{credential.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Formación detallada */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">{s.qualificationsLabel}</span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">{s.qualificationsTitle}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    {s.formacionTitle}
                  </h3>
                  <ul className="space-y-3">
                    {(s.formacion as string[]).map((item: string) => (
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
                    {s.especialidadesTitle}
                  </h3>
                  <ul className="space-y-3">
                    {(s.especialidades as string[]).map((item: string) => (
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
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">{s.valuesLabel}</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">{s.valuesTitle}</h2>
              <p className="text-lg text-muted-foreground">{s.valuesSubtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {(s.values as any[]).map((value: any) => (
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
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">{s.profilesTitle}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.doctoralia.es/patricia-martinez-5/psicologo-psicologo-infantil/valencia" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">Doctoralia</a>
              <a href="https://psicologiaymente.com/psicologos/2079378/patricia-martinez-diaz" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">Psicología y Mente</a>
              <a href="https://www.linkedin.com/in/patricia-mart%C3%ADnez-125408145/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">LinkedIn</a>
              <a href="https://www.instagram.com/patri_psicologia/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">Instagram</a>
              <a href="https://pausasalud.com/patricia-martinez-psicologia/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">Pausa Salud</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">{s.ctaTitle}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{s.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8">
                <Link to={lp('/contacto')}>
                  {s.ctaPrimary}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8">
                <Link to={lp('/servicios')}>{s.ctaSecondary}</Link>
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
