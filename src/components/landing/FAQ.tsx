import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuánto dura una sesión de terapia?',
    answer: 'Las sesiones con niños suelen durar 45-50 minutos. En el caso de las primeras consultas o evaluaciones, pueden extenderse un poco más. También incluyo breves momentos de feedback con los padres cuando es necesario.',
  },
  {
    question: '¿Cómo sé si mi hijo necesita un psicólogo?',
    answer: 'Algunas señales pueden ser: cambios bruscos de comportamiento, dificultades para gestionar emociones, problemas de sueño o alimentación, miedos intensos, dificultades en el colegio o en las relaciones sociales. Si tienes dudas, podemos hablar en una primera consulta sin compromiso.',
  },
  {
    question: '¿Trabajas también con adolescentes?',
    answer: 'Sí, trabajo tanto con niños como con adolescentes. La adolescencia es una etapa de muchos cambios y es importante tener un espacio seguro donde expresarse y desarrollar herramientas para gestionar esta etapa.',
  },
  {
    question: '¿Ofrecéis terapia online?',
    answer: 'Sí, ofrezco sesiones de terapia online para familias que no puedan desplazarse a Valencia o prefieran esta modalidad. Las sesiones online son igual de efectivas y permiten mayor flexibilidad horaria.',
  },
  {
    question: '¿Los padres participan en las sesiones?',
    answer: 'Depende del caso y la edad del niño. Generalmente, las sesiones son individuales con el niño, pero mantengo comunicación regular con los padres para compartir avances y dar pautas. En algunos casos, realizo sesiones conjuntas.',
  },
  {
    question: '¿Cuántas sesiones se necesitan?',
    answer: 'Cada caso es único. Algunos problemas se resuelven en pocas sesiones, mientras que otros requieren un proceso más largo. Tras la evaluación inicial, os daré una orientación del tiempo estimado, aunque siempre trabajo respetando el ritmo de cada niño.',
  },
];

const FAQ = () => {
  return (
    <section id="preguntas" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            ¿Tienes dudas?
          </h2>
          <p className="text-lg text-muted-foreground">
            Aquí encontrarás respuestas a las preguntas más comunes. 
            Si no encuentras lo que buscas, no dudes en contactarme.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-display font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-14 pr-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras tu pregunta?
          </p>
          <a 
            href="#contacto"
            className="inline-flex items-center text-primary font-medium hover:underline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contacta conmigo directamente
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
