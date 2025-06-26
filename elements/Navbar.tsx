"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // The main navigation links
  const menuItems = [
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/news-eventi", label: "Eventi" },
    { href: "/iscriviti", label: "Iscriviti" },
    { href: "/documenti", label: "Documenti" },
    { href: "/contatti", label: "Contatti" },
  ];

  return (
    <header className="top-0 z-50 w-full bg-gray-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*
          MOBILE HEADER (lg:hidden)
          Simple, classic layout with logo on the left and hamburger on the right.
        */}
        <div className="relative flex h-20 items-center justify-between lg:hidden">
          {/* Mobile Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              <div className="relative h-12 w-12">
                <Image
                  src="/images/logo_gd_fvg.png"
                  alt="Logo Giovani Democratici FVG"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-gray-900">GD FVG</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400"
              aria-expanded={isMenuOpen}
              aria-label="Apri menù principale"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/*
          DESKTOP HEADER (hidden lg:flex)
          Centered logo above the navigation links.
        */}
        <div className="hidden lg:flex flex-col items-center gap-y-4 py-4">
          {/* Desktop Logo */}
          <Link href="/" className="group">
            <div className="relative h-36 w-36">
              <Image
                src="/images/logo_gd_fvg.png"
                alt="Logo Giovani Democratici FVG"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-x-8 ml-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-lg transition-colors duration-300 hover:text-orange-400 group"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/*
        MOBILE MENU PANEL
        This panel slides down from the top on mobile when the hamburger is clicked.
      */}
      {isMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-md px-3 py-2 text-lg text-center text-gray-700 hover:bg-orange-50 hover:text-orange-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
