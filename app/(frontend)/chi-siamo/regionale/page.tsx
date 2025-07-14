import { User } from "lucide-react";
import Image from "next/image";
import {
  assembleaRegionale,
  direzioneRegionale,
  segreteriaRegionale,
  vipRegionali,
} from "@/data/regionale";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "@sanity/client";
import {
  documentsByFederationQuery,
  postsByFederationQuery,
} from "@/sanity/lib/queries";
import { LatestDocuments } from "@/components/LatestDocuments";
import { News } from "@/components/News";
import { contatti } from "@/data/contatti";
import ContactCard from "@/components/ContactCard";

export default async function RegionalePage() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsByFederationQuery,
    params: { federation: "Regionale" },
  });
  const documents = await sanityFetch<SanityDocument[]>({
    query: documentsByFederationQuery,
    params: { federation: "Regionale" },
  });

  return (
    <>
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg min-h-[20vh] flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Regionale (FVG)
          </h1>
        </div>
      </header>

      <main>
        {/* Vip Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-16 sm:py-24">
          <News posts={posts} title="Ultime News" subtitle="" />
        </section>

        {/* Documents Section */}
        <LatestDocuments documents={documents} backgroundColor="bg-gray-50" />

        {/* Segreteria Regionale */}
        <section className="bg-gray-200 py-10 pt-20 sm:py-12 sm:pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
                  Segreteria Regionale
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {segreteriaRegionale.map((member) => (
                  <div
                    key={member.name}
                    className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2"
                  >
                    <User className="h-5 w-5 text-orange-500" />
                    <p className="text-base font-medium text-gray-800">
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Direzione Regionale */}
        <section className="bg-gray-200 py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
                  Direzione Regionale
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {direzioneRegionale.map((member) => (
                  <div
                    key={member.name}
                    className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2"
                  >
                    <User className="h-5 w-5 text-orange-500" />
                    <p className="text-base font-medium text-gray-800">
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Assemblea Regionale */}
        <section className="bg-gray-200 py-10 pb-20 sm:py-12 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
                  Assemblea Regionale
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {assembleaRegionale.map((member) => (
                  <div
                    key={member.name}
                    className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2"
                  >
                    <User className="h-5 w-5 text-orange-500" />
                    <p className="text-base font-medium text-gray-800">
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contatti Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contatti
              </h2>
            </div>
            <div className="max-w-lg mx-auto">
              <ContactCard
                {...contatti.find((c) => c.federation === "Regionale")}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
