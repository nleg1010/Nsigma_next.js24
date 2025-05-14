import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import AnimatedSection from "./animated-section";
import { Card } from "./ui/card";

const steps = [
  {
    title: "1. Discovery Phase",
    description:
      "We begin with a comprehensive assessment of your current systems, requirements, and objectives.",
    items: [
      "Requirements documentation",
      "Current architecture assessment",
      "Success criteria establishment",
    ],
    badgeColor: "nsigma-gold",
    stepNumber: 1,
    delay: 100,
  },
  {
    title: "2. Proof-of-Concept Development",
    description:
      "Validate solutions with rapid prototyping before full-scale implementation.",
    items: [
      "Rapid prototype implementation",
      "Integration testing with existing systems",
      "Performance benchmark verification",
    ],
    badgeColor: "nsigma-red",
    stepNumber: 2,
    delay: 200,
  },
  {
    title: "3. Enterprise Implementation",
    description:
      "Methodical deployment across your organization with comprehensive support.",
    items: [
      "Phased deployment methodology",
      "Knowledge transfer protocol",
      "Documentation development",
      "Operational transition support",
    ],
    badgeColor: "nsigma-green",
    stepNumber: 3,
    delay: 300,
  },
];

const TechnicalEngagementProtocol = () => {
  return (
    <section id="protocol" className="py-40 px-8 md:px-64 lg:px-120 ">
      <AnimatedSection
        animation="fade-in"
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className=" heading-2 mb-3">Technical Engagement Protocol</h2>
        <p className="info-text text-nsigma-textAlt max-w-2xl mx-auto mb-16">
          Our structured approach ensures successful implementation of data and
          AI solutions across your enterprise.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative ">
        {/* Discovery Phase */}
        {steps.map((step, index) => (
          <AnimatedSection
            key={index}
            animation="fade-in"
            delay={step.delay}
            className="relative"
          >
            <Card className="h-full p-8 rounded-xl border-0 bg-nsigma-gray">
              <div className="mb-6">
                <h2 className=" text-xl lg:text-2xl font-semibold text-nsigma-text mb-4 min-h-10">
                  {step.title}
                </h2>
                <p className="info-text text-nsigma-textAlt mb-6 ">
                  {step.description}
                </p>
                <ul className="space-y-3 info-text text-nsigma-text">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={cn(
                  "rounded-full text-white w-10 h-10 flex items-center justify-center font-bold absolute -bottom-5 left-1/2 transform -translate-x-1/2",
                  `bg-${step.badgeColor}`
                )}
              >
                {step.stepNumber}
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default TechnicalEngagementProtocol;
