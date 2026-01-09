"use client";

import { Moon, Sun } from "lucide-react";
import React from "react";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark" | null>(null);

  const updateThemeColor = (nextTheme: "light" | "dark") => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const color = nextTheme === "dark" ? "#0a0a0a" : "#fafafa";

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
      return;
    }

    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = color;
    document.head.appendChild(meta);
  };

  React.useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    updateThemeColor(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Enable transitions after a short delay
    const timeout = setTimeout(() => {
      document.body.classList.remove("preload-transitions");
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeColor(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Avoid hydration mismatch by not rendering until mounted (theme is set)
  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-2 cursor-pointer transition-colors duration-200 hover:text-gray-500 dark:hover:text-gray-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun size={18} strokeWidth={2} aria-hidden="true" focusable={false} />
      ) : (
        <Moon size={18} strokeWidth={2} aria-hidden="true" focusable={false} />
      )}
    </button>
  );
}

