import React from 'react';

interface GearIconProps {
  className?: string;
}

const GearIcon: React.FC<GearIconProps> = ({ className }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className={className}
    >
      <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="18" r="4.5" fill="currentColor" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45) * Math.PI / 180;
        const x1 = 18 + 10.5 * Math.cos(angle);
        const y1 = 18 + 10.5 * Math.sin(angle);
        const x2 = 18 + 15 * Math.cos(angle);
        const y2 = 18 + 15 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
};

export default GearIcon; 