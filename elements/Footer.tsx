import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FooterSection } from "./FooterSection";
import { SocialLink } from "./SocialLink";

const usefulLinks = [
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/news", label: "News" },
  { href: "/iscriviti", label: "Iscriviti" },
  { href: "/documenti", label: "Documenti" },
  { href: "/contatti", label: "Contatti" },
];

const federations = [
  { href: "/chi-siamo/gorizia", label: "GD Gorizia" },
  { href: "/chi-siamo/pordenone", label: "GD Pordenone" },
  { href: "/chi-siamo/trieste", label: "GD Trieste" },
  { href: "/chi-siamo/udine", label: "GD Udine" },
];

const externalLinks = [
  { href: "https://www.partitodemocraticofvg.it/", label: "PD FVG 🠖", isExternal: true },
  { href: "https://www.partitodemocratico.it/", label: "PD Nazionale 🠖", isExternal: true },
];

const socialLinks = [
  { href: "#", 'aria-label': "Seguici su Facebook", icon: <FaFacebook size={25} /> },
  { href: "#", 'aria-label': "Seguici su Instagram", icon: <FaInstagram size={25} /> },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-gray-100"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Logo Section - Mobile First */}
            <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-center text-center mb-8 sm:mb-0">
              <Link
                href="/"
                className="group inline-block mb-4 transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-lg"
                aria-label="Torna alla homepage"
              >
                <Image
                  src="/images/logo_gd_fvg.png"
                  alt="Logo Giovani Democratici Friuli Venezia Giulia"
                  width={100}
                  height={100}
                  className="transition-opacity duration-300 group-hover:opacity-90"
                  priority
                />
              </Link>
              <div className="space-y-1">
                <p className="text-xl font-bold text-white tracking-wide">
                  Giovani Democratici <br/> Friuli Venezia Giulia
                </p>
              </div>
            </div>

            <FooterSection title="Link Utili" links={usefulLinks} />
            <FooterSection title="Federazioni" links={federations} />

            {/* Social Media */}
            <div className="lg:col-span-2 text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b border-gray-600">
                Seguici
              </h3>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {socialLinks.map((link) => (
                  <SocialLink key={link['aria-label']} {...link} />
                ))}
              </div>
            </div>

            <FooterSection title="Link Esterni" links={externalLinks} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              &copy; {currentYear} Giovani Democratici FVG. Tutti i diritti
              riservati.
            </p>
            <nav
              aria-label="Link legali"
              className="flex items-center gap-4 text-sm justify-center sm:justify-end"
            >
              <Link
                href="/"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200 focus:outline-none focus:text-orange-500"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-500">•</span>
              <Link
                href="/"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200 focus:outline-none focus:text-orange-500"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
