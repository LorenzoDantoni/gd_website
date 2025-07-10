import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { Organization } from "@/components/Organization";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "@sanity/client";
import { lastPostsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: lastPostsQuery });
  return (
    <>
      <Hero />
      <section className="bg-gray-50 py-16 sm:py-24">
        <News posts={posts} title="News & Eventi" subtitle="Resta aggiornato sulle nostre iniziative" />
      </section>
      <Organization />
    </>
  );
}
