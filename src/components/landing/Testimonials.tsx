import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Laura M.',
    role: 'Madre de Hugo (8 años)',
    content: 'Patricia ha sido un antes y un después para mi hijo. Su forma de trabajar desde el juego y la comprensión ha ayudado a Hugo a gestionar su ansiedad de una manera increíble.',
    rating: 5,
    highlight: 'Cambio increíble',
  },
  {
    name: 'Carlos y Ana',
    role: 'Padres de Lucía (12 años)',
    content: 'Cuando nos dijeron que Lucía tenía altas capacidades no sabíamos cómo ayudarla. Patricia nos ha guiado a entenderla mejor y a acompañarla en su desarrollo emocional.',
    rating: 5,
    highlight: 'Altas capacidades',
  },
  {
    name: 'María J.',
    role: 'Madre de Daniel (10 años)',
    content: 'El diagnóstico de TDAH fue duro al principio, pero con la ayuda de Patricia, Daniel ha aprendido estrategias que le funcionan y ha mejorado mucho en el cole y en casa.',
    rating: 5,
    highlight: 'TDAH',
  },
  {
    name: 'Patricia R.',
    role: 'Madre de Sofía (6 años)',
    content: 'Mi hija tenía muchos miedos y le costaba dormir sola. Después de unas sesiones con Patricia, Sofía está mucho más tranquila y segura de sí misma.',
    rating: 5,
    highlight: 'Miedos infantiles',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Lo que dicen las familias
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada familia es única, pero todas comparten el deseo de lo mejor para sus hijos. 
            Esto es lo que cuentan sobre su experiencia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-lg font-semibold text-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                "{testimonial.content}"
              </p>

              {/* Highlight Tag */}
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                {testimonial.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-foreground font-semibold">5.0</span>
              <span className="text-muted-foreground text-sm">valoración media</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground font-semibold">+500</span> familias atendidas
            </p>
            <div className="w-px h-6 bg-border" />
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground font-semibold">+8 años</span> de experiencia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
