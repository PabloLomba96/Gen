import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Newsletter from '@/components/landing/Newsletter';
import JsonLd from '@/components/JsonLd';
import SEO from '@/components/SEO';
import { blogArticles } from '@/data/blogArticles';
import { blogArticlesFromServices } from '@/data/blogArticlesFromServices';
import { blogArticlesEn } from '@/data/blogArticles-en';
import { blogArticlesFromServicesEn } from '@/data/blogArticlesFromServices-en';
import { useLanguage } from '@/i18n/context';

const allArticlesEs = [...blogArticlesFromServices, ...blogArticles];
const allArticlesEn = [...blogArticlesFromServicesEn, ...blogArticlesEn];

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog de Gen Psicología — Psicóloga Infantil Valencia',
  description: 'Artículos sobre psicología infantil, ansiedad en niños, rabietas, TDAH, altas capacidades y crianza.',
  url: 'https://genpsicologia.com/blog',
  publisher: { '@type': 'Organization', name: 'Gen Psicología', url: 'https://genpsicologia.com' },
  blogPost: allArticlesEs.map((a) => ({
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.excerpt,
    url: `https://genpsicologia.com/blog/${a.slug}`,
    datePublished: a.date,
    author: { '@type': 'Person', name: 'Patricia Martínez Díaz' },
  })),
};

const BlogPage = () => {
  const { t, lp, lang } = useLanguage();
  const s = t('blog') as any;

  const allArticles = lang === 'en' ? allArticlesEn : allArticlesEs;

  const canonical = `https://genpsicologia.com${lp('/blog')}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={lang === 'en' ? 'Blog — Child & Adult Psychology Articles' : 'Blog — Artículos de Psicología Infantil y Adultos'}
        description={lang === 'en' ? 'Articles on child psychology, anxiety, ADHD, giftedness and parenting by Patricia Martínez Díaz.' : 'Artículos sobre psicología infantil, ansiedad, TDAH, altas capacidades y crianza por Patricia Martínez Díaz.'}
        lang={lang}
        canonical={canonical}
      />
      <JsonLd data={blogJsonLd} />
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">{s.label}</span>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
                {s.title} <span className="text-gradient">{s.titleHighlight}</span>
              </h1>
              <p className="text-lg text-muted-foreground">{s.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              {allArticles.map((article, index) => (
                <Link
                  key={article.slug}
                  to={lp(`/blog/${article.slug}`)}
                  className="glass rounded-2xl p-7 hover:shadow-lg transition-all duration-300 group animate-fade-up block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{article.category}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h2 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{article.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>
                  <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    {s.readArticle}
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
