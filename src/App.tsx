import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/context";
import ScrollToTop from "./components/ScrollToTop";
import MobileBookingCta from "./components/MobileBookingCta";
import HrefLang from "./components/HrefLang";
import Index from "./pages/Index";
import SobreMi from "./pages/SobreMi";
import Servicios from "./pages/Servicios";
import ServicioDetalle from "./pages/ServicioDetalle";
import Contacto from "./pages/Contacto";
import Hola from "./pages/Hola";
import Tienda from "./pages/Tienda";
import BlogPage from "./pages/BlogPage";
import BlogArticle from "./pages/BlogArticle";
import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import ServiceRedirect from "./components/ServiceRedirect";

const queryClient = new QueryClient();

const LocalizedRoutes = () => (
  <Routes>
    {/* Spanish routes (default) */}
    <Route path="/" element={<Index />} />
    <Route path="/sobre-mi" element={<SobreMi />} />
    <Route path="/servicios" element={<Servicios />} />
    {/* Old service slugs redirect to new ones */}
    <Route path="/servicios/terapia-infantil" element={<ServiceRedirect />} />
    <Route path="/servicios/psicologia-infantil-valencia" element={<ServiceRedirect />} />
    <Route path="/servicios/terapia-adolescentes" element={<ServiceRedirect />} />
    <Route path="/servicios/psicologo-adolescentes-valencia" element={<ServiceRedirect />} />
    <Route path="/servicios/altas-capacidades" element={<ServiceRedirect />} />
    <Route path="/servicios/altas-capacidades-valencia" element={<ServiceRedirect />} />
    <Route path="/servicios/tdah-tea" element={<ServiceRedirect />} />
    <Route path="/servicios/tdah-tea-valencia" element={<ServiceRedirect />} />
    <Route path="/servicios/dificultades-aprendizaje-valencia" element={<ServiceRedirect />} />
    <Route path="/servicios/regulacion-emocional" element={<ServiceRedirect />} />
    <Route path="/servicios/terapia-rabietas-regulacion-emocional-ninos" element={<ServiceRedirect />} />
    <Route path="/servicios/terapia-familiar-valencia" element={<ServiceRedirect />} />
    <Route path="/servicios/creatividad-talento" element={<ServiceRedirect />} />
    <Route path="/servicios/creatividad-talento-ninos-valencia" element={<ServiceRedirect />} />
    <Route path="/servicios/trauma-apego" element={<ServiceRedirect />} />
    <Route path="/servicios/trauma-infantil-apego-valencia" element={<ServiceRedirect />} />
    <Route path="/servicios/:slug" element={<ServicioDetalle />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/hola" element={<Hola />} />
    <Route path="/tienda" element={<Tienda />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/blog/:slug" element={<BlogArticle />} />
    <Route path="/aviso-legal" element={<AvisoLegal />} />
    <Route path="/privacidad" element={<Privacidad />} />
    <Route path="/cookies" element={<Cookies />} />

    {/* English routes */}
    <Route path="/en" element={<Index />} />
    <Route path="/en/about" element={<SobreMi />} />
    <Route path="/en/services" element={<Servicios />} />
    <Route path="/en/services/:slug" element={<ServicioDetalle />} />
    <Route path="/en/contact" element={<Contacto />} />
    <Route path="/en/hello" element={<Hola />} />
    <Route path="/en/shop" element={<Tienda />} />
    <Route path="/en/blog" element={<BlogPage />} />
    <Route path="/en/blog/:slug" element={<BlogArticle />} />
    <Route path="/en/legal" element={<AvisoLegal />} />
    <Route path="/en/privacy" element={<Privacidad />} />
    <Route path="/en/cookies" element={<Cookies />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <ScrollToTop />
            <HrefLang />
            <MobileBookingCta />
            <LocalizedRoutes />
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
