'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    category: "Evento",
    title: "Assemblea Regionale: Rinnoviamo Insieme il Futuro del FVG",
    date: "15 Luglio 2025",
    excerpt:
      "Partecipa alla nostra assemblea annuale per discutere le nuove proposte e eleggere i rappresentanti. Un momento fondamentale per la vita democratica della nostra organizzazione.",
    imageUrl: "/images/gd_conti.jpg", // Placeholder, replace with actual image
    link: "/news/assemblea-regionale-2025",
    province: "Regionale",
  },
  {
    id: 2,
    category: "Iniziativa",
    title: "Banchetto informativo e raccolta firme a Udine",
    date: "12 Luglio 2025",
    excerpt:
      "Saremo in Piazza della Libertà per incontrare i cittadini, presentare le nostre idee e raccogliere firme per la proposta di legge sull'ambiente. Ti aspettiamo!",
    imageUrl: "/images/gd_conti_cropped.jpg", // Placeholder, replace with actual image
    link: "/news/banchetto-udine-luglio-2025",
    province: "Udine",
  },
  {
    id: 3,
    category: "Comunicato",
    title:
      "Nuove politiche giovanili: le nostre proposte al Consiglio Regionale",
    date: "10 Luglio 2025",
    excerpt:
      "Abbiamo presentato un pacchetto di proposte concrete per il lavoro, la casa e la formazione dei giovani in Friuli Venezia Giulia. Leggi il documento completo.",
    imageUrl: "/images/gd_conti.jpg", // Placeholder, replace with actual image
    link: "/news/proposte-politiche-giovanili",
    province: "Regionale",
  },
];

export const News = ({ province }: { province?: string }) => {
  const filteredNews = province
    ? newsItems.filter((item) => item.province === province)
    : newsItems;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          News & Eventi
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Resta aggiornato sulle nostre iniziative
        </p>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
        {filteredNews.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative overflow-hidden aspect-[16/9]">
              <Image
                src={item.imageUrl}
                alt={`Immagine per "${item.title}"`}
                fill
                className="object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div className="flex-1">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-orange-500">
                    <span className="inline-block rounded-full bg-orange-100 px-3 py-1">
                      {item.category}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>

                {/* Title and Excerpt */}
                <Link href={item.link} className="mt-4 block">
                  <p className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                    {item.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500 line-clamp-3">
                    {item.excerpt}
                  </p>
                </Link>
              </div>

              {/* Read More Link */}
              <div className="mt-6">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-x-2 font-semibold text-orange-500 transition-colors duration-300 group-hover:text-orange-600"
                >
                  Leggi tutto
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <Link
          href="/news-eventi"
          className="inline-block rounded-full bg-orange-400 px-8 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Vedi tutte le news
        </Link>
      </div>
    </div>
  );
};
