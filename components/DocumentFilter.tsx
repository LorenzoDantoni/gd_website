"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SanityDocument } from "@sanity/client";
import DocumentCard from "@/components/DocumentCard";

interface DocumentFilterProps {
  documents: SanityDocument[];
  federations: string[];
}

export const DocumentFilter = ({
  documents,
  federations,
}: DocumentFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedFederation, setSelectedFederation] = useState(
    searchParams.get("federation") || "",
  );
  const [sortOrder, setSortOrder] = useState(
    searchParams.get("sort") || "desc",
  );
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedFederation) {
      params.set("federation", selectedFederation);
    } else {
      params.delete("federation");
    }
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    params.set("sort", sortOrder);
    router.push(`/documenti?${params.toString()}`);
  }, [selectedFederation, sortOrder, searchTerm, searchParams, router]);

  const handleClearFilters = () => {
    setSelectedFederation("");
    setSearchTerm("");
    setSortOrder("desc");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="mb-8 sm:mb-12">
        <div className="relative mb-6">
          <div className="relative bg-white/90 rounded-3xl border-2 border-gray-400 shadow-xl overflow-hidden">
            {/* Filter Content */}
            <div className="relative p-6 sm:p-8">
              {/* Filter Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                {/* Search Input - Takes more space */}
                <div className="lg:col-span-6">
                  <label
                    htmlFor="search-filter"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Cerca Documenti
                  </label>
                  <div className="relative group">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                      <svg
                        className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search-filter"
                      type="text"
                      placeholder="Cerca per titolo"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="block w-full rounded-2xl border-2 border-gray-200 bg-white/80 py-3 pl-11 pr-4 text-sm placeholder:text-gray-500 focus:border-orange-500 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Federation Filter */}
                <div className="lg:col-span-3">
                  <label
                    htmlFor="federation-filter"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Federazione
                  </label>
                  <div className="relative">
                    <select
                      id="federation-filter"
                      name="federation-filter"
                      className="block w-full rounded-2xl border-2 border-gray-200 bg-white/80 py-3 pl-4 pr-10 text-sm focus:border-orange-500 focus:bg-white appearance-none cursor-pointer"
                      value={selectedFederation}
                      onChange={(e) => setSelectedFederation(e.target.value)}
                    >
                      <option value="">Tutte</option>
                      {federations.map((fed) => (
                        <option key={fed} value={fed}>
                          {fed}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Sort Order Filter */}
                <div className="lg:col-span-3">
                  <label
                    htmlFor="sort-order"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Ordina per
                  </label>
                  <div className="relative">
                    <select
                      id="sort-order"
                      name="sort-order"
                      className="block w-full rounded-2xl border-2 border-gray-200 bg-white/80 py-3 pl-4 pr-10 text-sm focus:border-orange-500 focus:bg-white appearance-none cursor-pointer"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                    >
                      <option value="desc">Più Recenti</option>
                      <option value="asc">Più Vecchi</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Summary and Active Filters */}
              <div className="mt-6 pt-6 border-t border-gray-200/60">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  {/* Active Filters */}
                  <div className="flex items-center space-x-2">
                    {selectedFederation && (
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 ring-1 ring-orange-200/50 shadow-sm">
                        <span className="mr-1">📍</span>
                        {selectedFederation}
                        <button
                          onClick={() => setSelectedFederation("")}
                          className="ml-1.5 -mr-1 flex-shrink-0 h-4 w-4 rounded-full inline-flex items-center justify-center text-orange-500 hover:bg-orange-200 hover:text-orange-600 focus:outline-none focus:bg-orange-500 focus:text-white transition-all duration-200 transform hover:scale-110"
                        >
                          <span className="sr-only">Rimuovi filtro</span>
                          <svg
                            className="h-2 w-2"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 8 8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeWidth="1.5"
                              d="M1 1l6 6m0-6L1 7"
                            />
                          </svg>
                        </button>
                      </span>
                    )}
                    {searchTerm && (
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 ring-1 ring-blue-200/50 shadow-sm">
                        <span className="mr-1">🔍</span>
                        &#34;{searchTerm}&#34;
                        <button
                          onClick={() => setSearchTerm("")}
                          className="ml-1.5 -mr-1 flex-shrink-0 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-500 hover:bg-blue-200 hover:text-blue-600 focus:outline-none focus:bg-blue-500 focus:text-white transition-all duration-200 transform hover:scale-110"
                        >
                          <span className="sr-only">Rimuovi filtro</span>
                          <svg
                            className="h-2 w-2"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 8 8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeWidth="1.5"
                              d="M1 1l6 6m0-6L1 7"
                            />
                          </svg>
                        </button>
                      </span>
                    )}
                  </div>
                  {/* Results Count */}
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900 text-lg">
                        {documents.length}
                      </span>
                      <span className="ml-1">
                        {documents.length === 1
                          ? "risultato trovato"
                          : "risultati trovati"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="mx-auto max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
              Nessun documento trovato
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mb-4 max-w-xl leading-relaxed">
              Prova a cambiare i filtri o torna più tardi per nuovi contenuti.
            </p>
            <button
              onClick={handleClearFilters}
              className="inline-block rounded-full bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Rimuovi tutti i filtri
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentFilter;
