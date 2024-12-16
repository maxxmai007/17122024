import React from 'react';
import { CreditCard } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <CreditCard className="w-6 h-6 text-gold-500" />
      <span className="text-xl font-display text-white tracking-wide">MAXXMAI</span>
    </div>
  );
}