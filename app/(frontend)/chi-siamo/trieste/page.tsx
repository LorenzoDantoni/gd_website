import { News } from "@/components/News";
import { OtherRoles } from "@/components/OtherRoles";
import { ProvincialOrganization } from "@/components/ProvincialOrganization";
import { VipMembers } from "@/components/VipMembers";
import {
  vipTrieste,
  otherRolesTrieste,
  direzioneProvincialeTrieste,
  assembleaProvincialeTrieste,
} from "@/data/trieste";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "@sanity/client";
import {
  postsByFederationQuery,
  documentsByFederationQuery,
} from "@/sanity/lib/queries";
import { LatestDocuments } from "@/components/LatestDocuments";

export default async function TriestePage() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsByFederationQuery,
    params: { federation: "Trieste" },
  });
  const documents = await sanityFetch<SanityDocument[]>({
    query: documentsByFederationQuery,
    params: { federation: "Trieste" },
  });

  return (
    <>
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-lg min-h-[20vh] flex justify-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 mt-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Federazione di Trieste
          </h1>
        </div>
      </header>

      <main>
        <VipMembers members={vipTrieste} />

        <OtherRoles title="Altri Incarichi" members={otherRolesTrieste} />

        {/* News Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <News posts={posts} title="Ultime News" subtitle="Trieste" />
        </section>

        {/* Documents Section */}
        <LatestDocuments
          documents={documents}
          backgroundColor="bg-gray-200"
          title="Ultimi Documenti"
        />

        <ProvincialOrganization
          title="Organizzazione Provinciale"
          direzioneProvincialeMembers={direzioneProvincialeTrieste}
          assembleaProvincialeMembers={assembleaProvincialeTrieste}
        />
      </main>
    </>
  );
}
