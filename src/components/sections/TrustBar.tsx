import React from 'react';
import { motion } from 'framer-motion';
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
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={indicator}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="font-medium text-sm md:text-base text-text-main whitespace-nowrap">{indicator}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
