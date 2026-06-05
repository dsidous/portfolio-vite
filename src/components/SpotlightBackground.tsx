type SpotlightBackgroundProps = {
  x: number;
  y: number;
};

export function SpotlightBackground({ x, y }: SpotlightBackgroundProps) {
  return (
    <div
      className='pointer-events-none fixed inset-0 z-30 transition duration-300'
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(var(--theme-spotlight-rgb), var(--theme-spotlight-opacity)), transparent 80%)`,
      }}
    />
  );
}
