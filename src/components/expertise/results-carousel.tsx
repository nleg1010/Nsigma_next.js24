import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import AnimatedSection from "./animated-section";

interface ResultCard {
  number: string;
  label: string;
  description: string;
  color: string;
}

const ResultsCarousel: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const results: ResultCard[] = [
    {
      number: "47%",
      label: "Reduction in Data Processing Time",
      description:
        "Optimized pipelines delivering faster insights across enterprise data sources",
      color: "text-nsigma-gold",
    },
    {
      number: "3.2x",
      label: "Return on Analytics Investment",
      description:
        "Measured by new revenue and efficiency gains across client engagements",
      color: "text-nsigma-blue",
    },
    {
      number: "99.7%",
      label: "Pipeline Reliability",
      description: "Enterprise-grade uptime for mission-critical data flows",
      color: "text-nsigma-gold",
    },
    {
      number: "76%",
      label: "Reduction in False Positives",
      description: "More accurate predictions through our tuned ML models",
      color: "text-nsigma-blue",
    },
    {
      number: "68%",
      label: "Faster Time to Market",
      description: "Accelerated implementation through our modular approach",
      color: "text-nsigma-gold",
    },
    {
      number: "24x",
      label: "Improvement in Query Performance",
      description: "Optimized data architecture and caching strategies",
      color: "text-nsigma-blue",
    },
  ];

  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  useEffect(() => {
    setHasMounted(true); // Prevent hydration mismatch
    setVisibleCount(getVisibleCount());

    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + visibleCount >= results.length ? 0 : prev + 1
      );
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  if (!hasMounted) {
    // Prevent rendering until client is ready
    return null;
  }

  return (
    <section className="bg-nsigma-grayAlt section-padding">
      <div className="container mx-auto">
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-6">Tangible Results</h2>
            <p className="info-text text-nsigma-textAlt max-w-2xl mx-auto">
              Our expertise translates to measurable outcomes across client
              engagements.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={300}>
          <div className="relative">
            <div className="flex justify-between mb-4">
              <button
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === 0
                      ? Math.max(0, results.length - visibleCount)
                      : prevIndex - 1
                  )
                }
                className="p-2 bg-nsigma-black rounded-full text-white hover:bg-ns-yellow transition-colors duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex + visibleCount >= results.length
                      ? 0
                      : prevIndex + 1
                  )
                }
                className="p-2 bg-nsigma-black rounded-full text-white hover:bg-ns-yellow transition-colors duration-200"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div
              ref={carouselRef}
              className="flex overflow-hidden items-center"
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / visibleCount
                  }%)`,
                }}
              >
                {results.map((card, index) => (
                  <div
                    key={index}
                    className="flex-none w-full md:w-1/2 lg:w-1/3 p-4"
                  >
                    <div className="bg-nsigma-black p-6 rounded-xl h-full">
                      <div
                        className={`text-[40px] font-bold ${card.color} mb-2`}
                      >
                        {card.number}
                      </div>
                      <h2 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                        {card.label}
                      </h2>
                      <p className="info-text text-nsigma-textAlt">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {Array.from({
                length: Math.ceil(results.length / visibleCount),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * visibleCount)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex >= index * visibleCount &&
                    currentIndex < (index + 1) * visibleCount
                      ? "bg-nsigma-gold w-4"
                      : "bg-nsigma-text"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResultsCarousel;
