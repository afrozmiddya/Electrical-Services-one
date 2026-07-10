import React from 'react';
import { Helmet } from 'react-helmet-async';

export function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Electrical Services Kolkata</title>
        <meta name="description" content="Privacy policy for our electrical services website." />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-blue max-w-none text-text-secondary">
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
          
          <h2 className="text-2xl font-bold text-text-main mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Billing addresses</li>
            <li>Service addresses</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-main mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. We use the information we collect or receive:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>To facilitate account creation and logon process.</li>
            <li>To send you marketing and promotional communications.</li>
            <li>To fulfill and manage your orders and services.</li>
            <li>To request feedback and to contact you about your use of our Website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-main mt-8 mb-4">3. Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this notice, you may email us at eservices22@yahoo.com or by post to:
          </p>
          <p className="font-semibold text-text-main">
            Electrical Services<br />
            Park Circus, Kolkata<br />
            West Bengal, India
          </p>
        </div>
      </div>
    </>
  );
}
