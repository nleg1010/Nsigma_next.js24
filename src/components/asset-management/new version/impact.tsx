import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    comment: `NSigma MOSAIC transformed our ability to leverage alternative data.
            The insights generated have become a core part of our strategy and a
            tangible driver of performance.`,
    author:
      "Head of Quantitative Strategy, Multi-Billion Dollar Hedge Fund (Anonymized)",
  },
  {
    comment: `As a new fund, we faced the daunting challenge of building our data infrastructure from scratch. NSigma's dataACQUIRE solution removed that burden entirely. Their team integrated our disparate data sources into a unified foundation that's both robust and flexible. This allowed us to focus on alpha generation from day one rather than spending months on technical infrastructure.`,
    author: "Founder/CIO at a Newly Launched Hedge Fund",
  },
  {
    comment: `NSigma's team operates at a pace that's unmatched in the industry. Their blend of deep financial markets expertise and cutting-edge technical capabilities enabled us to deploy sophisticated quantitative strategies in weeks, not quarters. Their consultative mindset truly sets them apart—they're genuine partners in our success, not just vendors.`,
    author: "Head of Investment Operations at a Pension Fund",
  },
];

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
    <section
      id="impact"
      className="bg-nsigma-darkAlt md:py-32"
      ref={sectionRef}
    >
      <div className="section-container">
        <h2 className="heading-2 mb-8 md:mb-20 text-center">
          Driving Tangible Results for Asset Managers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Result 1 */}
          <div className="bg-nsigma-dark rounded-lg p-6 border border-nsigma-border card-hover">
            <div className="flex justify-center">
              <h3
                className={twMerge(
                  `text-4xl md:text-5xl font-bold text-nsigma-gold mb-4`,
                  isVisible
                    ? "animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-bps)] before:content-[counter(num)]"
                    : "opacity-0"
                )}
              >
                <span className="sr-only">35</span>
                &nbsp;bps
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
                className={twMerge(
                  `text-4xl md:text-5xl font-bold text-nsigma-blue mb-4`,
                  isVisible
                    ? "animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-reduction)] before:content-[counter(num)]"
                    : "opacity-0"
                )}
                style={{ animationDelay: "0.2s" }}
              >
                <span className="sr-only">65</span>%
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
            <div className="flex justify-center text-nsigma-red">
              <h3
                className={twMerge(
                  `text-4xl md:text-5xl text-center font-bold text-nsigma-red mb-4`,
                  isVisible
                    ? "animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-adherence)] before:content-[counter(num)]"
                    : "opacity-0"
                )}
                style={{ animationDelay: "0.4s" }}
              >
                <span className="sr-only">100</span>%
              </h3>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-center">
              Compliance Coverage
            </h4>
            <p className="text-nsigma-textAlt text-center">
              With dataADVANCE, every dataset is governed by automated policies,
              audit logging, and lineage tracking — ensuring airtight regulatory
              adherence.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map(({ comment, author }, index) => (
            <div
              key={index}
              className="mx-auto border-l-4 flex flex-col justify-between border-nsigma-gold pl-6 py-2"
            >
              <p className="text-lg italic text-nsigma-textAlt mb-4">
                {`"${comment}"`}
              </p>
              <p className="text-sm font-bold text-nsigma-textAlt">{`- ${author}`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
