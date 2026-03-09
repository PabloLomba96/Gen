import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/context';
import { type LucideIcon } from 'lucide-react';
import { pushToDataLayer } from '@/hooks/useGTM';

interface ProductCardProps {
  icon: LucideIcon;
  type: string;
  title: string;
  description: string;
  price: string;
  popular?: boolean;
  externalUrl?: string;
}

const ProductCard = ({ icon: Icon, type, title, description, price, popular, externalUrl }: ProductCardProps) => {
  const { lang } = useLanguage();
  const buyLabel = lang === 'es' ? 'Comprar' : 'Buy Now';
  const soonLabel = lang === 'es' ? 'Próximamente' : 'Coming Soon';
  const popularLabel = lang === 'es' ? 'Popular' : 'Popular';

  return (
    <div className="relative glass rounded-2xl p-7 hover:shadow-lg transition-all duration-300 flex flex-col">
      {popular && (
        <div className="absolute -top-3 right-5 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
          <Star className="w-3 h-3 fill-current" />
          {popularLabel}
        </div>
      )}
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <span className="text-xs text-muted-foreground uppercase tracking-wider">{type}</span>
      <h3 className="text-lg font-display font-semibold text-foreground mt-1 mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
      <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
        <span className="text-2xl font-bold text-primary">{price}</span>
        {externalUrl ? (
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
            <a href={externalUrl} target="_blank" rel="noopener noreferrer" onClick={() => pushToDataLayer('click_external_product', { product_name: title, external_url: externalUrl })}>
              {buyLabel}
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        ) : (
          <Button disabled className="rounded-full px-5 opacity-70">
            {soonLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
