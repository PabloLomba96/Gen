import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email: email.trim() });

      if (error) {
        if (error.code === '23505') {
          toast({ title: '¡Ya estás suscrita/o!', description: 'Este email ya recibe nuestras Píldoras.' });
        } else {
          throw error;
        }
      } else {
        setIsSubscribed(true);
        // Notify Patricia about new subscriber
        try {
          await supabase.functions.invoke('notify-subscriber', {
            body: { email: email.trim() },
          });
        } catch {
          // Non-blocking — subscription is already saved
        }
      }
    } catch {
      toast({ title: 'Error', description: 'No se pudo suscribir. Inténtalo de nuevo.', variant: 'destructive' });
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
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">¡Bienvenida/o!</h3>
            <p className="text-muted-foreground">Pronto recibirás tus primeras Píldoras de Bienestar 💌</p>
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
            Píldoras de Bienestar
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Herramientas prácticas sobre ansiedad infantil, regulación emocional y crianza respetuosa. 
            Directo a tu email, sin spam.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="h-12 rounded-full px-5 flex-1"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 px-6 whitespace-nowrap"
            >
              {isSubmitting ? 'Suscribiendo...' : 'Suscribirme gratis'}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Gratis. Cancelar en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;