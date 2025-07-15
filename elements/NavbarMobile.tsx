"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { MENU_ITEMS } from "@/data/navbar_data";
import { type NavItem } from "@/data/navbar_data";

export const NavbarMobile = () => {
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

  return (
    <>
      <div className="relative flex h-20 items-center justify-between lg:hidden">
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
            <span className="text-xl font-semibold text-gray-900">
              Giovani Democratici FVG
            </span>
          </Link>
        </div>

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

      {isMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {MENU_ITEMS.map((item: NavItem) => (
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
                          openSubMenu === item.href
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      />
                      <span>{item.label}</span>
                      <ChevronDown
                        size={20}
                        className={`ml-2 transform transition-transform duration-300 ${
                          openSubMenu === item.href
                            ? "rotate-180"
                            : "rotate-0"
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
    </>
  );
};
