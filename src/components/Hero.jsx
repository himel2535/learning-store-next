"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      aria-label="Learning Books hero"
      className="relative overflow-hidden min-h-[500px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/heroImage.jpg"
          alt="Hero Image"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-3xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
            Discover & Learn with Books
          </h1>

          <p className="mt-4 text-lg sm:text-xl max-w-2xl">
            Curated books for learners — from beginners to pros. Browse, add,
            and manage your collection.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Link
              href="/allBooks"
              className="btn btn-primary px-6 py-3 text-base font-medium rounded shadow"
            >
              Browse Books
            </Link>

            <Link
              href="/register"
              className="btn btn-ghost px-6 py-3 text-base rounded"
            >
              Join for free
            </Link>
          </div>

          <p className="mt-4 text-sm">
            Free access to curated learning lists • Add your favorites • Manage
            collections
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
