import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const trustIndicators = [
  'Licensed Electricians',
  'Emergency Service',
  'Verified Business',
  'Affordable Pricing',
  'Google Rated',
  'Same Day Service'
];

export function TrustBar() {
  return (
    <section className="border-y border-border-subtle bg-surface/30 overflow-hidden py-6">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8 md:gap-16 px-4">
        {[...trustIndicators, ...trustIndicators, ...trustIndicators, ...trustIndicators].map((indicator, index) => (
          <div
            key={`${indicator}-${index}`}
            className="flex items-center gap-2 shrink-0"
          >
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="font-medium text-sm md:text-base text-text-main whitespace-nowrap">{indicator}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
