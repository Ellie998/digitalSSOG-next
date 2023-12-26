"use client"; // Error components must be Client Components
export const runtime = "edge";

import { useEffect } from "react";
import { Sidebar } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="h-full">
          <div className="h-[80px] md:pl-56 fixed z-50 w-full inset-y-0"></div>
          <div className="fixed inset-y-0 z-50 flex-col hidden w-56 h-full md:flex">
            <Sidebar />
          </div>
          <main className="pl-56 pt-[80px] h-full">
            <h2>Something went wrong!</h2>
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }>
              Try again
            </button>
          </main>
        </div>
      </body>
    </html>
  );
}
