import { Mail, MapPin, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoPatricia from '@/assets/logo-patricia.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={logoPatricia}
                alt="Gen Psicología"
                className="h-14 w-auto object-contain bg-background/90 rounded-xl p-1.5"
              />
            </Link>
            <p className="text-background/55 max-w-sm leading-relaxed text-sm">
              Gen Centro de Psicología — Psicología Infantojuvenil fundada por Patricia Martínez Díaz. 
              Entendimiento, escucha activa y ayuda.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com/genpsicologia"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors text-xs"
                aria-label="Instagram Gen Psicología"
              >
                <Instagram className="w-4 h-4" />
                <span className="opacity-80 group-hover:opacity-100">Gen Psicología</span>
              </a>
              <a
                href="https://instagram.com/patri_psicologia"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors text-xs"
                aria-label="Instagram Patri Psicología"
              >
                <Instagram className="w-4 h-4" />
                <span className="opacity-80 group-hover:opacity-100">Patri Psicología</span>
              </a>
              <a
                href="mailto:patricia@genpsicologia.com"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/sobre-mi', label: 'Sobre Mí' },
                { href: '/servicios', label: 'Servicios' },
                { href: '/tienda', label: 'Recursos' },
                { href: '/blog', label: 'Blog' },
                { href: '/contacto', label: 'Contacto' },
                { href: '/hola', label: 'Link in Bio' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-background/55 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/55">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <a href="mailto:patricia@genpsicologia.com" className="hover:text-background transition-colors">
                  patricia@genpsicologia.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/55">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Valencia, España</span>
              </li>
              <li className="flex items-center gap-2 text-background/55">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <a href="tel:+34611889209" className="hover:text-background transition-colors">+34 611 889 209</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-background/35">
          <p>© {new Date().getFullYear()} Gen Psicología — Patricia Martínez Díaz · Colegiada CV16625</p>
          <div className="flex items-center gap-5">
            <span className="text-background/25 cursor-default">Privacidad — Próximamente</span>
            <span className="text-background/25 cursor-default">Aviso Legal — Próximamente</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
