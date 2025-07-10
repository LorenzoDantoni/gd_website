import { News } from "@/components/News";
import { OtherRoles } from "@/components/OtherRoles";
import { ProvincialOrganization } from "@/components/ProvincialOrganization";
import { VipMembers } from "@/components/VipMembers";
import {
  vipGorizia,
  otherRolesGorizia,
  direzioneProvincialeGorizia,
  assembleaProvincialeGorizia,
} from "@/data/gorizia";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "@sanity/client";
import {
  postsByFederationQuery,
  documentsByFederationQuery,
} from "@/sanity/lib/queries";
import { LatestDocuments } from "@/components/LatestDocuments";

export default async function GoriziaPage() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsByFederationQuery,
    params: { federation: "Gorizia" },
  });
  const documents = await sanityFetch<SanityDocument[]>({
    query: documentsByFederationQuery,
    params: { federation: "Gorizia" },
  });

  return (
    <>
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-lg min-h-[20vh] flex justify-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 mt-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Federazione di Gorizia
          </h1>
        </div>
      </header>

      <main>
        <VipMembers members={vipGorizia} />

        <OtherRoles title="Altri Incarichi" members={otherRolesGorizia} />

        {/* News Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <News posts={posts} title="Ultime News" subtitle="Gorizia" />
        </section>

        {/* Documents Section */}
        <LatestDocuments
          documents={documents}
          backgroundColor="bg-gray-200"
          title="Ultimi Documenti"
        />

        <ProvincialOrganization
          title="Organizzazione Provinciale"
          direzioneProvincialeMembers={direzioneProvincialeGorizia}
          assembleaProvincialeMembers={assembleaProvincialeGorizia}
        />
      </main>
    </>
  );
}
