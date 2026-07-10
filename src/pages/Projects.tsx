import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { cn } from '../utils/cn';

const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

const gallery = [
  { id: 1, title: 'Luxury Villa Wiring', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070' },
  { id: 2, title: 'Office Network Setup', category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069' },
  { id: 3, title: 'Factory Panel Installation', category: 'Industrial', image: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?auto=format&fit=crop&q=80&w=2070' },
  { id: 4, title: 'Smart Home Automation', category: 'Residential', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=2070' },
  { id: 5, title: 'Retail Store Lighting', category: 'Commercial', image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=2070' },
  { id: 6, title: 'Generator Backup System', category: 'Industrial', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070' },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredGallery = activeCategory === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Projects & Gallery | Electrical Services Kolkata</title>
        <meta name="description" content="View our portfolio of successful electrical projects across residential, commercial, and industrial sectors in Kolkata." />
      </Helmet>

      <div className="flex flex-col w-full min-h-screen pb-24">
        {/* Page Header */}
        <section className="pt-32 pb-12 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Project <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A glimpse into our successful electrical installations and repairs.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === cat 
                      ? "bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]" 
                      : "bg-surface border border-border-subtle text-text-secondary hover:text-white hover:border-primary/50"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredGallery.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface cursor-pointer border border-border-subtle"
                    onClick={() => setLightboxImage(item.image)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-end">
                      <div>
                        <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1 block">{item.category}</span>
                        <h3 className="text-lg font-heading font-bold text-white">{item.title}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
              onClick={() => setLightboxImage(null)}
            >
              <button 
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-white hover:bg-primary transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
              >
                <X className="w-6 h-6" />
              </button>
              
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={lightboxImage}
                alt="Enlarged project view"
                className="max-w-full max-h-[90vh] object-contain rounded-xl border border-border-subtle shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
