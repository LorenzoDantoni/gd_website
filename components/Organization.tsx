import Link from "next/link";
import { Users, MapPin, Star, Shield } from "lucide-react";

const federations = [
  { name: "Trieste", members: 20, icon: <MapPin size={48} />, province: "TS" },
  { name: "Gorizia", members: 10, icon: <MapPin size={48} />, province: "GO" },
  { name: "Udine", members: 50, icon: <MapPin size={48} />, province: "UD" },
  {
    name: "Pordenone",
    members: 30,
    icon: <MapPin size={48} />,
    province: "PN",
  },
];

const federationUrl = (name: string) => `/chi-siamo/${name.toLowerCase()}`;

export const Organization = () => {
  return (
    <div className="w-full bg-gradient-to-br from-orange-400 to-orange-500 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          La nostra Organizzazione
        </h2>

        {/* Regional & Guarantee Commission Cards */}
        <div className="mt-20 flex flex-col lg:flex-row justify-center gap-12 lg:gap-8">
          {/* Regional Card */}
          <div className="relative w-full max-w-xl rounded-[30px] border border-orange-400 bg-gray-100 p-10 shadow-lg text-center transition-all duration-300 hover:scale-105 hover:border-black hover:shadow-orange-500/30">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform">
              <div className="rounded-full bg-orange-500 p-3 shadow-md text-white">
                <Star size={32} />
              </div>
            </div>
            <h3 className="mt-6 text-3xl font-extrabold text-orange-600">
              Regionale
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              Il cuore pulsante dell'organizzazione, che coordina le attività e
              definisce la linea politica in Friuli Venezia Giulia.
            </p>
            <Link
              href="/app/(frontend)/chi-siamo/regionale"
              className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              CONOSCI IL NOSTRO TEAM
            </Link>
          </div>

          {/* Commissione di Garanzia Card */}
          <div className="relative w-full max-w-xl rounded-[30px] border border-orange-400 bg-gray-100 p-10 shadow-lg text-center transition-all duration-300 hover:scale-105 hover:border-black hover:shadow-orange-500/30">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform">
              <div className="rounded-full bg-orange-500 p-3 shadow-md text-white">
                <Shield size={32} />
              </div>
            </div>
            <h3 className="mt-6 text-3xl font-extrabold text-orange-600">
              Commissione di Garanzia
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              L'organo che vigila sullo Statuto e il corretto funzionamento
              dell'organizzazione, garantendo i diritti degli iscritti.
            </p>
            <Link
              href="/app/(frontend)/chi-siamo/commissione-garanzia"
              className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              SCOPRI LA COMMISSIONE
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {federations.map((fed) => (
            <div
              key={fed.name}
              className="transform rounded-[22px] border-2 border-transparent bg-orange-50 p-8 text-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:border-black hover:shadow-orange-500/30"
            >
              <div className="flex items-center justify-center">
                <div
                  className="rounded-full bg-orange-500 p-4 text-white"
                  role="img"
                  aria-label="Location icon"
                >
                  {fed.icon}
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {fed.name}
              </h3>
              <p className="mt-2 text-gray-700">
                <Users className="inline-block h-5 w-5" /> {fed.members}{" "}
                iscritti
              </p>
              <Link
                href={federationUrl(fed.name)}
                className="mt-6 inline-block rounded-full bg-orange-500 px-5 py-2 font-semibold text-white transition-transform duration-300 hover:bg-orange-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Scopri di più
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
