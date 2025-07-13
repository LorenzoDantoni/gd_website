"use client";

import { SanityDocument } from "@sanity/client";
import Link from "next/link";
import { ExternalLink, Calendar, Globe } from "lucide-react";

interface DocumentCardProps {
  document: SanityDocument;
}

const DocumentCard = ({ document }: DocumentCardProps) => {
  return (
    <Link
      href={document.fileURL}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="bg-white shadow-md border border-gray-200 rounded-lg p-3 hover:border-orange-500 hover:shadow-md transition-all duration-300 sm:p-4 sm:rounded-xl sm:hover:shadow-lg sm:hover:-translate-y-1">
        <div className="space-y-2 sm:space-y-0 sm:flex sm:items-start sm:justify-between">
          <div className="flex items-start space-x-3 min-w-0 flex-1">


            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 sm:text-lg sm:line-clamp-1">
                {document.title}
              </h3>

              <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1 sm:text-sm sm:mt-2">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{document.federation}</span>
              </div>

              <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1 sm:text-sm sm:mt-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>
                  {new Date(document.publishedAt).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>

          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300 flex-shrink-0 self-start sm:mt-1" />
        </div>

        {/* Hover indicator bar - thinner on mobile */}
        <div className="h-0.5 bg-gray-100 rounded-full mt-2 overflow-hidden sm:h-1 sm:mt-4">
          <div className="h-full bg-orange-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </div>
      </div>
    </Link>
  );
};

export default DocumentCard;
