import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "@sanity/client";
import { postQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import DocumentCard from "@/components/DocumentCard";
import Breadcrumb from "@/components/Breadcrumb";

export const revalidate = 60;
const builder = imageUrlBuilder(client);

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug },
  });

  console.log(slug);

  if (!post) return notFound();

  const formattedDate = post?.publishedAt
    ? format(new Date(post.publishedAt), "dd MMMM yyyy", { locale: it })
    : "";

  return (
    <>
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 text-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight mb-6">
              {post.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white text-lg">
              {post?.federation && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-medium">{post.federation}</span>
                </div>
              )}

              {post?.federation && formattedDate && (
                <div className="hidden sm:block w-1 h-1 bg-orange-200 rounded-full"></div>
              )}

              {formattedDate && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <time dateTime={post.publishedAt} className="font-medium">
                    {formattedDate}
                  </time>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <Breadcrumb />

      <main className="py-16 sm:py-4">
        <article className="mx-auto max-w-4xl">
          {post?.postImage && (
            <div className="mt-16 px-4 sm:px-6 lg:px-8">
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={builder
                    .image(post.postImage)
                    .width(1200)
                    .height(675)
                    .fit("crop")
                    .crop("center")
                    .url()}
                  alt={post?.postImage?.alt || "Article image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="prose prose-lg max-w-none prose-gray marker:text-gray-500">
              {post?.body ? <PortableText value={post.body} /> : null}
            </div>
          </div>

          {/* Documents Section */}
          {post?.documents && post.documents.length > 0 && (
            <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 bg-gray-200 shadow-md rounded-lg">
              <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
                Documenti Allegati
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {post.documents.map((doc: SanityDocument) => (
                  <DocumentCard key={doc._id} document={doc} />
                ))}
              </div>
            </section>
          )}

          {/* Article Actions */}
          <footer className=" mt-14 border-t border-gray-200 px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
                {post?.federation && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold">{post.federation}</span>
                  </div>
                )}

                {post?.federation && formattedDate && (
                  <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                )}

                {formattedDate && (
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    <time
                      dateTime={post.publishedAt}
                      className="text-sm font-medium"
                    >
                      {formattedDate}
                    </time>
                  </div>
                )}
              </div>

              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Torna alle News
              </Link>
            </div>
          </footer>
        </article>


      </main>
    </>
  );
};

export default PostPage;
