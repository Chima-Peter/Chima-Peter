import type { Metadata, Viewport } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://chima-peter.vercel.app/"),
  title: "Chima Ojimma – Full Stack Engineer",
  description:
    "I'm Chima Ojimma, a full stack engineer with experience building performant web applications using modern technologies like Next.js, React, Node.js, and PostgreSQL.",
  openGraph: {
    title: "Chima Ojimma – Full Stack Developer & Engineer",
    description:
      "Explore my portfolio featuring full stack projects, scalable backend systems, and modern UI/UX design.",
    url: "https://chima-peter.vercel.app/",
    siteName: "Chima Ojimma Portfolio",
    images: [
      {
        url: "/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Chima Ojimma Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chima Ojimma – Full Stack Developer",
    description:
      "Full stack developer portfolio featuring projects built with Next.js, TypeScript, Prisma, and more.",
    images: ["/icon.jpg"],
    creator: "@he_mobs",
  },
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg",
    shortcut: "/icon.jpg",
    other: [
      {
        rel: "mask-icon",
        url: "/icon.jpg",
        color: "#080E0B",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    },
  },
  keywords: [
    "Chima Ojimma",
    "Full stack developer",
    "Web developer portfolio",
    "Next.js developer",
    "React developer",
    "TypeScript projects",
    "Node.js",
    "Prisma",
    "React Native",
    "Python",
    "Web scraping",
    "Modern web development",
  ],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sen.variable}`}>
        {children}
      </body>
      <Analytics />
    </html>
  );
}
