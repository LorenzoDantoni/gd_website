"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SanityDocument } from "@sanity/client";
import DocumentCard from "@/components/DocumentCard";

interface DocumentFilterProps {
  documents: SanityDocument[];
  federations: string[];
}

// TODO: same as News filter, can be refactored

export const DocumentFilter = ({ documents, federations }: DocumentFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedFederation, setSelectedFederation] = useState(
    searchParams.get("federation") || "",
  );
  const [sortOrder, setSortOrder] = useState(
    searchParams.get("sort") || "desc",
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedFederation) {
      params.set("federation", selectedFederation);
    } else {
      params.delete("federation");
    }
    params.set("sort", sortOrder);
    router.push(`/documenti?${params.toString()}`);
  }, [selectedFederation, sortOrder, searchParams, router]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Modern Filter Section */}
      <div className="mb-8 sm:mb-12">
        {/* Mobile-first sticky filter bar */}
        <div className="sticky top-0 z-10 bg-white backdrop-blur-md border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Federation Filter */}
            <div className="flex-1 sm:max-w-sm">
              <label htmlFor="federation-filter" className="block text-sm font-semibold text-gray-900 mb-2">
                Filtra per Federazione
              </label>
              <div className="relative">
                <select
                  id="federation-filter"
                  name="federation-filter"
                  className="block w-full pl-4 pr-10 py-3 text-sm bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 appearance-none hover:border-gray-400"
                  value={selectedFederation}
                  onChange={(e) => setSelectedFederation(e.target.value)}
                >
                  <option value="">Tutte le Federazioni</option>
                  {federations.map((fed) => (
                    <option key={fed} value={fed}>
                      {fed}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex flex-col sm:items-end">
              <span className="block text-sm font-semibold text-gray-900 mb-2">
                Ordina per
              </span>
              <div className="flex rounded-xl border border-gray-300 bg-gray-50 p-1">
                <button
                  type="button"
                  className={`flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    sortOrder === "desc"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white"
                  }`}
                  onClick={() => setSortOrder("desc")}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Più Recenti
                </button>
                <button
                  type="button"
                  className={`flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    sortOrder === "asc"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white"
                  }`}
                  onClick={() => setSortOrder("asc")}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Più Vecchi
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              {documents.length} {documents.length === 1 ? 'documento trovato' : 'documenti trovati'}
              {selectedFederation && (
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  {selectedFederation}
                  <button
                    onClick={() => setSelectedFederation("")}
                    className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-orange-600 hover:bg-orange-200 hover:text-orange-700 transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      {documents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:gap-10">
          {documents.map((document) => (
            <DocumentCard key={document?._id} document={document} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto max-w-md">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Nessun documento trovato</h3>
            <p className="mt-2 text-sm text-gray-600">
              Prova a cambiare i filtri o torna più tardi per nuovi contenuti.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentFilter;