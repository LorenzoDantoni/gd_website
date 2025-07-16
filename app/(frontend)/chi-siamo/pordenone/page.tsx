import { News } from "@/components/News";
import { OtherRoles } from "@/components/OtherRoles";
import { ProvincialOrganization } from "@/components/ProvincialOrganization";
import { VipMembers } from "@/components/VipMembers";
import {
  vipPordenone,
  otherRolesPordenone,
  direzioneProvincialePordenone,
  assembleaProvincialePordenone,
} from "@/data/pordenone";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "@sanity/client";
import {
  postsByFederationQuery,
  documentsByFederationQuery,
} from "@/sanity/lib/queries";
import { LatestDocuments } from "@/components/LatestDocuments";
import ContactCard from "@/components/ContactCard";
import { contatti } from "@/data/contatti";
import Breadcrumb from "@/components/Breadcrumb";

export default async function PordenonePage() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsByFederationQuery,
    params: { federation: "Pordenone" },
  });
  const documents = await sanityFetch<SanityDocument[]>({
    query: documentsByFederationQuery,
    params: { federation: "Pordenone" },
  });

  return (
    <>
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg py-7 flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Federazione di Pordenone
          </h1>
        </div>
      </header>

      <Breadcrumb />

      <main>
        <VipMembers members={vipPordenone} />

        <OtherRoles title="Altri Incarichi" members={otherRolesPordenone} />

        {/* News Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <News posts={posts} title="Ultime News" subtitle="Pordenone" />
        </section>

        {/* Documents Section */}
        <LatestDocuments
          documents={documents}
          backgroundColor="bg-gray-200"
          title="Ultimi Documenti"
        />

        <ProvincialOrganization
          title="Organizzazione Provinciale"
          direzioneProvincialeMembers={direzioneProvincialePordenone}
          assembleaProvincialeMembers={assembleaProvincialePordenone}
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
              <ContactCard {...contatti.find(c => c.federation === 'Pordenone')} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
