import Image from "next/image";
import { User, Download } from "lucide-react";
import { News } from "@/components/News";
import { vipUdine, otherRolesUdine, documentsUdine, direzioneProvincialeUdine, assembleaProvincialeUdine } from "@/data/udine";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "@sanity/client";
import { postsByFederationQuery } from "@/sanity/lib/queries";

export default async function UdinePage() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsByFederationQuery, params: { federation: "Udine" } });
  return (
    <>
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-lg min-h-[20vh] flex justify-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 mt-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Federazione di Udine
          </h1>
        </div>
      </header>

      <main>
        {/* VIP Members */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {vipUdine.map((member) => (
                <div
                  key={member.name}
                  className="w-full max-w-xs flex flex-col items-center text-center rounded-lg border border-gray-300 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
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

        {/* Other Roles */}
        <section className="bg-gray-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Altri Incarichi
              </h2>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {otherRolesUdine.map((member) => (
                  <div key={member.name} className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2">
                    <User className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="text-base font-medium text-gray-800">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <News posts={posts} />
        </section>

        {/* Documents Section */}
        <section className="bg-gray-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Documenti Utili
              </h2>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documentsUdine.map((doc) => (
                  <a href={doc.link} key={doc.title} className="bg-gray-100 p-6 rounded-lg flex items-center justify-between border border-gray-200 hover:bg-gray-200 transition-colors group">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 group-hover:text-orange-500">{doc.title}</p>
                      <p className="text-gray-600">{doc.description}</p>
                    </div>
                    <Download className="h-8 w-8 text-orange-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Organizzazione Provinciale */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Organizzazione Provinciale
              </h2>
            </div>
            <div className="space-y-16">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-4">
                    Direzione Provinciale
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {direzioneProvincialeUdine.map((member) => (
                    <div key={member.name} className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2">
                      <User className="h-5 w-5 text-orange-500" />
                      <p className="text-base font-medium text-gray-800">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-4">
                    Assemblea Provinciale
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {assembleaProvincialeUdine.map((member) => (
                    <div key={member.name} className="bg-gray-100 p-4 rounded-lg text-center flex items-center justify-center space-x-2">
                      <User className="h-5 w-5 text-orange-500" />
                      <p className="text-base font-medium text-gray-800">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
