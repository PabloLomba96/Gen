import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: '¿Cuánto dura una sesión de terapia?',
    answer: 'Las sesiones con niños duran 45-50 minutos. Las primeras consultas pueden extenderse un poco más. Incluyo breves momentos de feedback con los padres cuando es necesario.',
  },
  {
    question: '¿Cómo sé si mi hijo necesita un psicólogo?',
    answer: 'Cambios bruscos de comportamiento, dificultades para gestionar emociones, problemas de sueño, miedos intensos o dificultades en el colegio son señales. Si tienes dudas, podemos hablar sin compromiso.',
  },
  {
    question: '¿Ofrecéis terapia online?',
    answer: 'Sí, ofrezco sesiones online igual de efectivas y con mayor flexibilidad horaria para familias que no puedan desplazarse a Valencia.',
  },
  {
    question: '¿Los padres participan en las sesiones?',
    answer: 'Depende del caso y la edad. Generalmente las sesiones son individuales, pero mantengo comunicación regular con los padres para compartir avances y dar pautas.',
  },
  {
    question: '¿Cuántas sesiones se necesitan?',
    answer: 'Cada caso es único. Tras la evaluación inicial os daré una orientación del tiempo estimado, siempre respetando el ritmo de cada niño.',
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl px-6 data-[state=open]:shadow-md transition-all border-0"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="font-display font-semibold text-foreground text-[15px]">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            ¿Más preguntas?{' '}
            <Link to="/contacto" className="text-primary font-medium hover:underline">
              Escríbeme directamente
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;