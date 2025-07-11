import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

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

            {/* Link Utili */}
            <div className="lg:col-span-2 text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b border-gray-600">
                Link Utili
              </h3>
              <nav aria-label="Link utili">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/chi-siamo"
                      className="inline-flex items-center text-gray-300 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-500 focus:translate-x-1"
                    >
                      Chi Siamo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      className="inline-flex items-center text-gray-300 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-500 focus:translate-x-1"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documenti"
                      className="inline-flex items-center text-gray-300 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-500 focus:translate-x-1"
                    >
                      Documenti
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contatti"
                      className="inline-flex items-center text-gray-300 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-500 focus:translate-x-1"
                    >
                      Contatti
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Federazioni */}
            <div className="lg:col-span-2 text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b border-gray-600">
                Federazioni
              </h3>
              <nav aria-label="Federazioni provinciali">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center text-gray-300 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-500 focus:translate-x-1"
                    >
                      GD Gorizia
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center text-gray-300 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-500 focus:translate-x-1"
                    >
                      GD Pordenone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center text-gray-300 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-500 focus:translate-x-1"
                    >
                      GD Trieste
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center text-gray-300 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-500 focus:translate-x-1"
                    >
                      GD Udine
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-2 text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b border-gray-600">
                Seguici
              </h3>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-orange-600 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Seguici su Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-orange-600 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Seguici su Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Link Esterni */}
            <div className="lg:col-span-2 text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b border-gray-600">
                Link Esterni
              </h3>
              <nav aria-label="Link esterni">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.partitodemocraticofvg.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-300 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-500 focus:translate-x-1"
                    >
                      PD FVG
                      <svg
                        className="w-3 h-3 ml-1 opacity-70"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.partitodemocratico.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-300 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-orange-500 focus:translate-x-1"
                    >
                      PD Nazionale
                      <svg
                        className="w-3 h-3 ml-1 opacity-70"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
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
