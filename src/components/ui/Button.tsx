import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-xl transition-all duration-200 font-medium inline-flex items-center justify-center',
        {
          'bg-gold-500 hover:bg-gold-600 text-dark-900': variant === 'primary',
          'border border-gold-500/20 hover:border-gold-500/40 text-gold-500': variant === 'outline',
          'text-gold-500 hover:text-gold-600': variant === 'ghost',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
          'px-10 py-5 text-xl': size === 'xl',
        },
        className
      )}
      {...props}
    />
  );
}