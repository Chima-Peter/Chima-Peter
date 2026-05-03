import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://chima-peter.vercel.app/"),
  title: "Chima Peter Ojimma — Software Engineer",
  description:
    "Software Engineer building production systems with real-time data pipelines, AI orchestration, and enterprise SaaS. Specialized in TypeScript, Python, FastAPI, and Next.js.",
  openGraph: {
    title: "Chima Peter Ojimma — Software Engineer",
    description:
      "Building production systems with real-time data pipelines, AI orchestration, and enterprise SaaS.",
    url: "https://chima-peter.vercel.app/",
    siteName: "Chima Peter Ojimma",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chima Peter Ojimma - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chima Peter Ojimma — Software Engineer",
    description:
      "Building production systems with real-time data pipelines, AI orchestration, and enterprise SaaS.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Chima Peter Ojimma",
    "Software Engineer",
    "Full Stack Developer",
    "TypeScript",
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "AI Engineering",
    "Backend Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <div className="noise" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
