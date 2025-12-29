'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex bg-base-200 h-screen w-full flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-error">Something went wrong!</h2>
      <p className="text-base-content/70">{error?.message || "An unexpected error occurred."}</p>
      <button
        className="btn btn-primary"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
