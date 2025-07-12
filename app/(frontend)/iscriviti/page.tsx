import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Iscriviti",
  description:
    "Iscriviti ai Giovani Democratici del Friuli-Venezia Giulia e partecipa attivamente alla vita politica del territorio.",
};

const IscrivitiPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg min-h-[20vh] flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Tesseramento
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Why Enroll Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
                Perché tesserarsi?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Entra a far parte della nostra comunità e contribuisci a
                costruire il futuro del Friuli-Venezia Giulia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Partecipazione Attiva
                </h3>
                <p className="text-gray-600">
                  Contribuisci alle decisioni politiche e partecipa attivamente
                  alla vita democratica del territorio.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Formazione Politica
                </h3>
                <p className="text-gray-600">
                  Accedi a corsi, seminari e attività formative per sviluppare
                  le tue competenze politiche e civiche.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Impatto Reale
                </h3>
                <p className="text-gray-600">
                  Lavora su progetti concreti che migliorano la vita dei
                  cittadini del Friuli-Venezia Giulia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Enroll Section */}
        <section className="py-16 bg-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
                Come tesserarsi
              </h2>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-2xl border border-gray-100">
              <div className="p-8 md:p-12">
                {/* Current Process */}
                <div className="bg-orange-100 rounded-lg p-6 border-l-4 border-orange-500 mb-10">
                  <div className="text-center">
                    <div className="ml-4">
                      {/*<h3 className="text-xl font-semibold text-gray-900 mb-2">Processo Attuale</h3>*/}
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Attualmente per unirti ai{" "}
                        <span className="font-semibold">
                          Giovani Democratici FVG
                        </span>{" "}
                        è necessario iscriversi al{" "}
                        <span className="font-semibold">
                          Partito Democratico
                        </span>
                        . L&#39;iscrizione ti garantisce
                        <span className="font-semibold">
                          {" "}
                          pieni diritti
                        </span>{" "}
                        nei congressi e assemblee dei Giovani Democratici.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Steps */}
                <div className="mb-10">
                  <div className="flex items-start px-18">
                    <div className="flex-shrink-0 mt-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">
                          ✔
                        </span>
                      </div>
                    </div>
                    <div className="ml-6">
                      {/*<h4 className="text-lg font-semibold text-gray-900 mb-2">Iscriviti al Partito Democratico</h4>*/}
                      <p className="text-gray-700 text-lg">
                        Compila il modulo di iscrizione al{" "}
                        <span className="font-semibold">PD</span> cliccando il
                        link qui sotto e spunta la casella{" "}
                        <span className="italic">
                          &#34;Voglio essere iscritto ai Giovani Democratici&#34;
                        </span>{" "}
                        per tesserarti automaticamente ai Giovani Democratici.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-orange-100 rounded-lg p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Pronto a Iniziare?
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      Unisciti a noi e inizia a fare la differenza.
                    </p>
                  </div>

                  <Link
                    href="https://www.hub.partitodemocratico.it/join"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Iscriviti al Partito Democratico
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
                Hai domande?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
                Per qualsiasi dubbio, informazione aggiuntiva
                sull&apos;iscrizione o sulle nostre attività, non esitare a
                contattarci. Siamo qui per aiutarti!
              </p>
              <Link
                href="/contatti"
                className="inline-block rounded-full bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IscrivitiPage;
