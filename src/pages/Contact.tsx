import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactSection } from '../components/sections/ContactSection';

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Electrical Services Kolkata</title>
        <meta name="description" content="Contact our expert electricians in Kolkata for a free quote or emergency repairs. Call us at 8777539391 or fill out our contact form." />
      </Helmet>

      <div className="flex flex-col w-full pt-16 min-h-screen">
        <ContactSection />
      </div>
    </>
  );
}
