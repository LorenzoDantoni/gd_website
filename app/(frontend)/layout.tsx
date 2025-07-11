import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/elements/Navbar";
import Footer from "@/elements/Footer";
import React from "react";
import { Roboto } from 'next/font/google'

export const metadata: Metadata = {
  title: "GD FVG",
  description: "Giovani Democratici - Friuli Venezia Giulia",
  icons: {
    icon: '/favicon.ico',
  },
};

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={roboto.className} suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="flex flex-col overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
