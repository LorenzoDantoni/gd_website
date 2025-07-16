"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);

const PostCard = ({ post }: { post: SanityDocument }) => {
  return (
    <Link
      href={`/news/${post.slug.current}`}
      key={post._id}
      className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {post.cardImage && (
        <div className="relative overflow-hidden aspect-[16/9]">
          <Image
            src={builder.image(post.cardImage).url()}
            alt={post?.cardImage?.alt}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          {/* Category Badge */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-orange-500">
              <span className="inline-block rounded-full bg-orange-100 px-3 py-1">
                {post.federation}
              </span>
            </p>
            <p className="text-sm text-gray-500">{post.publishedAt}</p>
          </div>

          {/* Title and Excerpt */}
          <div className="mt-4 block">
            <p className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
              {post.title}
            </p>
            <div className="mt-3 text-base text-gray-500 line-clamp-3">
              <PortableText value={post.body} />
            </div>
          </div>
        </div>

        {/* Read More Link */}
        <div className="mt-6">
          <div className="inline-flex items-center gap-x-2 font-semibold text-orange-500 transition-colors duration-300 group-hover:text-orange-600">
            Leggi tutto
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
