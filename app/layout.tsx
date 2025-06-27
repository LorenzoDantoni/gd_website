import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/elements/Navbar";
import Footer from "@/elements/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "GD FVG",
  description: "Giovani Democratici - Friuli Venezia Giulia",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
