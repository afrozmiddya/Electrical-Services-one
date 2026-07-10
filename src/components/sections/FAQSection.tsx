import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const faqs = [
  {
    question: 'Do you provide 24/7 emergency electrical services?',
    answer: 'Yes, we offer 24/7 emergency electrical services across Kolkata. Our rapid response team can typically reach your location within 60 minutes for critical issues like short circuits, power outages, and sparking.'
  },
  {
    question: 'Are your electricians licensed and insured?',
    answer: 'Absolutely. Every electrician on our team is fully certified, background-checked, and carries comprehensive insurance. We strictly adhere to Indian electrical safety standards.'
  },
  {
    question: 'Do you charge for estimates or site inspections?',
    answer: 'We provide free estimates for most standard jobs over the phone. For complex installations or complete rewiring, a nominal inspection fee applies, which is fully adjusted against the final bill if you hire us.'
  },
  {
    question: 'What areas in Kolkata do you serve?',
    answer: 'We serve all major areas in and around Kolkata, including Park Circus, Salt Lake, New Town, South Kolkata (Gariahat, Ballygunge, Tollygunge), North Kolkata (ShyamBazar, Dum Dum), and Howrah.'
  },
  {
    question: 'Do you handle commercial electrical projects?',
    answer: 'Yes, we have specialized teams for commercial and industrial projects. We handle everything from office space wiring and heavy machinery electrical setup to AMC (Annual Maintenance Contracts) for commercial complexes.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
            </p>
            <a href="tel:8777539391" className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-surface border border-border-subtle hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-text-secondary">Still have questions?</span>
                <span className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">Call 8777539391</span>
              </div>
            </a>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index}
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen ? "bg-surface border-primary/30 shadow-lg shadow-primary/5" : "bg-surface/50 border-border-subtle hover:border-border-subtle/80"
                  )}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className={cn("font-heading font-semibold text-lg pr-8 transition-colors", isOpen ? "text-primary" : "text-text-main")}>
                      {faq.question}
                    </span>
                    <ChevronDown className={cn("w-5 h-5 text-text-secondary shrink-0 transition-transform duration-300", isOpen && "rotate-180 text-primary")} />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0 text-text-secondary leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
