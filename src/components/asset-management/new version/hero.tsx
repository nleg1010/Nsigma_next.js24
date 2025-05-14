import AnimatedSection from "@/components/expertise/animated-section";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  const router = useRouter();

  return (
    <section
      id="mosaic-hero"
      className="relative min-h-screen pt-20 flex items-center bg-nsigma-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=10')] bg-cover bg-center opacity-10"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-nsigma-black via-nsigma-black/95 to-nsigma-gray"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="slide-up">
            <h1 className="md:text-6xl text-3xl md:leading-[80px] font-semibold mb-6 leading-tight animate-fade-in">
              NSigma <span className="text-nsigma-gold">MOSAIC</span>: Tailored
              Managed Analytics for Asset Management
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <h3
              className="text-xl md:text-2xl text-nsigma-textAlt mb-10 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Go beyond standard platforms. Leverage our unique fusion of
              technology, deep domain knowledge, and data science expertise to
              transform your data into a strategic advantage – expertly managed
              for you.
            </h3>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={400}>
            <button
              className="btn-primary cta-button animate-fade-in flex justify-center items-center mx-auto group transition-all"
              style={{ animationDelay: "0.4s" }}
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              Request a Consultation
              <span className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">
                <FaArrowRight />
              </span>
            </button>
          </AnimatedSection>
        </div>
      </div>
      {/* Scrolldown Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#challenge"
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
    </section>
  );
};

export default Hero;
