import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/i18n/context';

const Newsletter = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [idioma, setIdioma] = useState<'es' | 'en'>('es');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('newsletter-subscribe', {
        body: { email: email.trim(), idioma },
      });

      if (error) throw error;

      if (data?.error === 'duplicate') {
        toast({ title: t('newsletter.duplicateTitle'), description: t('newsletter.duplicateText') });
      } else if (data?.success) {
        setIsSubscribed(true);
      } else if (data?.error) {
        toast({ title: t('newsletter.errorTitle'), description: data.error, variant: 'destructive' });
      }
    } catch {
      toast({ title: t('newsletter.errorTitle'), description: t('newsletter.errorText'), variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center glass rounded-3xl p-10">
            <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">{t('newsletter.successTitle')}</h3>
            <p className="text-muted-foreground">{t('newsletter.successText')}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center glass rounded-3xl p-10">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Sparkles className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">
            {t('newsletter.title')}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm leading-relaxed">
            {t('newsletter.subtitle')}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                className="h-12 rounded-full px-5 flex-1"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 px-6 whitespace-nowrap"
              >
                {isSubmitting ? t('newsletter.submitting') : t('newsletter.submit')}
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>{t('newsletter.langLabel')}</span>
              <button
                type="button"
                onClick={() => setIdioma('es')}
                className={`px-3 py-1 rounded-full transition-colors ${idioma === 'es' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
              >
                {t('newsletter.langEs')}
              </button>
              <button
                type="button"
                onClick={() => setIdioma('en')}
                className={`px-3 py-1 rounded-full transition-colors ${idioma === 'en' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
              >
                {t('newsletter.langEn')}
              </button>
            </div>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            {t('newsletter.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
