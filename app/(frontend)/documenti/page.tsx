import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "@sanity/client";
import { documentsQuery, documentFederationsQuery } from "@/sanity/lib/queries";
import DocumentFilter from "@/components/DocumentFilter";
import Breadcrumb from "@/components/Breadcrumb";

export const revalidate = 60;

interface DocumentsPageProps {
  searchParams: Promise<{
    federation?: string;
    sort?: string;
    search?: string;
  }>;
}

const DocumentsPage = async ({ searchParams }: DocumentsPageProps) => {
  const params = await searchParams;
  const { federation, sort, search } = params;

  const documents = await sanityFetch<SanityDocument[]>({
    query: documentsQuery(federation, sort, search),
    params: federation ? { federation } : undefined,
  });

  const federations = await sanityFetch<string[]>({
    query: documentFederationsQuery,
  });

  return (
    <>
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg py-7 flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Archivio Documenti
          </h1>
        </div>
      </header>

      <Breadcrumb />

      <main>
        <DocumentFilter documents={documents} federations={federations} />
      </main>
    </>
  );
};

export default DocumentsPage;
