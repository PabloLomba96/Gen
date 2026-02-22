import { Mail, MapPin, Instagram, Phone } from 'lucide-react';
import logoPatricia from '@/assets/logo-patricia.jpg';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="flex items-center gap-3">
              <img 
                src={logoPatricia} 
                alt="Patricia Martínez Psicología" 
                className="h-16 w-auto object-contain bg-background rounded-lg p-1"
              />
            </a>
            <p className="text-background/70 max-w-md leading-relaxed">
              Patricia Martínez Díaz - Psicóloga Infantil y de Adolescentes. 
              Especialista en altas capacidades, TDAH, TEA y desarrollo emocional. 
              Colaboro con Divergentes y Pausa Salud. Atención particular en Valencia y online.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://instagram.com/patri_psicologia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:patri.psicologia29@gmail.com"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Navegación</h4>
            <ul className="space-y-3">
              {[
                { href: '/sobre-mi', label: 'Sobre Mí' },
                { href: '/servicios', label: 'Servicios' },
                { href: '/contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:patri.psicologia29@gmail.com" className="hover:text-background transition-colors">
                  patri.psicologia29@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Valencia, España</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+34611889209" className="hover:text-background transition-colors">+34 611 889 209</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© 2024 Patricia Martínez Díaz - Psicología Infantil. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-background transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-background transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
