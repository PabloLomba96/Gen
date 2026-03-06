import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Laura M.',
    role: 'Madre de Hugo (8 años)',
    content: 'Gen Centro de Psicología ha sido un antes y un después para mi hijo. La forma de trabajar desde el juego ha ayudado a Hugo a gestionar su ansiedad de forma increíble.',
    highlight: 'Ansiedad infantil',
  },
  {
    name: 'Carlos y Ana',
    role: 'Padres de Lucía (12 años)',
    content: 'Cuando nos dijeron que Lucía tenía altas capacidades no sabíamos cómo ayudarla. En Gen Psicología nos han guiado a entenderla y acompañarla.',
    highlight: 'Altas capacidades',
  },
  {
    name: 'María J.',
    role: 'Madre de Daniel (10 años)',
    content: 'Con la ayuda de Gen Psicología, Daniel ha aprendido estrategias que le funcionan y ha mejorado mucho en el cole y en casa.',
    highlight: 'TDAH',
  },
  {
    name: 'Patricia R.',
    role: 'Madre de Sofía (6 años)',
    content: 'Mi hija tenía muchos miedos. Después de unas sesiones, Sofía está mucho más tranquila y segura de sí misma.',
    highlight: 'Miedos infantiles',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Testimonios</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Lo que dicen las familias
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="glass rounded-2xl p-7 hover:shadow-lg transition-all animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-7 h-7 text-primary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                "{t.content}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                    <span className="text-sm font-semibold text-foreground">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent-foreground font-medium">
                  {t.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-6 flex-wrap justify-center text-sm">
            <div className="flex items-center gap-1.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
              <span className="font-semibold text-foreground ml-1">5.0</span>
            </div>
            <span className="w-px h-5 bg-border" />
            <span className="text-muted-foreground"><strong className="text-foreground">+500</strong> familias</span>
            <span className="w-px h-5 bg-border" />
            <span className="text-muted-foreground"><strong className="text-foreground">+8 años</strong> experiencia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;