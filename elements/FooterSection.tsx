import { FooterLink } from "./FooterLink";

interface FooterSectionProps {
  title: string;
  links: { href: string; label: string; isExternal?: boolean }[];
}

export const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div className="lg:col-span-2 text-center sm:text-left">
    <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b border-gray-600">
      {title}
    </h3>
    <nav aria-label={title}>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  </div>
);