'use client';

import { useEffect } from 'react';

// This component handles rendering errors in the /posts route
export default function Error({ error, reset }) {
  useEffect(() => {
    // You can send error to a monitoring service here
    console.error('Caught in posts error boundary:', error);
  }, [error]);

  return (
    <div className="p-6 bg-red-100 rounded-md text-red-800">
      <h2 className="text-xl font-semibold mb-2">Something went wrong!</h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  );
}