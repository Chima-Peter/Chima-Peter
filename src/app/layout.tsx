import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/theme/theme-provider";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0c0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://chima-peter.vercel.app/"),
  title: "Chima Ojimma — Backend Engineer",
  description:
    "Backend Engineer with 4+ years building scalable backend systems, distributed services, and AI infrastructure. Specialized in Python, TypeScript, FastAPI, NestJS, and AWS.",
  openGraph: {
    title: "Chima Ojimma — Backend Engineer",
    description:
      "Building distributed systems and AI infrastructure across fintech, SaaS, and developer tooling.",
    url: "https://chima-peter.vercel.app/",
    siteName: "Chima Ojimma",
    images: [
      {
        url: "/chima_ojimma.jpeg",
        width: 1200,
        height: 630,
        alt: "Chima Ojimma - Backend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chima Ojimma — Backend Engineer",
    description:
      "Building distributed systems and AI infrastructure across fintech, SaaS, and developer tooling.",
    images: ["/chima_ojimma.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Chima Ojimma",
    "Backend Engineer",
    "Distributed Systems",
    "AI Infrastructure",
    "TypeScript",
    "Python",
    "FastAPI",
    "NestJS",
    "LangGraph",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <div className="noise" aria-hidden />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
