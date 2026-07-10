import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-surface/80 backdrop-blur-md border border-border-subtle rounded-2xl overflow-hidden transition-all duration-300',
          hover && 'hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export const MotionCard = motion(Card);
