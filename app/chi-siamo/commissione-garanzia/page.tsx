import Image from "next/image";
import { commissioneGaranzia } from "@/data/commissione-garanzia";
import { Scale, ShieldCheck, Users, Vote } from "lucide-react";

export default function CommissioneGaranziaPage() {
  return (
    <div className="bg-gray-50">
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-lg min-h-[20vh] flex justify-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 mt-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Commissione di Garanzia
          </h1>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Sezione Ruoli e Funzioni */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ruoli e Funzioni
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 border border-gray-200/80">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-700">
                La Commissione di Garanzia è l'organo di giurisdizione interna del partito. È un organo collegiale, autonomo e indipendente, che ha il compito di vigilare sul rispetto dello Statuto, dei regolamenti e del Codice Etico da parte degli iscritti, degli organi di partito e dei rappresentanti istituzionali.
              </p>
              <p className="mt-10 text-2xl font-bold text-gray-800">
                Le sue funzioni principali includono:
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <Scale className="h-10 w-10 text-orange-500 mx-auto" />
                <p className="mt-4 text-lg font-semibold text-gray-800">Interpretare lo Statuto e i regolamenti in caso di controversie.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <Users className="h-10 w-10 text-orange-500 mx-auto" />
                <p className="mt-4 text-lg font-semibold text-gray-800">Risolvere le controversie tra iscritti o tra iscritti e organi del partito.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <ShieldCheck className="h-10 w-10 text-orange-500 mx-auto" />
                <p className="mt-4 text-lg font-semibold text-gray-800">Istruttoria e decisione sui procedimenti disciplinari.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <Vote className="h-10 w-10 text-orange-500 mx-auto" />
                <p className="mt-4 text-lg font-semibold text-gray-800">Vigilare sulla regolarità dei congressi e delle primarie.</p>
              </div>
            </div>
          </div>

          {/* Sezione Membri */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Membri
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-center">
              {commissioneGaranzia.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center text-center rounded-lg border border-gray-300 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-32 w-32 rounded-full overflow-hidden shadow-md">
                    <Image
                      src={member.imageUrl}
                      alt={`Foto di ${member.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-4 text-base font-semibold text-orange-500">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
