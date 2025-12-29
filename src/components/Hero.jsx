"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      aria-label="Learning Books hero"
      className="relative w-full min-h-[350px] md:min-h-[450px] lg:min-h-[550px] flex items-center bg-base-100 overflow-hidden"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/library_hero_clean.png"
          alt="Online Library Hero"
          fill
          priority
          className="object-contain object-right"
        />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-lg lg:max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-base-content">
            Online library
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-base-content/80 leading-relaxed">
            Curated books for learners — from beginners to pros. Browse, add,
            and manage your collection efficiently.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/allBooks"
              className="btn btn-primary px-8 py-3 text-base font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Browse Books
            </Link>
            
            <Link
              href="/register"
               className="btn btn-outline btn-primary px-8 py-3 text-base rounded-full"
            >
              Join for free
            </Link>
          </div>

          <p className="mt-6 text-sm text-base-content/60 font-medium">
             ✓ Unlimited Access &nbsp; • &nbsp; ✓ Curated Lists &nbsp; • &nbsp; ✓ Free to Join
          </p>
        </div>
      </div>
    </section>
  );
};


export default Hero;
