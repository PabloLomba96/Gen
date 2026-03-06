const OverlappingCircles = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Granate circle — left */}
      <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[65%] aspect-square rounded-full border-2 border-primary/40 bg-primary/8 animate-circle-pulse" />

      {/* Cian circle — right */}
      <div
        className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[65%] aspect-square rounded-full border-2 border-accent/40 bg-accent/8 animate-circle-pulse"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Overlap glow — meeting point */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square rounded-full bg-overlap/25 blur-md animate-overlap-glow" />
    </div>
  );
};

export default OverlappingCircles;
