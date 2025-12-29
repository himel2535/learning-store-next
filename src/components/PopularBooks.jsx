import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularBooks = async () => {
  const res = await fetch(
    "https://learning-books-server.vercel.app/popularBooks"
  );
  const data = await res.json();
  return (
    <section className="py-20 bg-base-100 rounded-lg mb-10">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Popular Books
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-12">
          Our most recommended and loved books, handpicked for learners.
        </p>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((book) => (
            <div
              key={book._id}
              className="p-6 rounded-xl bg-base-200 shadow hover:shadow-lg hover:-translate-y-1 transition border border-transparent"
            >
              {/* Book Image */}
              <div className="mb-4">
                <Image
                  src={book.image_url || "/placeholder.jpg"}
                  alt={book.title}
                  width={400}
                  height={300}
                  // onError={() => setImgSrc("/placeholder.jpg")}
                  className="rounded-lg object-cover w-full h-56"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold">{book.title}</h3>

              {/* Author */}
              <p className="text-sm text-base-content/70 mb-4">
                by {book.author}
              </p>

              {/* CTA */}
              <Link
                href={`/allBooks/${book._id}`}
                className="btn btn-primary btn-sm"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link href="/allBooks" className="btn btn-outline btn-primary">
            Browse All Books
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
