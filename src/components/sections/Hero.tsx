import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Zap, Shield, Clock, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border-subtle w-fit">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium tracking-wide">24/7 Emergency Service Available</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
              Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Electrical</span> Services in Kolkata
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
              Premium electrical solutions for residential, commercial, and industrial properties. Fast, safe, and reliable service when you need it most.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="tel:8777539391">
                <Button size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/918777539391" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2 border-accent/30 hover:border-accent/60">
                  <MessageCircle className="w-5 h-5 text-accent" />
                  WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="ghost">
                  Get Free Quote
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-4 border-t border-border-subtle">
              {[
                { label: 'Experience', value: '15+ Yrs', icon: Clock },
                { label: 'Customers', value: '1500+', icon: Star },
                { label: 'Support', value: '24/7', icon: Phone },
                { label: 'Rating', value: '4.9/5', icon: Shield },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <stat.icon className="w-5 h-5 text-primary mb-1" />
                  <span className="text-2xl font-heading font-bold text-text-main">{stat.value}</span>
                  <span className="text-xs text-text-secondary uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-surface to-surface/50 border border-border-subtle overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="Professional Electrician"
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
            
            {/* Floating Trust Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-12 -left-12 bg-surface/90 backdrop-blur-xl p-6 rounded-2xl border border-border-subtle shadow-2xl flex items-center gap-4 max-w-[280px]"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white leading-tight">Licensed & Insured</h4>
                <p className="text-sm text-text-secondary mt-1">100% safe & compliant electrical work</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
