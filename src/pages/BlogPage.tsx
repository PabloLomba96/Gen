import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Newsletter from '@/components/landing/Newsletter';

const posts = [
  {
    title: 'Qué es la batería social y por qué tu hijo la necesita',
    excerpt: 'Descubre el concepto de batería social, cómo afecta a niños introvertidos y estrategias para recargarla sin culpa.',
    category: 'Batería Social',
    readTime: '5 min',
    date: '15 Mar 2025',
  },
  {
    title: 'Ansiedad vs Introversión: cómo diferenciarlas en la infancia',
    excerpt: 'No todo niño callado tiene ansiedad. Aprende a distinguir rasgos de personalidad de señales de alerta.',
    category: 'Ansiedad',
    readTime: '7 min',
    date: '8 Mar 2025',
  },
  {
    title: 'Límites en la era digital: guía práctica para familias',
    excerpt: 'Pantallas, redes sociales y videojuegos. Pautas realistas para establecer límites sin conflicto.',
    category: 'Crianza Digital',
    readTime: '6 min',
    date: '1 Mar 2025',
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Blog</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
                Píldoras de <span className="text-gradient">bienestar</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Artículos sobre psicología infantil, crianza respetuosa y desarrollo emocional.
              </p>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              {posts.map((post, index) => (
                <article
                  key={post.title}
                  className="glass rounded-2xl p-7 hover:shadow-lg transition-all duration-300 group animate-fade-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm text-muted-foreground font-medium">
                    📌 Próximamente
                  </span>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground">
                Más artículos próximamente ✨
              </p>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;