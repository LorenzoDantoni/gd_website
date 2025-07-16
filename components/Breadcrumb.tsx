"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Breadcrumb = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;
    const text = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

    return { href, text, isLast };
  });

  return (
    <nav className="w-full bg-gray-50 py-6 text-lg">
      <div className="mx-auto flex max-w-4xl items-center justify-center px-10">
        <Link href="/" className="text-gray-600 hover:text-orange-500">
          Home
        </Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        {breadcrumbs.map((breadcrumb) => (
          <React.Fragment key={breadcrumb.href}>
            <Link
              href={breadcrumb.href}
              className={`${
                breadcrumb.isLast
                  ? "text-orange-500 font-bold"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              {breadcrumb.text}
            </Link>
            {!breadcrumb.isLast && (
              <FaChevronRight className="mx-2 text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
