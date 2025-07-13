import Link from "next/link";

interface FooterLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

export const FooterLink = ({ href, label, isExternal }: FooterLinkProps) => (
  <Link
    href={href}
    target={isExternal ? "_blank" : undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="inline-flex items-center text-gray-300 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-500 focus:translate-x-1"
  >
    {label}
  </Link>
);