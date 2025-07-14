"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setOpenSubMenu(null);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubMenu(null);
  };

  const handleSubMenuToggle = (href: string) => {
    setOpenSubMenu(openSubMenu === href ? null : href);
  };

  // The main navigation links
  const menuItems = [
    {
      href: "/chi-siamo",
      label: "Chi Siamo",
      submenu: [
        { href: "/chi-siamo/regionale", label: "Regionale" },
        { href: "/chi-siamo/commissione-garanzia", label: "Commissione di Garanzia" },
        { href: "/chi-siamo/udine", label: "Udine" },
        { href: "/chi-siamo/pordenone", label: "Pordenone" },
        { href: "/chi-siamo/trieste", label: "Trieste" },
        { href: "/chi-siamo/gorizia", label: "Gorizia" },
      ],
    },
    { href: "/news", label: "News" },
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
              <span className="text-xl font-semibold text-gray-900">Giovani Democratici FVG</span>
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
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="relative px-3 py-2 text-lg transition-colors duration-300 hover:text-orange-400"
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-3 text-md text-gray-700 hover:bg-gray-50 hover:text-orange-400 transition-colors duration-150"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
              <div key={item.href}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => handleSubMenuToggle(item.href)}
                      className="w-full flex items-center justify-center rounded-md px-3 py-2 text-lg text-gray-800 hover:bg-gray-100 hover:text-orange-500 transition-colors duration-200"
                    >
                      <ChevronDown
                        size={20}
                        className={`mr-2 text-gray-50 transform transition-transform duration-300 ${
                          openSubMenu === item.href ? "rotate-180" : "rotate-0"
                        }`}
                      />
                      <span>{item.label}</span>
                      <ChevronDown
                        size={20}
                        className={`ml-2 transform transition-transform duration-300 ${
                          openSubMenu === item.href ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {openSubMenu === item.href && (
                      <div className="mt-2 mb-1 mx-2 space-y-1 rounded-lg bg-gray-100 p-2 shadow-inner">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={closeMenu}
                            className="block rounded-md px-3 py-2 text-sm text-center font-light text-gray-600 hover:bg-white hover:text-orange-500 transition-colors duration-200"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-md px-3 py-2 text-lg text-center text-gray-800 hover:bg-orange-50 hover:text-orange-400"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
