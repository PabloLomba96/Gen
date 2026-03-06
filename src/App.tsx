import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/servicios" element={<Servicios />} />
          {/* Old service slugs redirect to new ones */}
          <Route path="/servicios/terapia-infantil" element={<ServiceRedirect />} />
          <Route path="/servicios/terapia-adolescentes" element={<ServiceRedirect />} />
          <Route path="/servicios/altas-capacidades" element={<ServiceRedirect />} />
          <Route path="/servicios/tdah-tea" element={<ServiceRedirect />} />
          <Route path="/servicios/dificultades-aprendizaje" element={<ServiceRedirect />} />
          <Route path="/servicios/regulacion-emocional" element={<ServiceRedirect />} />
          <Route path="/servicios/terapia-familiar" element={<ServiceRedirect />} />
          <Route path="/servicios/creatividad-talento" element={<ServiceRedirect />} />
          <Route path="/servicios/trauma-apego" element={<ServiceRedirect />} />
          <Route path="/servicios/:slug" element={<ServicioDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/hola" element={<Hola />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
