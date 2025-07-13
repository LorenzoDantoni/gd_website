import { ChevronRight } from "lucide-react";
import Link from "next/link";

const federations = [
  {
    name: "Gorizia",
    province: "GO",
    link: "/chi-siamo/gorizia",
  },
  {
    name: "Pordenone",
    province: "PN",
    link: "/chi-siamo/pordenone",
  },
  {
    name: "Trieste",
    province: "TS",
    link: "/chi-siamo/trieste",
  },
  {
    name: "Udine",
    province: "UD",
    link: "/chi-siamo/udine",
  },
];

export default function ChiSiamoPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg min-h-[20vh] flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Chi Siamo
          </h1>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto relative -top-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* History Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Le nostre radici
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Giovani Democratici (GD) </span>
                è l&#39;organizzazione giovanile del Partito Democratico che
                accoglie gli iscritti fino ai 30 anni. È nata nel 2008 dalla
                fusione tra Sinistra Giovanile (giovanile dei Democratici di
                Sinistra) e i Giovani della Margherita.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                La nostra Missione
              </h2>
              <p className="text-gray-700 leading-relaxed">
                I <span className="font-semibold">Giovani Democratici</span> del
                <span className="text-red-600">
                  {" "}
                  Friuli Venezia Giulia
                </span>{" "}
                promuovono la partecipazione dei giovani alla vita pubblica,
                rappresentando le loro istanze e contribuendo a costruire una
                società più giusta, sostenibile e inclusiva.
              </p>
            </div>
          </div>

          <div className="text-center mt-24">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Organizzazione
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
             Siamo articolati a livello regionale e provinciale
            </p>
          </div>

          {/* Main Organization Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
            {/* Regional Card */}
            <Link
              href="/chi-siamo/regionale"
              className="group block rounded-xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500">
                    Regionale
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Scopri la struttura, i membri e le attività del nostro
                    livello regionale.
                  </p>
                </div>
                <div className="mt-1 rounded-full bg-gray-100 p-2 transition-colors group-hover:bg-orange-100">
                  <ChevronRight className="h-6 w-6 text-gray-500 group-hover:text-orange-500" />
                </div>
              </div>
            </Link>

            {/* Commissione di Garanzia Card */}
            <Link
              href="/chi-siamo/commissione-garanzia"
              className="group block rounded-xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500">
                    Commissione di Garanzia
                  </h2>
                  <p className="mt-2 text-gray-600">
                    L&#39;organo che vigila sul rispetto dello Statuto e dei
                    regolamenti.
                  </p>
                </div>
                <div className="mt-1 rounded-full bg-gray-100 p-2 transition-colors group-hover:bg-orange-100">
                  <ChevronRight className="h-6 w-6 text-gray-500 group-hover:text-orange-500" />
                </div>
              </div>
            </Link>
          </div>

          {/* Federations Section */}
          <div className="mt-20">
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
                Federazioni Provinciali
              </h3>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {federations.map((fed) => (
                <Link
                  key={fed.province}
                  href={fed.link}
                  className="group flex flex-col items-center text-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-400 hover:-translate-y-1"
                >
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl font-bold text-orange-500">
                      {fed.province}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500">
                      {fed.name}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-orange-500">
                      Scopri di più
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
