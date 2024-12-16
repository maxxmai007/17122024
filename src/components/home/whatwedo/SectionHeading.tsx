import React from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export function SectionHeading() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <div className="text-center mb-20">
      <div className="flex items-center gap-3 justify-center mb-4">
        <div className="w-1 h-1 rounded-full bg-gold-500" />
        <h2 className="text-gold-500 text-sm font-medium tracking-wide uppercase">
          What we do
        </h2>
        <div className="w-1 h-1 rounded-full bg-gold-500" />
      </div>
      
      <h3 
        ref={ref}
        className="text-4xl md:text-5xl font-display text-white transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? '0' : '20px'})`,
        }}
      >
        We obsess over credit cards so you<br />don't have to.
      </h3>
    </div>
  );
}