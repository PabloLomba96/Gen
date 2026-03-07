import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, List, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import JsonLd from '@/components/JsonLd';
import { blogArticles } from '@/data/blogArticles';
import { blogArticlesFromServices } from '@/data/blogArticlesFromServices';
import { services } from '@/data/services';
import { useLanguage } from '@/i18n/context';
import { useEffect, useMemo } from 'react';

const allArticles = [...blogArticlesFromServices, ...blogArticles];

/* ── helpers ── */

/** Generate a URL-safe anchor id from a heading string */
const toAnchorId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[¿?¡!]/g, '')
    .replace(/[^a-záéíóúüñ0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/** Extract h2 headings from content blocks for the TOC */
const extractHeadings = (content: string[]) =>
  content
    .filter((b) => b.startsWith('## '))
    .map((b) => {
      const text = b.replace('## ', '');
      return { text, id: toAnchorId(text) };
    });

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lp } = useLanguage();
  const s = t('blog') as any;
  const article = allArticles.find((a) => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = article.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', article.metaDescription);
    }
  }, [article]);

  const headings = useMemo(() => (article ? extractHeadings(article.content) : []), [article]);

  // Find related service for smart CTA
  const relatedService = useMemo(() => {
    if (!article?.relatedServiceSlug) return null;
    return services.find((srv) => srv.slug === article.relatedServiceSlug) ?? null;
  }, [article]);

  if (!article) return <Navigate to={lp('/blog')} replace />;

  const otherArticles = allArticles.filter((a) => a.slug !== slug).slice(0, 3);

  /* ── JSON-LD (Article schema) ── */
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    url: `https://genpsicologia.com/blog/${article.slug}`,
    datePublished: article.date,
    dateModified: article.date,
    wordCount: article.content.join(' ').split(/\s+/).length,
    inLanguage: 'es',
    author: {
      '@type': 'Person',
      name: 'Patricia Martínez Díaz',
      jobTitle: 'Psicóloga General Sanitaria',
      url: 'https://genpsicologia.com/sobre-mi',
      sameAs: ['https://www.instagram.com/genpsicologia/'],
      description: 'Psicóloga Sanitaria colegiada CV16625 especializada en infancia, adolescencia y neurodivergencia en Valencia.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gen Psicología',
      url: 'https://genpsicologia.com',
      logo: { '@type': 'ImageObject', url: 'https://genpsicologia.com/og-image.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://genpsicologia.com/blog/${article.slug}` },
    image: 'https://genpsicologia.com/og-image.png',
  };

  /* ── Render a content block to semantic HTML ── */
  const renderContent = (block: string, idx: number) => {
    // H2
    if (block.startsWith('## ')) {
      const text = block.replace('## ', '');
      return (
        <h2 id={toAnchorId(text)} className="text-2xl font-display font-bold text-foreground mt-12 mb-4 scroll-mt-24">
          {text}
        </h2>
      );
    }
    // H3
    if (block.startsWith('### ')) {
      const text = block.replace('### ', '');
      return (
        <h3 id={toAnchorId(text)} className="text-lg font-display font-semibold text-foreground mt-8 mb-3 scroll-mt-24">
          {text}
        </h3>
      );
    }
    // Bold list item
    if (block.startsWith('- **')) {
      const match = block.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
      if (match)
        return (
          <li className="flex items-start gap-2 ml-4">
            <span className="text-accent mt-1.5 shrink-0">•</span>
            <span className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{match[1]}</strong>
              {match[2] ? `: ${match[2]}` : ''}
            </span>
          </li>
        );
    }
    // Plain list item
    if (block.startsWith('- '))
      return (
        <li className="flex items-start gap-2 ml-4">
          <span className="text-accent mt-1.5 shrink-0">•</span>
          <span className="text-muted-foreground leading-relaxed">{block.replace('- ', '')}</span>
        </li>
      );
    // Paragraph with inline bold
    const parts = block.split(/(\*\*.*?\*\*)/g);
    return (
      <p className="text-muted-foreground leading-relaxed">
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**'))
            return (
              <strong key={i} className="text-foreground">
                {part.slice(2, -2)}
              </strong>
            );
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
        {/* ── Breadcrumbs + Meta ── */}
        <section className="py-12 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center gap-2 mb-6 flex-wrap text-sm">
              <Link to={lp('/')} className="text-muted-foreground hover:text-primary transition-colors">
                {t('common.breadcrumbHome')}
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link to={lp('/blog')} className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground line-clamp-1">{article.title}</span>
            </nav>

            <div className="max-w-3xl">
              {/* Category · Read time · Date */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{article.category}</span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>
                <time dateTime={article.date} className="text-xs text-muted-foreground">
                  {article.date}
                </time>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto">
              {/* ── Author box (top, E-E-A-T) ── */}
              <div className="flex items-center gap-4 mb-10 p-4 rounded-xl bg-secondary/40 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">Patricia Martínez Díaz</p>
                  <p className="text-xs text-muted-foreground">
                    {s.authorCredentials ?? 'Psicóloga General Sanitaria · Colegiada CV16625 · Especialista en infancia, adolescencia y neurodivergencia'}
                  </p>
                </div>
              </div>

              {/* ── Table of Contents ── */}
              {headings.length > 2 && (
                <nav aria-label="Índice del artículo" className="mb-10 p-5 rounded-xl bg-card border border-border" style={{ boxShadow: 'var(--shadow-soft)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <List className="w-4 h-4 text-primary" />
                    <h2 className="text-sm font-display font-semibold text-foreground">{s.tocTitle ?? 'Índice'}</h2>
                  </div>
                  <ol className="space-y-1.5 list-decimal list-inside">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* ── Content blocks ── */}
              <div className="space-y-4">
                {article.content.map((block, i) => (
                  <div key={i}>{renderContent(block, i)}</div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* ── Smart CTA → related service ── */}
        <section className="py-12 bg-accent/5">
          <div className="container mx-auto px-4">
            <div
              className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-border text-center"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {s.articleCtaTitle}
              </h3>
              <p className="text-muted-foreground mb-6">{s.articleCtaText}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {relatedService && (
                  <Button asChild size="lg" className="h-12 px-8">
                    <Link to={lp(`/servicios/${relatedService.slug}`)}>
                      {s.articleCtaServiceButton ?? 'Ver servicio relacionado'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
                <Button asChild size="lg" variant={relatedService ? 'outline' : 'default'} className="h-12 px-8">
                  <Link to={lp('/contacto')}>
                    {s.articleCtaButton}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Author box (bottom, detailed E-E-A-T) ── */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-secondary/30 rounded-2xl p-6 sm:p-8 border border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {s.authorTitle ?? 'Sobre la autora'}
              </h3>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-lg mb-1">Patricia Martínez Díaz</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {s.authorBio ?? 'Psicóloga General Sanitaria colegiada CV16625. Especializada en psicología infantojuvenil, neurodivergencia (AACC, TDAH, TEA), regulación emocional y creatividad. Consulta presencial en Valencia y online.'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link to={lp('/sobre-mi')} className="text-sm text-primary font-medium hover:underline">
                      {s.authorReadMore ?? 'Más sobre Patricia →'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related articles ── */}
        {otherArticles.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">{s.relatedTitle}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    to={lp(`/blog/${a.slug}`)}
                    className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all hover:shadow-lg block"
                    style={{ boxShadow: 'var(--shadow-soft)' }}
                  >
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{a.category}</span>
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
