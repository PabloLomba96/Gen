import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Video, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoPatricia from '@/assets/logo-patricia.png';
import { useLanguage } from '@/i18n/context';

const Hero = () => {
  const { t, lp, lang } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      
      <div className="absolute top-24 right-[-8%] w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute bottom-16 left-[-6%] w-72 h-72 rounded-full bg-primary/6 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-overlap opacity-[0.04] blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/10 border border-accent/15">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                {lang === 'es' ? 'Psicología en Valencia' : 'Psychology in Valencia'}
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-display font-bold text-foreground leading-[1.13]">
                {lang === 'es' ? (
                  <>
                    Psicología en Valencia.{' '}
                    <br className="hidden sm:block" />
                    <span className="text-gradient">Espacios seguros</span> para adultos, adolescentes y niños.
                  </>
                ) : (
                  <>
                    Psychology in Valencia.{' '}
                    <br className="hidden sm:block" />
                    <span className="text-gradient">Safe spaces</span> for adults, adolescents and children.
                  </>
                )}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                {lang === 'es'
                  ? 'Especialista en neurodivergencia, infantojuvenil y regulación emocional. Presencial y online.'
                  : 'Specialist in neurodivergence, child & adolescent psychology and emotional regulation. In-person and online.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />{t('hero.tagValencia')}
              </span>
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground">
                <Video className="w-3.5 h-3.5 text-accent" />{t('hero.tagOnline')}
              </span>
            </div>

            {/* Dual CTA cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <Link
                to={lp('/servicios')}
                className="group glass rounded-2xl p-5 hover:shadow-lg transition-all duration-300 block border border-primary/20 hover:border-primary/40"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-base font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {lang === 'es' ? 'Terapia para Adultos' : 'Adult Therapy'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {lang === 'es' ? 'Presencial y online' : 'In-person & online'}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center text-sm text-primary font-medium">
                  {lang === 'es' ? 'Ver servicios' : 'View services'}
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to={lp('/servicios')}
                className="group glass rounded-2xl p-5 hover:shadow-lg transition-all duration-300 block border border-accent/20 hover:border-accent/40"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Moon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-base font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                      {lang === 'es' ? 'Psicología Infantojuvenil' : 'Child & Adolescent'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {lang === 'es' ? 'Presencial y online' : 'In-person & online'}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center text-sm text-accent font-medium">
                  {lang === 'es' ? 'Ver servicios' : 'View services'}
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-3">
              <div className="flex -space-x-2.5">
                {['LM', 'CA', 'MJ', 'PR'].map((initials, i) =>
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-muted-foreground">{initials}</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{t('hero.socialProofCount')}</span> {t('hero.socialProofText')}
              </p>
            </div>
          </div>

          <div className="relative animate-scale-in hidden lg:flex justify-center" style={{ animationDelay: '0.15s' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-overlap opacity-10 blur-2xl scale-110" />
              
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={logoPatricia}
                  alt="Gen Psicología — Psicología integrativa en Valencia para adultos, adolescentes y niños"
                  className="w-full h-full object-contain drop-shadow-lg" />
              </div>

              <div className="absolute -top-14 left-1/2 -translate-x-1/4 glass rounded-2xl p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <span className="text-xs">💬</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-foreground">{t('hero.floatingConsult')}</p>
                    <p className="text-[9px] text-muted-foreground">{t('hero.floatingConsultSub')}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-16 -left-4 glass rounded-2xl p-3 shadow-lg animate-float" style={{ animationDelay: '2.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/12 flex items-center justify-center shrink-0">
                    <span className="text-xs">🏠</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-foreground">{t('hero.floatingModality')}</p>
                    <p className="text-[9px] text-muted-foreground">{t('hero.floatingModalitySub')}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-16 right-0 glass rounded-2xl p-3 shadow-lg animate-float" style={{ animationDelay: '5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-overlap/20 flex items-center justify-center shrink-0">
                    <span className="text-xs">🌿</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-foreground">{t('hero.floatingSafe')}</p>
                    <p className="text-[9px] text-muted-foreground">{t('hero.floatingSafeSub')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
