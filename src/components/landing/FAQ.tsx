import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/context';

const FAQ = () => {
  const { t, lp } = useLanguage();
  const items = t('faq.items') as Array<{ question: string; answer: string }>;

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t('faq.label')}</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            {t('faq.title')}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((faq, index) => (
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
            {t('faq.moreQuestions')}{' '}
            <Link to={lp('/contacto')} className="text-primary font-medium hover:underline">
              {t('faq.contactLink')}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
