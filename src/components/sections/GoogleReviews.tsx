import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';

const reviews = [
  {
    author: 'Rajesh Mukherjee',
    rating: 5,
    time: '2 weeks ago',
    text: 'Excellent service! They arrived within 30 minutes for an emergency short circuit repair at my office. Highly professional and reasonably priced. Would highly recommend their electrical services in Kolkata.',
    profilePhoto: 'https://ui-avatars.com/api/?name=Rajesh+Mukherjee&background=random'
  },
  {
    author: 'Sneha Roy',
    rating: 5,
    time: '1 month ago',
    text: 'We hired them for complete house wiring during our renovation in Salt Lake. The team was very knowledgeable, used high-quality materials, and finished the project right on time. Very satisfied.',
    profilePhoto: 'https://ui-avatars.com/api/?name=Sneha+Roy&background=random'
  },
  {
    author: 'Amit Das',
    rating: 5,
    time: '2 months ago',
    text: 'Fixed our complex commercial distribution board issue that other electricians couldn\'t figure out. Truly expert technicians. Their transparent pricing was a breath of fresh air.',
    profilePhoto: 'https://ui-avatars.com/api/?name=Amit+Das&background=random'
  },
  {
    author: 'Priya Sen',
    rating: 5,
    time: '3 months ago',
    text: 'Installed new LED lighting and ceiling fans throughout our apartment. Neat work, no mess left behind, and very polite staff. A 5-star experience!',
    profilePhoto: 'https://ui-avatars.com/api/?name=Priya+Sen&background=random'
  }
];

export function GoogleReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-surface/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8" />
              <h2 className="text-3xl md:text-5xl font-heading font-bold">
                Customer <span className="text-primary">Reviews</span>
              </h2>
            </div>
            <p className="text-text-secondary text-lg">
              Don't just take our word for it. See what our clients in Kolkata have to say about our electrical services.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-surface border border-border-subtle flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-lg text-text-secondary"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-surface border border-border-subtle flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-lg text-text-secondary"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0" 
          ref={emblaRef}
        >
          <div className="flex gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0">
                <Card hover={false} className="h-full p-6 sm:p-8 flex flex-col cursor-grab active:cursor-grabbing">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={review.profilePhoto} 
                      alt={review.author}
                      className="w-12 h-12 rounded-full border border-border-subtle"
                    />
                    <div>
                      <h4 className="font-bold text-text-main leading-tight">{review.author}</h4>
                      <div className="text-sm text-text-secondary">{review.time}</div>
                    </div>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                      alt="Google logo"
                      className="w-5 h-5 ml-auto opacity-50"
                    />
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed flex-grow text-sm sm:text-base">
                    "{review.text}"
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
