"use client";

import Link from "next/link";
import { SanityDocument } from "@sanity/client";
import PostCard from "@/components/PostCard";

interface NewsProps {
  posts: SanityDocument[];
  title?: string;
  subtitle?: string;
}

export const News = ({ posts, title = "News & Eventi", subtitle = "Resta aggiornato sulle nostre iniziative" }: NewsProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          {subtitle}
        </p>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        {posts.map((post) => (
          <PostCard key={post?._id} post={post}/>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <Link
          href="/news"
          className="inline-block rounded-full bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Vedi tutte le news
        </Link>
      </div>
    </div>
  );
};
