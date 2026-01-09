"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-8 py-12">
      <div className="text-foreground-muted">Error</div>
      
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-foreground">
          Something went wrong.
        </h1>
        <p className="text-foreground-muted">
          An unexpected error occurred. These things happen.
        </p>
      </div>

      <div>
        <button
          onClick={() => reset()}
          className="text-link hover:underline transition-colors cursor-pointer"
        >
          Try again
        </button>
        {" "}or{" "}
        <Link 
          href="/" 
          className="text-link hover:underline transition-colors"
        >
          go back home
        </Link>
      </div>
    </div>
  );
}
