"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SITE_NAME, SITE_DESCRIPTION } from "@/data/constants";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="mb-12">
      <h1 className="font-bold mb-3">
        <Link href="/" className="inline-flex items-center">
          <span 
            className="inline-flex items-center overflow-hidden transition-all duration-300 ease-out"
            style={{ width: isHome ? 0 : 24 }}
          >
            <ArrowLeft 
              size={16} 
              aria-hidden="true" 
              focusable={false} 
              className="text-foreground-muted shrink-0 transition-all duration-300 ease-out"
              style={{ 
                opacity: isHome ? 0 : 1,
                transform: isHome ? 'translateX(-8px)' : 'translateX(0)'
              }}
            />
          </span>
          {SITE_NAME.toUpperCase()}
        </Link>
      </h1>
      <p className="text-foreground-muted">
        {SITE_DESCRIPTION} Find me on{" "}
        <Link
          href="https://x.com/gwendall"
          target="_blank"
          className="text-link hover:underline font-bold"
        >
          X
        </Link>{" "}
        or{" "}
        <Link
          href="https://github.com/gwendall"
          target="_blank"
          className="text-link hover:underline font-bold"
        >
          Github
        </Link>
        , or email me at{" "}
        <a
          href="mailto:hi@gwendall.com?subject=Hello"
          className="text-link hover:underline font-bold"
        >
          hi@gwendall.com
        </a>.
      </p>
    </header>
  );
}
