import AnimatedSection from "@/components/expertise/animated-section";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "True Managed Service, Tailored to You:",
    description:
      "We adapt technology and architecture to your needs, not the other way around. No rigid platforms, just expertly managed solutions.",
  },
  {
    title: "Unmatched Dual Expertise:",
    description:
      "Decades of deep asset management experience fused with elite data science proficiency. We understand your world.",
  },
  {
    title: "Integrated & Future-Proof:",
    description:
      "A seamless, holistic platform leveraging best-of-breed, tech-agnostic tools designed for agility and evolution.",
  },
  {
    title: "Outcome-Focused Partnership:",
    description:
      "Your success is our metric. We partner transparently to achieve tangible business impact and empower your team.",
  },
];
const WhyNsigma = () => {
  return (
    <section id="why-nsigma" className="bg-nsigma-black md:py-32">
      <div className="section-container">
        <AnimatedSection animation="slide-up">
          <h2 className="heading-2 mb-8 md:mb-20 text-center">
            The NSigma Managed Service Difference
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Graphic Column */}
          <AnimatedSection animation="slide-in">
            <div className="flex justify-center scale-75 md:scale-100 my-20">
              <div className="relative w-full max-w-md aspect-square">
                {/* Main circle */}
                <div className="absolute inset-0 border-4 border-nsigma-gold/30 rounded-full flex items-center justify-center">
                  <div className="absolute w-3/4 h-3/4 border-4 border-nsigma-blue/30 rounded-full flex items-center justify-center">
                    <div className="absolute w-1/2 h-1/2 bg-nsigma-gold/10 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-nsigma-gold">
                        NSigma
                      </span>
                    </div>
                  </div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-nsigma-blue p-3 rounded-full">
                  <span className="text-xs font-bold text-white">
                    Expertise
                  </span>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-nsigma-red p-3 rounded-full">
                  <span className="text-xs font-bold text-white">
                    Technology
                  </span>
                </div>

                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-nsigma-green p-3 rounded-full">
                  <span className="text-xs font-bold text-white">Service</span>
                </div>

                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-nsigma-gold p-3 rounded-full">
                  <span className="text-xs font-bold text-white">Results</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text Column */}
          <div className="space-y-6">
            {features.map((item, idx) => (
              <AnimatedSection
                animation="slide-up"
                delay={idx * 100}
                key={idx}
                className="flex gap-4"
              >
                <CheckCircle2 className="flex-shrink-0 h-6 w-6 text-nsigma-gold mt-1" />
                <div>
                  <p className="text-lg">
                    <span className="font-bold">{item.title}</span>{" "}
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection animation="slide-up">
          <p className="text-center text-lg mt-12 max-w-3xl mx-auto">
            Solve the 'build vs. buy' dilemma. Get custom analytics power
            without the overhead, managed by experts.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyNsigma;
