"use client";
import React from "react";

const Banner = () => {
  return (
    <section className="py-16 bg-neutral text-white text-center rounded-lg my-12">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Upgrade Your Plan Today
        </h2>

        {/* Subtitle / Description */}
        <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">
          Unlock unlimited products, advanced analytics, and priority support to scale your store faster.
        </p>

        {/* CTA Button */}
        <button className="btn btn-secondary btn-lg hover:scale-105 transition-transform">
          Upgrade Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
