"use client";

import Link from "next/link";
import Image from "next/image";
import { MENU_ITEMS } from "@/data/navbar_data";
import { type NavItem } from "@/data/navbar_data";

export const NavbarDesktop = () => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-y-4 py-4">
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

      <div className="flex items-center gap-x-8 ml-3">
        {MENU_ITEMS.map((item: NavItem) => (
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
  );
};
