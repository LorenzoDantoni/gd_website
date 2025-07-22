"use client";

import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar = () => {
  return (
    <header className="top-0 z-50 w-full bg-gray-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavbarDesktop />
        <NavbarMobile />
      </nav>
    </header>
  );
};