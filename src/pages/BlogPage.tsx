import { ArrowRight, Clock, Globe, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Newsletter from '@/components/landing/Newsletter';
import JsonLd from '@/components/JsonLd';
import { blogArticles } from '@/data/blogArticles';
import { blogArticlesFromServices } from '@/data/blogArticlesFromServices';
import { useLanguage } from '@/i18n/context';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const allArticles = [...blogArticlesFromServices, ...blogArticles];

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog de Gen Psicología — Psicóloga Infantil Valencia',
  description: 'Artículos sobre psicología infantil, ansiedad en niños, rabietas, TDAH, altas capacidades y crianza.',
  url: 'https://genpsicologia.com/blog',
  publisher: { '@type': 'Organization', name: 'Gen Psicología', url: 'https://genpsicologia.com' },
  blogPost: allArticles.map((a) => ({
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
  const fallback = t('blogEnFallback') as any;
  const { toast } = useToast();

  const [showArticles, setShowArticles] = useState(lang === 'es');
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    try {
      const { data, error } = await supabase.functions.invoke('newsletter-subscribe', {
        body: { email: email.trim(), idioma: 'en', origen: 'blog_en_fallback' },
      });
      if (error) throw error;
      if (data?.error === 'duplicate') {
        toast({ title: '✓', description: fallback.subscribeSuccess });
      } else if (data?.success) {
        toast({ title: '✓', description: fallback.subscribeSuccess });
      } else if (data?.error) {
        throw new Error(data.error);
      }
      setSubscribed(true);
    } catch {
      toast({ title: 'Error', description: 'Could not subscribe. Please try again.', variant: 'destructive' });
    } finally {
      setSubscribing(false);
    }
  };

  // English fallback screen
  if (lang === 'en' && !showArticles) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-lg mx-auto text-center space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">{fallback.title}</h1>
                <p className="text-muted-foreground">{fallback.subtitle}</p>

                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => setShowArticles(true)}
                >
                  {fallback.continueEs} →
                </Button>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Bell className="w-4 h-4 text-accent" />
                    <p className="text-sm font-medium text-foreground">{fallback.subscribeTitle}</p>
                  </div>
                  {subscribed ? (
                    <p className="text-sm text-primary font-medium">{fallback.subscribeSuccess}</p>
                  ) : (
                    <form onSubmit={handleNotify} className="flex gap-2 max-w-sm mx-auto">
                      <Input
                        type="email"
                        placeholder={fallback.subscribePlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1"
                      />
                      <Button type="submit" disabled={subscribing} className="shrink-0">
                        {subscribing ? fallback.subscribing : fallback.subscribeButton}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
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
