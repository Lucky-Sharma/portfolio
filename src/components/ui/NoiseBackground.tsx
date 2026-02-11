import type { ReactNode } from "react";

interface NoiseBackgroundProps {
  children: ReactNode;
  className?: string; // Applied to the content container
  containerClassName?: string; // Applied to the outer wrapper
  gradientColors?: string[];
}

export const NoiseBackground = ({
    
  children,
  className,
  containerClassName,
  gradientColors = ["#000000", "#ffffff"],
}: NoiseBackgroundProps) => {
  return (
    <div className={`relative flex items-center justify-center ${containerClassName} overflow-hidden`}>
      {/* Rotating Gradient Layer */}
      <div
        className="absolute inset-0 m-auto aspect-square w-[150%] animate-[spin_5s_linear_infinite]"
        style={{
          background: `conic-gradient(from 0deg, ${gradientColors.join(", ")}, ${gradientColors[0]})`,
        }}
      />
      
      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className={`relative z-20 ${className}`}>{children}</div>
    </div>
  );
};
