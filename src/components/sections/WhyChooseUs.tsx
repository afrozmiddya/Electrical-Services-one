import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Users } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const reasons = [
  {
    title: 'Certified Professionals',
    description: 'Our electricians are fully licensed, insured, and undergo rigorous training.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees. We provide upfront estimates before starting any work.',
    icon: Award,
  },
  {
    title: 'Punctual Service',
    description: 'We respect your time. Our team arrives on schedule and completes work efficiently.',
    icon: Clock,
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your safety and satisfaction are our top priorities. We guarantee our workmanship.',
    icon: Users,
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square border border-border-subtle">
              <img 
                src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=2022" 
                alt="Expert Electrician at work" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-surface/90 backdrop-blur-md p-6 rounded-2xl border border-border-subtle shadow-xl flex items-center justify-around">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary flex items-center justify-center">
                      <AnimatedCounter value={10} />+
                    </div>
                    <div className="text-sm text-text-secondary mt-1">Years Exp.</div>
                  </div>
                  <div className="w-px h-12 bg-border-subtle" />
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary flex items-center justify-center">
                      <AnimatedCounter value={99} />%
                    </div>
                    <div className="text-sm text-text-secondary mt-1">Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Why Kolkata Chooses <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Our Services</span>
              </h2>
              <p className="text-lg text-text-secondary">
                We combine technical expertise with exceptional customer service to deliver the highest standard of electrical work in the city.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-2">{reason.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
