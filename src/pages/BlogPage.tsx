import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Newsletter from '@/components/landing/Newsletter';
import JsonLd from '@/components/JsonLd';
import { blogArticles } from '@/data/blogArticles';

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog de Gen Psicología — Psicóloga Infantil Valencia',
  description: 'Artículos sobre psicología infantil, ansiedad en niños, rabietas, TDAH, altas capacidades y crianza. Contenido basado en evidencia.',
  url: 'https://genpsicologia.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Gen Psicología',
    url: 'https://genpsicologia.com',
  },
  blogPost: blogArticles.map((a) => ({
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.excerpt,
    url: `https://genpsicologia.com/blog/${a.slug}`,
    datePublished: a.date,
    author: {
      '@type': 'Person',
      name: 'Patricia Martínez Díaz',
    },
  })),
};

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={blogJsonLd} />
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Blog</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
                Psicología infantil para <span className="text-gradient">padres</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Artículos prácticos sobre ansiedad infantil, rabietas, TDAH, altas capacidades y crianza. Basados en evidencia y escritos para ti.
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              {blogArticles.map((article, index) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="glass rounded-2xl p-7 hover:shadow-lg transition-all duration-300 group animate-fade-up block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h2 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Leer artículo
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
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
