import Image from "next/image";
import Link from "next/link";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://learning-books-server.vercel.app/books/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Error fetching book details
          </h2>
          <p className="text-gray-700">
            Could not load book information. Server responded with status:{" "}
            <span className="font-bold">{res.status}</span>
          </p>
          <Link href="/allBooks" className="btn btn-primary mt-6">
            Back to All Books
          </Link>
        </div>
      </div>
    );
  }

  const book = await res.json();

  if (!book || !book._id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Book Not Found
          </h2>
          <p className="text-gray-500">
            The book you are looking for does not exist.
          </p>
          <Link href="/allBooks" className="btn btn-primary mt-6">
            Back to All Books
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = book.publishedDate
    ? new Date(book.publishedDate).toLocaleDateString()
    : "N/A";

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/allBooks"
          className="inline-flex items-center text-gray-700 hover:text-blue-600 mb-8 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back to All Books
        </Link>

        {/* Product Details Card */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Large Image/Banner */}
          <div className="relative w-full h-80 md:h-96 bg-gray-200 overflow-hidden">
            <Image
              src={book.image_url || book.image || "/book_placeholder.png"}
              alt={book.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {book.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-6">
              {book.price && (
                <span className="font-bold text-xl text-blue-600">
                  {book.price}
                </span>
              )}
              {book.category && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                  {book.category}
                </span>
              )}
              {book.publishedDate && (
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Published: {formattedDate}
                </span>
              )}
              {book.priority && (
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.519 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.519-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"
                    />
                  </svg>
                  Priority: {book.priority}
                </span>
              )}
            </div>

            {/* Full Description */}
            <div className="text-gray-800 leading-relaxed text-base md:text-lg">
              <p>
                {book.full_description || "No detailed description available."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
