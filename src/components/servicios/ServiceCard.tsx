import { CheckCircle } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string[];
    color: 'primary' | 'accent';
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div
      className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
      style={{ boxShadow: 'var(--shadow-soft)' }}
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
          service.color === 'primary'
            ? 'bg-primary/10 text-primary'
            : 'bg-accent/10 text-accent'
        }`}
      >
        <service.icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-display font-semibold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.details.map((detail) => (
          <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-accent shrink-0" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
