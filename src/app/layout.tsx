import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "./components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#fafafa", // Default, will be updated by JS
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gwendall.com"),
  title: {
    default: "Gwendall",
    template: "%s | Gwendall",
  },
  description: "Builder & Founder. Exploring systems around avatars, spatial worlds, and autonomous behavior.",
  keywords: ["Gwendall", "Product Engineer", "AI", "Avatars", "Spatial Computing", "Robotics", "Design", "Founder"],
  authors: [{ name: "Gwendall" }],
  creator: "Gwendall",
  openGraph: {
    title: "Gwendall",
    description: "Builder & Founder. Exploring systems around avatars, spatial worlds, and autonomous behavior.",
    url: "https://gwendall.com",
    siteName: "Gwendall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwendall",
    description: "Builder & Founder. Exploring systems around avatars, spatial worlds, and autonomous behavior.",
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
    icon: "https://punks.art/api/punks/2113?format=png&background=v2&size=32",
    apple: "https://punks.art/api/punks/2113?format=png&background=v2&size=180",
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
        {children}
      </body>
    </html>
  );
}
