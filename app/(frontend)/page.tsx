import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { Organization } from "@/components/Organization";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-gray-50 py-16 sm:py-24">
        <News />
      </section>
      <Organization />
    </>
  );
}
