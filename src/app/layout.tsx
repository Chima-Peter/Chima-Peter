import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
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
