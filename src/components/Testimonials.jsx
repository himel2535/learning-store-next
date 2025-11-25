"use client";
import React from "react";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Product Manager",
    feedback:
      "This product completely changed the way I manage my inventory. Highly recommended!",
  },
  {
    id: 2,
    name: "Mark Smith",
    role: "Developer",
    feedback:
      "Intuitive interface and great support. Managing products has never been easier.",
  },
  {
    id: 3,
    name: "Sara Lee",
    role: "Entrepreneur",
    feedback:
      "I love how fast I can update products and track everything. Amazing tool!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Users Say
        </h2>
        <p className=" max-w-2xl mx-auto mb-12">
          Real feedback from people who love using our products.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 bg-white shadow rounded-xl hover:shadow-lg hover:-translate-y-1 transition-transform border border-base-200"
            >
              {/* Feedback */}
              <p className="mb-4  italic">"{t.feedback}"</p>

              {/* User Info */}
              <h4 className="font-bold text-lg">{t.name}</h4>
              <p className="text-sm font-semibold ">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
