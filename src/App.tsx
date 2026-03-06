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
import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

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
          <Route path="/servicios/:slug" element={<ServicioDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/hola" element={<Hola />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/blog" element={<BlogPage />} />
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
