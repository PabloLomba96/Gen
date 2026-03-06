import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: '¿Cómo sé si mi hijo necesita un psicólogo?',
    answer: 'Si notas cambios bruscos de comportamiento, rabietas muy intensas, miedos que le impiden hacer vida normal, problemas de sueño, dificultades en el colegio o tristeza persistente, es buen momento para consultar. No hace falta que sea "algo grave" — a veces, una orientación a tiempo marca la diferencia.',
  },
  {
    question: '¿A partir de qué edad se puede llevar a un niño al psicólogo?',
    answer: 'A partir de los 3 años ya se pueden realizar intervenciones adaptadas a su edad a través del juego terapéutico. Cuanto antes se detecte una dificultad, más fácil es trabajarla. También ofrezco orientación a padres de niños más pequeños.',
  },
  {
    question: '¿Mi hijo tiene ansiedad? ¿Cuáles son las señales?',
    answer: 'Algunos signos de ansiedad infantil son: preocupación excesiva, miedos desproporcionados, dolor de barriga o cabeza sin causa médica, dificultad para dormir, negarse a ir al colegio, irritabilidad o llanto frecuente. Si reconoces varias de estas señales, podemos hablar sin compromiso.',
  },
  {
    question: '¿Cuánto dura una sesión y cuántas se necesitan?',
    answer: 'Las sesiones duran 45-50 minutos. El número de sesiones depende de cada caso — tras la evaluación inicial os daré una orientación del tiempo estimado. Siempre respetamos el ritmo de cada niño.',
  },
  {
    question: '¿Se puede hacer terapia infantil online?',
    answer: 'Sí, ofrezco sesiones online igual de efectivas y con mayor flexibilidad horaria. Es una buena opción para familias que no pueden desplazarse a Valencia o prefieren la comodidad de casa.',
  },
  {
    question: '¿Los padres participan en las sesiones?',
    answer: 'Depende del caso y la edad. Generalmente las sesiones son individuales con el niño/a, pero mantengo comunicación regular con los padres para compartir avances, dar pautas y asegurar que el trabajo terapéutico se refuerce en casa.',
  },
  {
    question: '¿Cómo funciona la primera consulta?',
    answer: 'La primera consulta es para conocernos: me cuentas qué os preocupa, evalúo la situación y os explico cómo puedo ayudaros. Es sin compromiso y con total confidencialidad. Podéis venir los padres solos o con el niño/a.',
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Preguntas Frecuentes</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Lo que más nos preguntan los padres
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
