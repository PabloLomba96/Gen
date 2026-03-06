import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Clock, TrendingUp, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Cómo ayudar a tu hijo a gestionar la frustración',
    excerpt: 'Estrategias prácticas para acompañar a los niños cuando las cosas no salen como esperaban. Descubre técnicas basadas en evidencia para el desarrollo emocional.',
    category: 'Emociones',
    readTime: '5 min',
    trending: true,
    date: '10 Enero 2026',
  },
  {
    id: 2,
    title: 'Altas capacidades: ¿cómo identificarlas?',
    excerpt: 'Señales que pueden indicar que tu hijo tiene altas capacidades intelectuales y cómo actuar. Guía completa para padres y educadores.',
    category: 'Altas Capacidades',
    readTime: '6 min',
    trending: true,
    date: '8 Enero 2026',
  },
  {
    id: 3,
    title: 'TDAH en niños: más allá del "niño movido"',
    excerpt: 'Desmontando mitos sobre el TDAH y cómo apoyar realmente a los niños que lo tienen. Estrategias para casa y escuela.',
    category: 'TDAH',
    readTime: '7 min',
    trending: false,
    date: '5 Enero 2026',
  },
  {
    id: 4,
    title: 'La importancia del juego en el desarrollo infantil',
    excerpt: 'El juego no es solo diversión: es la herramienta más poderosa para el aprendizaje y desarrollo emocional de los niños.',
    category: 'Desarrollo',
    readTime: '4 min',
    trending: false,
    date: '2 Enero 2026',
  },
  {
    id: 5,
    title: 'Cómo preparar a tu hijo para la vuelta al cole',
    excerpt: 'Consejos prácticos para una transición suave de las vacaciones al curso escolar. Reduce la ansiedad y fomenta la autonomía.',
    category: 'Educación',
    readTime: '5 min',
    trending: false,
    date: '28 Diciembre 2025',
  },
  {
    id: 6,
    title: 'Señales de ansiedad infantil que no debes ignorar',
    excerpt: 'Aprende a identificar los síntomas de ansiedad en niños y cuándo es momento de buscar ayuda profesional.',
    category: 'Emociones',
    readTime: '6 min',
    trending: true,
    date: '25 Diciembre 2025',
  },
];

const categories = ['Todos', 'Emociones', 'Altas Capacidades', 'TDAH', 'Desarrollo', 'Educación'];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-foreground">Blog</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Blog de Psicología Infantil
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Artículos y recursos basados en evidencia para ayudarte a entender y acompañar
                el desarrollo emocional de tus hijos. Contenido práctico para el día a día.
              </p>

              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar artículos..."
                  className="pl-10 h-12 bg-card border-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? 'default' : 'outline'}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
                  style={{ boxShadow: 'var(--shadow-soft)' }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-50">🧠</span>
                    </div>
                    {post.trending && (
                      <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground">{post.date}</p>

                    <h2 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                    >
                      Leer artículo
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="px-8 h-14 border-2 hover:bg-secondary group"
              >
                Cargar Más Artículos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
              ¿Necesitas ayuda profesional?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Si tienes dudas sobre el desarrollo emocional de tu hijo, no dudes en contactarme.
              La primera consulta es para conocernos y entender cómo puedo ayudaros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8">
                <Link to="/contacto">
                  Reservar Primera Consulta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8">
                <Link to="/servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
