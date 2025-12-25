import { Brain, Mail, MapPin, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
                <Brain className="w-5 h-5 text-background" />
              </div>
              <span className="font-display font-semibold text-xl text-background">
                Patri Psicología
              </span>
            </a>
            <p className="text-background/70 max-w-md leading-relaxed">
              Patricia Martínez - Psicóloga General Sanitaria. 
              Especialista en infancia, adolescencia y adultos. 
              Consulta presencial en Valencia y online.
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
                { href: '#sobre-mi', label: 'Sobre Mí' },
                { href: '#servicios', label: 'Servicios' },
                { href: '#blog', label: 'Blog' },
                { href: '#recursos', label: 'Recursos' },
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
                <span>+34 611 889 209</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© 2024 Patricia Martínez - Patri Psicología. Todos los derechos reservados.</p>
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
