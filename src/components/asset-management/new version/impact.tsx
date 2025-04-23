import { Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="impact" className="bg-nsigma-darkAlt" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-heading">
          Driving Tangible <span className="text-nsigma-green">Results</span>{" "}
          for Asset Managers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Result 1 */}
          <div className="bg-nsigma-dark rounded-lg p-6 border border-nsigma-border card-hover">
            <div className="flex justify-center">
              <h3
                className={`text-4xl md:text-5xl font-bold text-nsigma-gold mb-4 ${isVisible ? "animate-count-up" : "opacity-0"}`}
              >
                30-40 bps
              </h3>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-center">
              Additional Alpha Potential
            </h4>
            <p className="text-nsigma-textAlt text-center">
              Unlock new investment signals by integrating and analyzing complex
              alternative data sources with dataPREDICT.
            </p>
          </div>

          {/* Result 2 */}
          <div className="bg-nsigma-dark rounded-lg p-6 border border-nsigma-border card-hover">
            <div className="flex justify-center">
              <h3
                className={`text-4xl md:text-5xl font-bold text-nsigma-blue mb-4 ${isVisible ? "animate-count-up" : "opacity-0"}`}
                style={{ animationDelay: "0.2s" }}
              >
                60-70%
              </h3>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-center">
              Reduction in Manual Work
            </h4>
            <p className="text-nsigma-textAlt text-center">
              Streamline data workflows and automate tasks with dataACQUIRE &
              dataADVANCE, freeing up valuable analyst time.
            </p>
          </div>

          {/* Result 3 */}
          <div className="bg-nsigma-dark rounded-lg p-6 border border-nsigma-border card-hover">
            <div className="flex justify-center mb-4">
              <Code size={64} className="text-nsigma-red" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-center">
              Mastering Complexity
            </h4>
            <p className="text-nsigma-textAlt text-center">
              Consolidate disparate systems into a single source of truth,
              enabling unified reporting and cross-portfolio insights.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto border-l-4 border-nsigma-gold pl-6 py-2">
          <p className="text-lg italic text-nsigma-textAlt mb-4">
            "NSigma MOSAIC transformed our ability to leverage alternative data.
            The insights generated have become a core part of our strategy and a
            tangible driver of performance."
          </p>
          <p className="text-sm text-nsigma-textAlt">
            - Head of Quantitative Strategy, Multi-Billion Dollar Hedge Fund
            (Anonymized)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
