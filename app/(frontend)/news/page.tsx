import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "@sanity/client";
import { postsQuery, federationsQuery } from "@/sanity/lib/queries";
import NewsFilter from "@/components/NewsFilter";

export const revalidate = 60;

interface NewsPageProps {
  searchParams: {
    federation?: string;
    sort?: string;
    search?: string;
  };
}

const NewsPage = async ({ searchParams }: NewsPageProps) => {
  const { federation, sort, search } = (await searchParams);

  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery(federation, sort, search),
    params: federation ? { federation } : undefined,
  });

  const federations = await sanityFetch<string[]>({ query: federationsQuery });

  return (
    <>
      <header className="bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg min-h-[20vh] flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            News & Eventi
          </h1>
        </div>
      </header>

      <main>
        <NewsFilter posts={posts} federations={federations} />
      </main>
    </>
  );
};

export default NewsPage;
