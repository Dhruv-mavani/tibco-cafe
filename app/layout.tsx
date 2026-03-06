import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Tibco | Quick Service Restaurant",
  description: "Experience the finest food and signature items at Tibco QSR. Fast, fresh, and delicious meals, pastries, and beverages served with speed and quality.",
  keywords: ["Tibco", "QSR", "Quick Service Restaurant", "Fast Food", "Tibco QSR", "Fresh Meals", "Quick Bites", "Beverages"],
  authors: [{ name: "Tibco" }],
  openGraph: {
    title: "Tibco | Quick Service Restaurant",
    description: "Experience the finest food and signature items at Tibco QSR. Fast, fresh, and delicious meals served with speed and quality.",
    type: "website",
    locale: "en_US",
    siteName: "Tibco QSR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tibco | Quick Service Restaurant",
    description: "Experience the finest food and signature items at Tibco QSR. Fast, fresh, and delicious meals served with speed and quality.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
