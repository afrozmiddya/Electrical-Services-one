import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Zap } from 'lucide-react';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Electrical Services Kolkata</title>
        <meta name="description" content="Learn about our 15+ years of experience providing top-tier electrical services in Kolkata. Our mission, values, and expert team." />
      </Helmet>

      <div className="flex flex-col w-full">
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-surface/30 border-b border-border-subtle relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Setting the Standard for <span className="text-primary">Electrical Excellence</span> in Kolkata
              </h1>
              <p className="text-lg text-text-secondary">
                For over 15 years, we have been the trusted electrical partner for thousands of homes and businesses across the city.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-text-secondary leading-relaxed"
              >
                <h2 className="text-3xl font-heading font-bold text-text-main">Our Story</h2>
                <p>
                  What started as a small, family-owned electrical repair service in South Kolkata has grown into one of the city's most reliable and comprehensive electrical contracting firms.
                </p>
                <p>
                  We recognized early on that the industry lacked a core element: <strong className="text-text-main">professionalism and transparency</strong>. Too often, customers were left in the dark about pricing, faced with unreliable technicians, and dealt with substandard safety practices.
                </p>
                <p>
                  We set out to change that. Today, our team consists of fully certified, highly trained professionals who treat every project—whether it's fixing a single switch or wiring a multi-story commercial building—with the exact same level of dedication and rigorous safety standards.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square border border-border-subtle"
              >
                <img 
                  src="https://images.unsplash.com/photo-1503949826315-08197779d9e6?auto=format&fit=crop&q=80&w=2070" 
                  alt="Our Team at Work" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-surface/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold mb-4">Our Core Values</h2>
              <p className="text-text-secondary">The principles that guide everything we do.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Safety First', icon: Shield, desc: 'We never compromise on safety protocols. Every job is executed to meet strict electrical codes.' },
                { title: 'Customer Focus', icon: Users, desc: 'Clear communication, respectful service, and a commitment to your complete satisfaction.' },
                { title: 'Precision', icon: Target, desc: 'Meticulous attention to detail ensures our work is durable, efficient, and reliable.' },
                { title: 'Innovation', icon: Zap, desc: 'Staying updated with the latest electrical technologies and energy-efficient solutions.' },
              ].map((value, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background p-8 rounded-2xl border border-border-subtle hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </div>
    </>
  );
}
