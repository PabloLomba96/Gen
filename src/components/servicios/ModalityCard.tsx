import { LucideIcon } from 'lucide-react';

interface ModalityCardProps {
  modality: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
}

const ModalityCard = ({ modality }: ModalityCardProps) => {
  return (
    <div
      className="bg-card rounded-2xl p-8 border border-border"
      style={{ boxShadow: 'var(--shadow-soft)' }}
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        <modality.icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-display font-semibold text-foreground mb-3">{modality.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{modality.description}</p>
    </div>
  );
};

export default ModalityCard;
