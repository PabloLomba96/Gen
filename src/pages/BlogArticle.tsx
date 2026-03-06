import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import JsonLd from '@/components/JsonLd';
import { blogArticles } from '@/data/blogArticles';
import { useEffect } from 'react';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = article.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', article.metaDescription);
    }
  }, [article]);

  if (!article) return <Navigate to="/blog" replace />;

  const otherArticles = blogArticles.filter((a) => a.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    url: `https://genpsicologia.com/blog/${article.slug}`,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: 'Patricia Martínez Díaz',
      jobTitle: 'Psicóloga Sanitaria',
      url: 'https://genpsicologia.com/sobre-mi',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gen Psicología',
      url: 'https://genpsicologia.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://genpsicologia.com/blog/${article.slug}`,
    },
  };

  const renderContent = (block: string) => {
    if (block.startsWith('### ')) {
      return <h3 className="text-lg font-display font-semibold text-foreground mt-8 mb-3">{block.replace('### ', '')}</h3>;
    }
    if (block.startsWith('## ')) {
      return <h2 className="text-2xl font-display font-bold text-foreground mt-10 mb-4">{block.replace('## ', '')}</h2>;
    }
    if (block.startsWith('- **')) {
      const match = block.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
      if (match) {
        return (
          <li className="flex items-start gap-2 ml-4">
            <span className="text-accent mt-1.5 shrink-0">•</span>
            <span className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{match[1]}</strong>{match[2] ? `: ${match[2]}` : ''}
            </span>
          </li>
        );
      }
    }
    if (block.startsWith('- ')) {
      return (
        <li className="flex items-start gap-2 ml-4">
          <span className="text-accent mt-1.5 shrink-0">•</span>
          <span className="text-muted-foreground leading-relaxed">{block.replace('- ', '')}</span>
        </li>
      );
    }
    // Process inline bold
    const parts = block.split(/(\*\*.*?\*\*)/g);
    return (
      <p className="text-muted-foreground leading-relaxed">
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="text-foreground">{part.slice(2, -2)}</strong>;
          }
          return <span key={i}>{part}</span>;
        })}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={articleJsonLd} />
      <Header />
      <main className="pt-20">
        {/* Breadcrumb + Hero */}
        <section className="py-12 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 flex-wrap text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground line-clamp-1">{article.title}</span>
            </div>

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto space-y-4">
              {article.content.map((block, i) => (
                <div key={i}>{renderContent(block)}</div>
              ))}
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-border text-center" style={{ boxShadow: 'var(--shadow-soft)' }}>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                ¿Necesitas ayuda profesional?
              </h3>
              <p className="text-muted-foreground mb-6">
                Si te has sentido identificado/a con lo que has leído, puedo ayudarte. La primera consulta es para conocernos, sin compromiso.
              </p>
              <Button asChild size="lg" className="h-12 px-8">
                <Link to="/contacto">
                  Contactar con Gen Psicología
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related articles */}
        {otherArticles.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
                Otros artículos que te pueden interesar
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/blog/${a.slug}`}
                    className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all hover:shadow-lg block"
                    style={{ boxShadow: 'var(--shadow-soft)' }}
                  >
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {a.category}
                    </span>
                    <h3 className="text-base font-display font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
