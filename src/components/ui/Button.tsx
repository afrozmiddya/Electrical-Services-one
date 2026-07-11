import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    
    const variants = {
      primary: 'bg-primary text-gray-950 hover:bg-primary/90 shadow-[0_0_15px_rgba(165,180,252,0.3)] hover:shadow-[0_0_20px_rgba(165,180,252,0.5)] font-semibold',
      secondary: 'bg-surface text-white border border-border-subtle hover:bg-surface/80',
      outline: 'bg-transparent border border-border-subtle text-text-main hover:bg-surface',
      ghost: 'bg-transparent text-text-main hover:bg-surface border border-transparent',
      gradient: 'bg-gradient-to-r from-primary to-blue-200 text-gray-950 hover:opacity-90 shadow-[0_0_20px_rgba(165,180,252,0.4)] font-semibold',
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs',
      md: 'h-11 px-6 text-sm',
      lg: 'h-14 px-8 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
