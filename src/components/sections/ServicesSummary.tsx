import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building2, Zap, Settings, ShieldAlert, Activity } from 'lucide-react';
import { MotionCard } from '../ui/Card';

const services = [
  {
    title: 'House Wiring',
    description: 'Complete electrical wiring solutions for new homes and renovations with safety guaranteed.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070'
  },
  {
    title: 'Commercial Wiring',
    description: 'Scalable electrical infrastructure for offices, retail stores, and commercial complexes.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2070'
  },
  {
    title: 'Emergency Repair',
    description: '24/7 rapid response for short circuits, power outages, and critical electrical failures.',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2069'
  },
  {
    title: 'Appliance Installation',
    description: 'Professional setup for ACs, Geysers, Ceiling Fans, and heavy electrical appliances.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=2070'
  }
];

export function ServicesSummary() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Comprehensive <span className="text-primary">Electrical</span> Services
            </h2>
            <p className="text-text-secondary text-lg">
              From minor residential repairs to large-scale commercial installations, our certified experts deliver quality workmanship every time.
            </p>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-400 transition-colors group whitespace-nowrap">
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <MotionCard
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-lg bg-surface/80 backdrop-blur-md flex items-center justify-center border border-border-subtle">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-surface relative z-20">
                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors mt-auto">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </MotionCard>
          ))}
        </div>

      </div>
    </section>
  );
}
