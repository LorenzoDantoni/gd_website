import Link from "next/link";

export const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-orange-400 to-orange-500">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-10 py-22 text-center text-white">

        <div className="">
          <h1 className="uppercase text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Giovani Democratici
          </h1>
          <h2 className="uppercase mt-2 text-3xl font-semibold tracking-tight text-red-600 sm:text-4xl md:text-5xl">
            Friuli Venezia Giulia
          </h2>
        </div>

        <div>
          <p className="mx-auto mt-12 max-w-2xl text-xl leading-relaxed text-orange-100 sm:text-2xl">
            Crediamo in una regione più giusta, sostenibile e innovativa. <br />{" "}
            E lavoriamo per costruirla,{" "}
            <span className="font-bold text-white">insieme</span>.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mt-12">
          <button className="transform rounded-full bg-white px-8 py-3 font-bold text-orange-600 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-orange-200">
            <Link href="/iscriviti" >ISCRIVITI</Link>
          </button>
          <button className="transform rounded-full border-2 border-white px-8 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-orange-600 focus:outline-none focus:ring-4 focus:ring-white/50">
            <Link href="/chi-siamo" >SCOPRI CHI SIAMO</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
