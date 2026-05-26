import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raj Kumar Gupta - Full Stack Developer | NIT Agartala",
  description: "Full Stack Developer, DSA enthusiast, and Competitive Programmer pursuing ECE at NIT Agartala (2027). Building impactful web applications with React, Next.js, Node.js, and more.",
  keywords: [
    "Raj Kumar Gupta",
    "Full Stack Developer",
    "DSA",
    "Competitive Programmer",
    "NIT Agartala",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "MongoDB",
    "Portfolio",
    "ECE 2027",
  ],
  authors: [{ name: "Raj Kumar Gupta" }],
  creator: "Raj Kumar Gupta",
  publisher: "Raj Kumar Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/rajkumar0932",
    title: "Raj Kumar Gupta - Full Stack Developer | NIT Agartala",
    description: "Full Stack Developer, DSA enthusiast, and Competitive Programmer pursuing ECE at NIT Agartala (2027).",
    siteName: "Raj Kumar Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Kumar Gupta - Full Stack Developer",
    description: "Full Stack Developer | DSA | Competitive Programmer | NIT Agartala ECE 2027",
    creator: "@RajKuma87824042",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://github.com/rajkumar0932" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
