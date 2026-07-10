import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

// Define the validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Form data submitted:', data);
    try {
      // Simulate API call for now (Web3Forms/FormSubmit integration would go here)
      // await fetch('https://api.web3forms.com/submit', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ access_key: 'YOUR_ACCESS_KEY', ...data })
      // });
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info & Map */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="text-lg text-text-secondary">
                Need an electrician urgently? Or planning a new project? Fill out the form or reach out to us directly. We're here to help.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a href="tel:8777539391" className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border-subtle hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary font-medium">Primary Contact</div>
                  <div className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">8777539391</div>
                </div>
              </a>
              
              <a href="mailto:eservices22@yahoo.com" className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border-subtle hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary font-medium">Email Address</div>
                  <div className="text-lg font-bold text-text-main group-hover:text-primary transition-colors truncate">eservices22@yahoo.com</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border-subtle">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary font-medium">Location</div>
                  <div className="text-lg font-bold text-text-main">Park Circus, Kolkata</div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-64 rounded-2xl overflow-hidden border border-border-subtle relative mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14739.066318991443!2d88.3562635928646!3d22.540989045330364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771c1b181dbb%3A0xc48c08fc4ea2b1ec!2sPark%20Circus%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                title="Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface border border-border-subtle p-8 sm:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <h3 className="text-2xl font-heading font-bold mb-8">Request a Free Quote</h3>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-text-secondary">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-8"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-text-secondary">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                      {...register('name')}
                    />
                    {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-text-secondary">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="10-digit number"
                      {...register('phone')}
                    />
                    {errors.phone && <span className="text-red-400 text-xs">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email (Optional)</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@example.com"
                      {...register('email')}
                    />
                    {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-sm font-medium text-text-secondary">Service Required *</label>
                    <select
                      id="service"
                      className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                      {...register('service')}
                    >
                      <option value="">Select a service...</option>
                      <option value="House Wiring">House Wiring</option>
                      <option value="Commercial Wiring">Commercial Wiring</option>
                      <option value="Emergency Repair">Emergency Repair</option>
                      <option value="Appliance Install">Appliance Installation</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && <span className="text-red-400 text-xs">{errors.service.message}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-text-secondary">Describe your issue *</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell us what you need help with..."
                    {...register('message')}
                  />
                  {errors.message && <span className="text-red-400 text-xs">{errors.message.message}</span>}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full mt-4 gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-center text-text-secondary mt-4">
                  By submitting this form, you agree to our privacy policy. Your information is kept secure and confidential.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
