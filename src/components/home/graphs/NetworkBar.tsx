import React from 'react';
import { cn } from '../../../utils/cn';

interface NetworkBarProps {
  percentage: number;
  cardCount: number;
  label: string;
}

export function NetworkBar({ percentage, cardCount, label }: NetworkBarProps) {
  return (
    <div className="flex flex-col items-center group">
      {/* Card count label */}
      <div className="h-6 mb-2">
        <span className="text-sm font-medium text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {cardCount.toLocaleString()}
        </span>
      </div>

      {/* Bar */}
      <div className="relative w-16 mb-4">
        <div
          className={cn(
            "w-full rounded-lg transition-all duration-500",
            "bg-gradient-to-t from-emerald-600 to-emerald-400",
            "group-hover:from-emerald-500 group-hover:to-emerald-300",
          )}
          style={{ 
            height: `${percentage}%`,
            minHeight: '40px',
            boxShadow: '0 0 20px rgba(52, 211, 153, 0.2)'
          }}
        >
          {/* Shine effect */}
          <div 
            className="absolute inset-0 rounded-lg opacity-50"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: 'shine 3s infinite linear'
            }}
          />
        </div>
      </div>
      
      {/* Network label */}
      <span className="text-sm font-medium text-emerald-400/80">
        {label}
      </span>
    </div>
  );
}