import Link from "next/link";
import { SanityDocument } from "@sanity/client";
import DocumentCard from "@/components/DocumentCard";

interface LatestDocumentsProps {
  documents: SanityDocument[];
  backgroundColor: string;
  title?: string;
}

export function LatestDocuments({ documents, backgroundColor, title = "Ultimi Documenti" }: LatestDocumentsProps) {
  return (
    <section className={`${backgroundColor} py-16 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <DocumentCard key={doc._id} document={doc} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/documenti" className="inline-block rounded-full bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              Vedi tutti i documenti
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
