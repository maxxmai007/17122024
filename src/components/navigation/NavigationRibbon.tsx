import React from 'react';
import { cn } from '../../utils/cn';

const navItems = [
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Support', href: '#support' },
  { label: 'Blog', href: '#blog' },
];

export function NavigationRibbon() {
  return (
    <nav className="relative px-6 py-1.5 rounded-full bg-gradient-to-r from-earth-tan-dark/20 via-earth-tan/10 to-earth-tan-dark/20 backdrop-blur-sm border border-gold-500/10">
      {/* Navigation items */}
      <div className="flex items-center justify-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-all duration-300",
              "text-gold-500/80 hover:text-gold-500",
              "relative group"
            )}
          >
            {item.label}
            {/* Animated underline */}
            <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gold-500/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
        ))}
      </div>
    </nav>
  );
}