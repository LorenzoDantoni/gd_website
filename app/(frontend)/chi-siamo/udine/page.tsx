import { News } from "@/components/News";
import { OtherRoles } from "@/components/OtherRoles";
import { ProvincialOrganization } from "@/components/ProvincialOrganization";
import { VipMembers } from "@/components/VipMembers";
import {
  vipUdine,
  otherRolesUdine,
  direzioneProvincialeUdine,
  assembleaProvincialeUdine,
} from "@/data/udine";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "@sanity/client";
import {
  postsByFederationQuery,
  documentsByFederationQuery,
} from "@/sanity/lib/queries";
import { LatestDocuments } from "@/components/LatestDocuments";
import ContactCard from "@/components/ContactCard";
import { contatti } from "@/data/contatti";

export default async function UdinePage() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsByFederationQuery,
    params: { federation: "Udine" },
  });
  const documents = await sanityFetch<SanityDocument[]>({
    query: documentsByFederationQuery,
    params: { federation: "Udine" },
  });

  return (
    <>
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg py-7 flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Federazione di Udine
          </h1>
        </div>
      </header>

      <main>
        <VipMembers members={vipUdine} />

        <OtherRoles title="Altri Incarichi" members={otherRolesUdine} />

        {/* News Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <News posts={posts} title="Ultime News" subtitle="Udine" />
        </section>

        {/* Documents Section */}
        <LatestDocuments
          documents={documents}
          backgroundColor="bg-gray-200"
          title="Ultimi Documenti"
        />

        <ProvincialOrganization
          title="Organizzazione Provinciale"
          direzioneProvincialeMembers={direzioneProvincialeUdine}
          assembleaProvincialeMembers={assembleaProvincialeUdine}
        />

        {/* Contatti Section */}
        <section className="bg-gray-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contatti
              </h2>
            </div>
            <div className="max-w-lg mx-auto">
              <ContactCard {...contatti.find(c => c.federation === 'Udine')} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
