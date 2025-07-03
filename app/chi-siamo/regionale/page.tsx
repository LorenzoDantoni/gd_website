import Image from "next/image";
import { User } from "lucide-react";
import {assembleaRegionale, direzioneRegionale, segreteriaRegionale, vipRegionali} from "@/data/regionale";


export default function RegionalePage() {
  return (
    <div className="bg-gray-50">
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-lg min-h-[20vh] flex justify-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 mt-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Organizzazione Regionale (FVG)
          </h1>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {vipRegionali.map((member) => (
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
                {/*<p className="mt-4 text-gray-600 text-sm">{member.bio}</p>*/}
              </div>
            ))}
          </div>

          <div className="mt-24 bg-white rounded-lg shadow-md p-8 border border-gray-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl  pb-4">
                Segreteria Regionale
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {segreteriaRegionale.map((member) => (
                <div key={member.name} className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2">
                  <User className="h-5 w-5 text-orange-500" />
                  <p className="text-base font-medium text-gray-800">{member.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-md p-8 border border-gray-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
                Direzione Regionale
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {direzioneRegionale.map((member) => (
                <div key={member.name} className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2">
                  <User className="h-5 w-5 text-orange-500" />
                  <p className="text-base font-medium text-gray-800">{member.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-md p-8 border border-gray-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
                Assemblea Regionale
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {assembleaRegionale.map((member) => (
                <div key={member.name} className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2">
                  <User className="h-5 w-5 text-orange-500" />
                  <p className="text-base font-medium text-gray-800">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
