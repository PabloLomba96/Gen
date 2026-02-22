import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  nombre: z.string().trim().min(2, { message: "El nombre debe tener al menos 2 caracteres" }).max(100),
  email: z.string().trim().email({ message: "Por favor, introduce un email válido" }).max(255),
  telefono: z.string().trim().optional(),
  motivo: z.string().trim().min(1, { message: "Por favor, selecciona un motivo" }),
  mensaje: z.string().trim().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }).max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const motivos = [
  'Primera consulta',
  'Información sobre tarifas',
  'Consulta sobre servicios',
  'Terapia online',
  'Otro',
];

const Contact = () => {
  const { toast } = useToast();
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
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
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderemos lo antes posible. Gracias por contactar.",
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
              ¡Gracias por tu mensaje!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              He recibido tu consulta y me pondré en contacto contigo lo antes posible, 
              normalmente en un plazo de 24-48 horas.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ nombre: '', email: '', telefono: '', motivo: '', mensaje: '' });
              }}
              variant="outline"
              className="border-2"
            >
              Enviar otro mensaje
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            ¿Hablamos?
          </h2>
          <p className="text-lg text-muted-foreground">
            Si tienes dudas o quieres concertar una primera cita, 
            rellena el formulario y te responderé lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Consulta Presencial</p>
                    <p className="text-muted-foreground text-sm">Valencia, España</p>
                    <p className="text-muted-foreground text-sm">También disponible online</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:info@patripsicologa.es" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      info@patripsicologa.es
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Horario de atención</p>
                    <p className="text-muted-foreground text-sm">Lunes a Viernes</p>
                    <p className="text-muted-foreground text-sm">9:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <p className="font-medium text-foreground mb-2">¿Prefieres contactar por teléfono?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Puedes contactarme a través de Instagram para consultas rápidas.
              </p>
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

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                    Nombre completo *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={errors.nombre ? 'border-destructive' : ''}
                  />
                  {errors.nombre && (
                    <p className="text-xs text-destructive">{errors.nombre}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium text-foreground">
                    Teléfono (opcional)
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="motivo" className="text-sm font-medium text-foreground">
                    Motivo de consulta *
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
                    <option value="">Selecciona un motivo</option>
                    {motivos.map(motivo => (
                      <option key={motivo} value={motivo}>{motivo}</option>
                    ))}
                  </select>
                  {errors.motivo && (
                    <p className="text-xs text-destructive">{errors.motivo}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                  Tu mensaje *
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntame brevemente tu situación o qué tipo de ayuda necesitas..."
                  rows={5}
                  className={errors.mensaje ? 'border-destructive' : ''}
                />
                {errors.mensaje && (
                  <p className="text-xs text-destructive">{errors.mensaje}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  Tus datos serán tratados de forma confidencial.
                </p>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
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
