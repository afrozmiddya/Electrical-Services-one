import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, Building2, Zap, ShieldAlert, Settings, Fan, Camera, Cpu } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const allServices = [
  {
    title: 'House Wiring & Rewiring',
    description: 'Complete end-to-end wiring solutions for new residential constructions and safe rewiring for older homes to meet modern load requirements.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070',
    features: ['Concealed Wiring', 'Modular Switches', 'Circuit Breakers (MCB/RCCB)']
  },
  {
    title: 'Commercial & Industrial Wiring',
    description: 'Heavy-duty electrical infrastructure designed for offices, retail spaces, factories, and warehouses ensuring zero downtime.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2070',
    features: ['Three-Phase Wiring', 'Panel Board Setup', 'Server Room Electrics']
  },
  {
    title: 'Emergency Repairs',
    description: '24/7 rapid response team for sudden power outages, short circuits, sparking, and critical electrical hazards.',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2069',
    features: ['Fault Finding', 'Short Circuit Repair', 'Fuse Replacement']
  },
  {
    title: 'Appliance & Fixture Installation',
    description: 'Safe and professional installation of heavy appliances, HVAC units, geysers, and decorative lighting fixtures.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=2070',
    features: ['AC Wiring', 'Geyser Setup', 'Chandelier Hanging']
  },
  {
    title: 'Generator & Inverter Setup',
    description: 'Seamless integration of power backup solutions including UPS, Inverters, and heavy-duty Generators for uninterrupted power supply.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1533022131927-4f4de1f278d6?auto=format&fit=crop&q=80&w=2070',
    features: ['Battery Maintenance', 'Auto Changeover Switch', 'Load Balancing']
  },
  {
    title: 'CCTV & Security Wiring',
    description: 'Structured cabling for CCTV cameras, biometric access control systems, and smart home security integrations.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2066',
    features: ['PoE Cabling', 'DVR Setup', 'Concealed Routing']
  },
  {
    title: 'Fan & Motor Repair',
    description: 'Expert repair, rewinding, and maintenance of ceiling fans, exhaust fans, and water pump motors.',
    icon: Fan,
    image: 'https://images.unsplash.com/photo-1631481546738-9cb520f9c264?auto=format&fit=crop&q=80&w=2070',
    features: ['Coil Rewinding', 'Bearing Replacement', 'Pump Servicing']
  },
  {
    title: 'Maintenance & AMC',
    description: 'Preventative electrical maintenance contracts for housing societies and commercial buildings to prevent costly breakdowns.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1580982327559-c1202864ee05?auto=format&fit=crop&q=80&w=2070',
    features: ['Periodic Inspections', 'Load Testing', 'Safety Audits']
  }
];

export function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Electrical Services Kolkata</title>
        <meta name="description" content="Comprehensive electrical services in Kolkata including house wiring, commercial setup, emergency repairs, appliance installation, and more." />
      </Helmet>

      <div className="flex flex-col w-full pb-24">
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-surface/30 border-b border-border-subtle relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              Professional, safe, and reliable electrical solutions tailored for residential, commercial, and industrial needs.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {allServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (index % 2) * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full flex flex-col sm:flex-row overflow-hidden group">
                    <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-surface to-transparent sm:to-transparent/20" />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-text-main group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-text-secondary text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-border-subtle">
                        <ul className="flex flex-col gap-2">
                          {service.features.map(feature => (
                            <li key={feature} className="flex items-center gap-2 text-xs text-text-secondary">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6">
                           <Link to="/contact">
                             <Button variant="outline" size="sm" className="w-full sm:w-auto">Request Service</Button>
                           </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
