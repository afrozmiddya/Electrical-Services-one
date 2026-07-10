import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { ServicesSummary } from '../components/sections/ServicesSummary';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { WorkProcess } from '../components/sections/WorkProcess';
import { GoogleReviews } from '../components/sections/GoogleReviews';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactSection } from '../components/sections/ContactSection';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Electrical Services Kolkata | 24x7 Emergency Electrician</title>
        <meta name="description" content="Premium electrical services in Kolkata. House wiring, commercial contractors, and 24x7 emergency repairs. Certified professionals, upfront pricing." />
      </Helmet>
      
      <div className="flex flex-col w-full">
        <Hero />
        <TrustBar />
        <ServicesSummary />
        <WhyChooseUs />
        <WorkProcess />
        <GoogleReviews />
        <FAQSection />
        <ContactSection />
      </div>
    </>
  );
}
