import AnimatedSection from "@/components/expertise/animated-section";
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

const results = [
  {
    color: "text-nsigma-gold",
    srValue: "35",
    suffix: "bps",
    counterVar: "--num-bps",
    title: "Additional Alpha Potential",
    description:
      "Unlock new investment signals by integrating and analyzing complex alternative data sources with dataPREDICT.",
    delay: "0s",
  },
  {
    color: "text-nsigma-blue",
    srValue: "65",
    suffix: "%",
    counterVar: "--num-reduction",
    title: "Reduction in Manual Work",
    description:
      "Streamline data workflows and automate tasks with dataACQUIRE & dataADVANCE, freeing up valuable analyst time.",
    delay: "0.2s",
  },
  {
    color: "text-nsigma-red",
    srValue: "100",
    suffix: "%",
    counterVar: "--num-adherence",
    title: "Compliance Coverage",
    description:
      "With dataADVANCE, every dataset is governed by automated policies, audit logging, and lineage tracking — ensuring airtight regulatory adherence.",
    delay: "0.4s",
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
    <section id="impact" className="bg-nsigma-black md:py-32" ref={sectionRef}>
      <div className="section-container">
        <AnimatedSection animation="slide-up">
          <h2 className="heading-2 mb-8 md:mb-20 text-center">
            Driving Tangible Results for Asset Managers
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {results.map((item, idx) => (
            <AnimatedSection
              animation="slide-in"
              delay={idx * 100}
              key={idx}
              className="gray-linear-gradient rounded-xl p-6 border border-nsigma-border card-hover"
            >
              <div className="flex justify-center">
                <h3
                  className={twMerge(
                    "text-4xl md:text-5xl font-bold mb-4",
                    item.color,
                    isVisible
                      ? `animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(${item.counterVar})] before:content-[counter(num)]`
                      : "opacity-0"
                  )}
                  style={{ animationDelay: item.delay }}
                >
                  <span className="sr-only">{item.srValue}</span>
                  &nbsp;{item.suffix}
                </h3>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-center">
                {item.title}
              </h4>
              <p className="text-nsigma-textAlt text-center">
                {item.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map(({ comment, author }, index) => (
            <AnimatedSection
              animation="slide-up"
              delay={index * 200}
              key={index}
              className="mx-auto border-l-4 flex flex-col justify-between border-nsigma-gold pl-6 py-2"
            >
              <p className="text-lg italic text-nsigma-textAlt mb-4">
                {`"${comment}"`}
              </p>
              <p className="text-sm font-bold text-nsigma-textAlt">{`- ${author}`}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
