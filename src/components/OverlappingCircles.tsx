const OverlappingCircles = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const dimensions = {
    sm: { w: 'w-8 h-8', circle: 'w-5 h-5' },
    md: { w: 'w-10 h-10', circle: 'w-6 h-6' },
    lg: { w: 'w-14 h-14', circle: 'w-9 h-9' },
  };

  const d = dimensions[size];

  return (
    <div className={`relative ${d.w} flex items-center justify-center shrink-0`}>
      {/* Granate circle — ADN / raíz */}
      <div
        className={`absolute ${d.circle} rounded-full bg-primary/70 animate-breathe`}
        style={{ left: '10%', top: '50%', transform: 'translateY(-50%)' }}
      />
      {/* Cian circle — futuro / generación */}
      <div
        className={`absolute ${d.circle} rounded-full bg-accent/60 animate-breathe`}
        style={{ right: '10%', top: '50%', transform: 'translateY(-50%)', animationDelay: '1.5s' }}
      />
    </div>
  );
};

export default OverlappingCircles;
