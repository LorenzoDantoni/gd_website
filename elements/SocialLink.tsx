import { ReactNode } from 'react';
import Link from "next/link";

interface SocialLinkProps {
  href: string;
  'aria-label': string;
  icon: ReactNode;
}

export const SocialLink = ({ href, 'aria-label': ariaLabel, icon }: SocialLinkProps) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center text-gray-300 hover:text-orange-500 transition-colors duration-300 hover:scale-110"
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </Link>
);