import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "./components/ThemeToggle";
import { Header } from "./components/Header";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/data/constants";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [SITE_NAME, "Product Engineer", "AI", "Avatars", "Spatial Computing", "Robotics", "Design", "Founder"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
          <Header />
          {children}
          <footer className="mt-12 text-foreground-muted">
            Gwendall - Crafting worlds since 2010.
          </footer>
        </main>
      </body>
    </html>
  );
}
