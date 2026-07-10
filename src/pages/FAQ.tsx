import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQSection } from '../components/sections/FAQSection';

export function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ | Electrical Services Kolkata</title>
        <meta name="description" content="Frequently asked questions about our electrical services, pricing, emergency response time, and service areas in Kolkata." />
      </Helmet>

      <div className="flex flex-col w-full pt-16 min-h-screen">
        <FAQSection />
      </div>
    </>
  );
}
