import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ClipboardCheck, FileText, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Call',
    description: 'Contact us with your electrical issue.',
    icon: PhoneCall,
  },
  {
    title: 'Inspection',
    description: 'We assess the site and identify the problem.',
    icon: ClipboardCheck,
  },
  {
    title: 'Quotation',
    description: 'Upfront, transparent pricing provided.',
    icon: FileText,
  },
  {
    title: 'Work',
    description: 'Professional execution of the required work.',
    icon: Wrench,
  },
  {
    title: 'Testing',
    description: 'Rigorous safety and functional testing.',
    icon: ShieldCheck,
  },
  {
    title: 'Completion',
    description: 'Final walkthrough and handover.',
    icon: CheckCircle2,
  }
];

export function WorkProcess() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Our Streamlined <span className="text-primary">Process</span>
          </h2>
          <p className="text-text-secondary text-lg">
            A hassle-free experience from your first call to project completion. We ensure quality and transparency at every step.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border-subtle to-transparent -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface border border-border-subtle flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all shadow-lg relative">
                  <step.icon className="w-7 h-7 text-text-secondary group-hover:text-primary transition-colors" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-heading font-bold mb-2 text-text-main group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
