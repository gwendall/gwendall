import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "./components/ThemeToggle";
import Link from "next/link";

export const dynamic = 'force-static';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafafa", // Default, will be updated by JS
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gwendall.com"),
  title: {
    default: "Gwendall",
    template: "%s | Gwendall",
  },
  description: "Builder & founder exploring embodied agents, spatial systems, and autonomous behavior.",
  keywords: ["Gwendall", "Product Engineer", "AI", "Avatars", "Spatial Computing", "Robotics", "Design", "Founder"],
  authors: [{ name: "Gwendall" }],
  creator: "Gwendall",
  openGraph: {
    title: "Gwendall",
    description: "Builder & founder exploring embodied agents, spatial systems, and autonomous behavior.",
    url: "https://gwendall.com",
    siteName: "Gwendall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwendall",
    description: "Builder & founder exploring embodied agents, spatial systems, and autonomous behavior.",
    creator: "@gwendall",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased preload-transitions`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var system = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved ? saved : (system ? 'dark' : 'light');
                  
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    var meta = document.querySelector('meta[name="theme-color"]');
                    if (meta) meta.setAttribute('content', '#0a0a0a');
                  } else {
                    document.documentElement.classList.remove('dark');
                    var meta = document.querySelector('meta[name="theme-color"]');
                    if (meta) meta.setAttribute('content', '#fafafa');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
        <ThemeToggle />
        <main role="main" className="min-h-screen max-w-2xl mx-auto px-6 py-8 font-mono">
          <header className="mb-12">
            <h1 className="font-bold mb-3">GWENDALL</h1>
            <p className="text-foreground-muted">
              Builder & founder exploring embodied agents, spatial systems, and autonomous behavior. Find me on{" "}
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
          {children}
          <footer className="mt-12 text-foreground-muted">
            Gwendall - Crafting worlds since 2010.
          </footer>
        </main>
      </body>
    </html>
  );
}
