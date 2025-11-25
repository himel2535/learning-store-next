"use client";

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import Link from "next/link"; // next/link ব্যবহার

const ManageBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books from backend
  const fetchBooks = async () => {
    try {
      const res = await fetch("https://learning-books-server.vercel.app/books");
      if (!res.ok) throw new Error("Failed to fetch books");
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.log(err);
      toast.error("Error fetching books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this book?")) return;

    try {
      const res = await fetch(
        `https://learning-books-server.vercel.app/books/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Failed to delete");

      setBooks((prev) => prev.filter((b) => b._id !== id));
      toast("Book deleted successfully");
    } catch (err) {
      console.log(err);
      toast.error("Error deleting book");
    }
  };

  if (!user) {
    return (
      <p className="text-center p-8">
        You must be logged in to access this page.
      </p>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        Manage Books
      </h1>

      {loading ? (
        <p className="text-center">Loading books...</p>
      ) : books.length === 0 ? (
        <p className="text-center">No books found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {books.map((book) => (
            <div
              key={book._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-bold mb-2">{book.title}</h2>
              <p className="text-sm mb-1">Category: {book.category}</p>
              <p className="text-sm mb-3">Price: ${book.price}</p>

              <div className="flex justify-center gap-2">
                {/* View button -> redirects to book details page */}
                <Link
                  href={`/manageBooks/${book._id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  View
                </Link>

                <button
                  className="bg-red-500 text-white px-3 py-1 cursor-pointer rounded hover:bg-red-600"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageBooks;
