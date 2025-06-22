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

  const menuItems = [
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/news-eventi", label: "Eventi" },
    { href: "/documenti", label: "Documenti" },
    { href: "/contatti", label: "Contatti" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm absolute top-0 z-50 w-full border-b border-gray-100">
      <nav className="mx-auto px-6 sm:px-12 lg:px-18 md:py-2 lg:py-3">
        <div className="flex justify-between md:grid-cols-3 items-center h-20">
          {/* Logo section - Left */}
          <div className="flex items-center justify-start">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
            >
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/images/logo_gd_fvg.png"
                  alt="Logo Giovani Democratici FVG"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-xl font-semibold text-custom-text leading-tight">
                  GD FVG
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu - Center */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center md:space-x-2 lg:space-x-4">
              {menuItems.map((item, key) => (
                <Link
                  key={key}
                  href={item.href}
                  className="text-custom-text hover:text-custom-orange px-4 py-2 text-lg transition-all duration-200 relative group rounded-lg hover:bg-orange-50 min-w-max"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-custom-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end">
            {/* Desktop CTA */}
            <Link
              href="/iscriviti"
              className="hidden md:block bg-custom-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              ISCRIVITI
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="block md:hidden text-custom-text hover:text-custom-orange p-3 rounded-lg transition-colors duration-200 hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-100">
            <div className="flex flex-col items-center space-y-2">
              {menuItems.map((item, key) => (
                <Link
                  key={key}
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-lg text-custom-text hover:text-custom-orange hover:bg-orange-50 rounded-lg transition-colors duration-200 text-center min-w-[200px]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="pt-4 px-4 flex justify-center">
              <Link
                href="/iscriviti"
                onClick={closeMenu}
                className="block w-full bg-custom-orange hover:bg-orange-600 text-white text-center px-6 py-4 rounded-full font-semibold shadow-lg transition-colors duration-200 min-w-[200px]"
              >
                ISCRIVITI
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
