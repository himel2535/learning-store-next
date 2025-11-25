"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">About Learning Books</h1>
      <p className="mb-4 text-lg">
        Learning Books is a platform for book lovers to explore and manage books. 
        Here you can find a wide range of categories and authors.
      </p>

      <Image 
        src="/learningBook.png" 
        alt="Learning Books" 
        width={200} 
        height={200} 
        className="mb-4"
      />

      <p className="text-md">
        Our mission is to provide an easy and interactive way to manage and discover books online.
      </p>
    </div>
  );
}
