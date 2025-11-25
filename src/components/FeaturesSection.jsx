"use client";

import React from "react";
import { BookOpen, Sparkles, Layers, Globe } from "lucide-react";


const features = [
  {
    title: "Curated Book Collections",
    desc: "Learn faster with carefully selected books for each topic and skill level.",
    icon: <BookOpen className="w-10 h-10 text-primary" />,
  },
  {
    title: "Smart Recommendations",
    desc: "Get suggestions based on what you read and what your goal is.",
    icon: <Sparkles className="w-10 h-10 text-primary" />,
  },
  {
    title: "Organize Your Library",
    desc: "Save, categorize, bookmark, and manage your favorite learning books easily.",
    icon: <Layers className="w-10 h-10 text-primary" />,
  },
  {
    title: "Accessible Anywhere",
    desc: "Study from any device, any time — synced across all platforms.",
    icon: <Globe className="w-10 h-10 text-primary" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-base-100 rounded-lg mb-10">
      <div className="container mx-auto px-6 text-center">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Learn With Us?
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-12">
          Everything you need to make learning smarter, easier, and more enjoyable.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white shadow hover:shadow-lg hover:-translate-y-1 transition border border-base-200"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-base-content/70 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
