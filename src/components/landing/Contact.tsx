import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import { useLanguage } from '@/i18n/context';

type ContactForm = {
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  mensaje: string;
};

const Contact = () => {
  const { toast } = useToast();
  const { t, lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [formData, setFormData] = useState<ContactForm>({
    nombre: '',
    email: '',
    telefono: '',
    motivo: '',
    mensaje: '',
  });

  const motivos = t('contact.formReasons') as string[];

  const contactSchema = z.object({
    nombre: z.string().trim().min(2, { message: t('contact.validation.nameMin') as string }).max(100),
    email: z.string().trim().email({ message: t('contact.validation.emailInvalid') as string }).max(255),
    telefono: z.string().trim().optional(),
    motivo: z.string().trim().min(1, { message: t('contact.validation.reasonRequired') as string }),
    mensaje: z.string().trim().min(10, { message: t('contact.validation.messageMin') as string }).max(1000),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validated = contactSchema.parse(formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact', {
        body: validated,
      });

      if (error) throw error;
      
      setIsSubmitted(true);
      toast({
        title: t('contact.toastSuccessTitle') as string,
        description: t('contact.toastSuccessText') as string,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactForm, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactForm] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              {t('contact.successTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('contact.successText')}
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ nombre: '', email: '', telefono: '', motivo: '', mensaje: '' });
              }}
              variant="outline"
              className="border-2"
            >
              {t('contact.successCta')}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {t('contact.label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                {t('contact.infoTitle')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t('contact.inPersonLabel')}</p>
                    <p className="text-muted-foreground text-sm">{t('contact.location')}</p>
                    <p className="text-muted-foreground text-sm">{t('contact.alsoOnline')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t('contact.emailLabel')}</p>
                    <a href="mailto:patricia@genpsicologia.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      patricia@genpsicologia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t('contact.hoursLabel')}</p>
                    <p className="text-muted-foreground text-sm">{t('contact.hoursWeekdays')}</p>
                    <p className="text-muted-foreground text-sm">{t('contact.hoursRange')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <p className="font-medium text-foreground mb-2">{t('contact.directTitle')}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {t('contact.directSubtitle')}
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://wa.me/34611889209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  +34 611 889 209
                </a>
                <a 
                  href="https://instagram.com/genpsicologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  @genpsicologia
                </a>
                <a 
                  href="https://instagram.com/patri_psicologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  @patri_psicologia
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                    {t('contact.formNameLabel')}
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder={t('contact.formNamePlaceholder') as string}
                    className={errors.nombre ? 'border-destructive' : ''}
                  />
                  {errors.nombre && <p className="text-xs text-destructive">{errors.nombre}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    {t('contact.formEmailLabel')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.formEmailPlaceholder') as string}
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium text-foreground">
                    {t('contact.formPhoneLabel')}
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder={t('contact.formPhonePlaceholder') as string}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="motivo" className="text-sm font-medium text-foreground">
                    {t('contact.formReasonLabel')}
                  </label>
                  <select
                    id="motivo"
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      errors.motivo ? 'border-destructive' : 'border-input'
                    }`}
                  >
                    <option value="">{t('contact.formReasonPlaceholder')}</option>
                    {motivos.map(motivo => (
                      <option key={motivo} value={motivo}>{motivo}</option>
                    ))}
                  </select>
                  {errors.motivo && <p className="text-xs text-destructive">{errors.motivo}</p>}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                  {t('contact.formMessageLabel')}
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder={t('contact.formMessagePlaceholder') as string}
                  rows={5}
                  className={errors.mensaje ? 'border-destructive' : ''}
                />
                {errors.mensaje && <p className="text-xs text-destructive">{errors.mensaje}</p>}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {t('contact.formDisclaimer')}
                </p>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12"
                >
                  {isSubmitting ? t('contact.formSubmitting') : t('contact.formSubmit')}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
