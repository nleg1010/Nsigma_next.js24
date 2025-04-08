import { useRouter } from "next/router";

export default function Banner() {
  const router = useRouter();

  return (
    <main className="relative flex items-center justify-center h-screen overflow-hidden bg-center bg-cover bg-[url(/images/banner.png)]">
      <div className="relative z-30 text-2xl bg-opacity-50 rounded-xl">
        <div className="flex items-center justify-center bg-black/30 w-screen h-screen p-4 px-8">
          <div className="container flex-col justify-items-start items-end text-white">
            <h1 className="md:text-6xl text-3xl md:leading-[80px] w-full font-semibold text-left  mb-6">
              Elite Data Science
              <br />
              and AI Solutions <br />
              at Unmatched Value
            </h1>
            <h3>World-Class Data Teams That Scale With Your Ambitions</h3>
            <div className="flex flex-col md:flex-row gap-4 pt-6">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-black text-base font-semibold py-3 px-6 rounded-full shadow-md transition"
                onClick={() => router.push("/contact-us")}
              >
                Talk to Our Experts
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 text-base font-semibold py-3 px-6 rounded-full shadow-md border transition">
                Assess Your Data Maturity
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
