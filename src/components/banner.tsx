import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  const router = useRouter();

  return (
    <main className="relative flex items-center justify-center h-screen overflow-hidden bg-center bg-cover bg-[url(/images/banner-1.jpg)]">
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
                className="btn-primary cta-button flex justify-center items-center gap-2 text-black shadow-md transition"
                onClick={() => router.push("/contact-us")}
              >
                Talk to Our Experts
                <FaArrowRight />
              </button>
              <button className="bg-white hover:bg-gray-100  text-gray-900 btn-primary cta-button font-semibold shadow-md border transition">
                Assess Your Data Maturity
              </button>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <a
                href="#expertise"
                className="text-nsigma-textAlt hover:text-nsigma-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
