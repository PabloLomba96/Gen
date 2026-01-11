import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';

const blogPosts = [
  {
    title: 'Cómo ayudar a tu hijo a gestionar la frustración',
    excerpt: 'Estrategias prácticas para acompañar a los niños cuando las cosas no salen como esperaban.',
    category: 'Emociones',
    readTime: '5 min',
    trending: true,
  },
  {
    title: 'Altas capacidades: ¿cómo identificarlas?',
    excerpt: 'Señales que pueden indicar que tu hijo tiene altas capacidades intelectuales y cómo actuar.',
    category: 'Altas Capacidades',
    readTime: '6 min',
    trending: true,
  },
  {
    title: 'TDAH en niños: más allá del "niño movido"',
    excerpt: 'Desmontando mitos sobre el TDAH y cómo apoyar realmente a los niños que lo tienen.',
    category: 'TDAH',
    readTime: '7 min',
    trending: false,
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Artículos que te ayudarán
          </h2>
          <p className="text-lg text-muted-foreground">
            Contenido gratuito basado en los temas que más os interesan de mis reels. 
            Aquí profundizo en el "por qué" detrás de cada meme.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              {/* Image Placeholder */}
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
                
                <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="px-8 h-14 border-2 hover:bg-secondary group"
          >
            Ver Todos los Artículos
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
