"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch books from backend
  useEffect(() => {
    fetch("https://learning-books-server.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter books based on search & category (UI only)
  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "" || book.category === category)
    );
  });

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-2">All Books</h1>
        <p className="text-base-content/70 mb-8 max-w-2xl">
          Browse through our collection of books. Use the search or filter to
          find your favorites.
        </p>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered input-primary w-full sm:flex-1"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered select-primary w-full sm:w-auto"
          >
            <option value="">All Categories</option>
            <option value="Novel">Novel</option>
            <option value="Tech">Tech</option>
            <option value="Travel">Travel</option>
            <option value="History">History</option>
            <option value="Education">Education</option>
            <option value="Business">Business</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <span className="loading loading-bars loading-lg text-primary"></span>
          </div>
        ) : (
          /* Books Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <div
                key={book._id}
                className="bg-base-200 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition border border-transparent flex flex-col"
              >
                {/* Image */}
                {book.image_url && (
                  <div className="overflow-hidden rounded-t-xl">
                    <Image
                      src={book.image_url}
                      alt={book.title}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                  {/* Short description (truncated to 2 lines) */}
                  <p className=" mb-2 line-clamp-2">
                    {book.short_description || "No description available."}
                  </p>
                  {/* Price / Meta */}
                  <span className="font-semibold text-lg mb-4">
                    {book.price || "$25"}
                  </span>
                  {/* Details button */}
                  <Link
                    href={`/allBooks/${book._id.toString()}`}
                    className="btn btn-primary btn-sm w-full mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Books;
