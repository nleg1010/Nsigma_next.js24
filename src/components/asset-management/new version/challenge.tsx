import AnimatedSection from "@/components/expertise/animated-section";
import { ClipboardCheck, Database, LineChart } from "lucide-react";

const painPoints = [
  {
    icon: <Database size={48} className="text-nsigma-red" />,
    title: "Fragmented Data Silos",
    description:
      "Inconsistent views from disparate systems hinder analysis and lead to costly errors.",
  },
  {
    icon: <ClipboardCheck size={48} className="text-nsigma-green" />,
    title: "Manual Inefficiencies",
    description:
      "Analysts waste up to 70% of their time on data preparation, not insight generation.",
  },
  {
    icon: <LineChart size={48} className="text-nsigma-blue" />,
    title: "Scalability & Cost Barriers",
    description:
      "Legacy systems and in-house builds struggle to scale cost-effectively with growing data and demands.",
  },
];

const Challenge = () => {
  return (
    <section
      id="challenge"
      className="bg-gradient-to-b from-nsigma-gray via-nsigma-gray/95 to-nsigma-black md:py-40"
    >
      <div className="section-container">
        <AnimatedSection animation="slide-up">
          <h2 className="heading-2 text-center pb-16">
            Navigating the Data Complexity Challenge
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Pain Point 1 */}
          {painPoints.map((point, idx) => (
            <AnimatedSection
              animation="slide-in"
              delay={idx * 100}
              key={idx}
              className="bg-nsigma-black rounded-xl p-6 border border-nsigma-border card-hover"
            >
              <div className="flex justify-center mb-6">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {point.title}
              </h3>
              <p className="text-nsigma-textAlt text-center">
                {point.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="slide-up" delay={200}>
          <p className="text-center text-lg max-w-3xl mx-auto text-nsigma-textAlt">
            Staying competitive demands more than incremental fixes – it
            requires a strategic approach to data intelligence.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Challenge;
