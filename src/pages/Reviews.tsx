import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GoogleReviews } from '../components/sections/GoogleReviews';

export function Reviews() {
  return (
    <>
      <Helmet>
        <title>Customer Reviews | Electrical Services Kolkata</title>
        <meta name="description" content="Read what our satisfied customers in Kolkata have to say about our electrical repair and installation services." />
      </Helmet>

      <div className="flex flex-col w-full pt-16">
        <GoogleReviews />
      </div>
    </>
  );
}
