import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "@sanity/client";
import { documentsQuery, documentFederationsQuery } from "@/sanity/lib/queries";
import DocumentFilter from "@/components/DocumentFilter";

export const revalidate = 60;

interface DocumentsPageProps {
  searchParams: {
    federation?: string;
    sort?: string;
    search?: string;
  };
}

const DocumentsPage = async ({ searchParams }: DocumentsPageProps) => {
  const { federation, sort, search } = (await searchParams);

  const documents = await sanityFetch<SanityDocument[]>({ 
    query: documentsQuery(federation, sort, search),
    params: federation ? { federation } : undefined,
  });

  const federations = await sanityFetch<string[]>({ query: documentFederationsQuery });

  return (
    <>
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg min-h-[20vh] flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Archivio Documenti
          </h1>
        </div>
      </header>

      <main>
        <DocumentFilter documents={documents} federations={federations} />
      </main>
    </>
  );
};

export default DocumentsPage;