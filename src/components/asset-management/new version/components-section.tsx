import AnimatedSection from "@/components/expertise/animated-section";
import { BarChartBig, Database, FileCog, FileHeart } from "lucide-react";

const dataSolutions = [
  {
    icon: <Database size={48} className="text-nsigma-blue" />,
    title: "dataACQUIRE",
    titleColor: "text-nsigma-blue",
    subtitle: "The Foundation",
    description:
      "Build your future-ready data foundation. We establish robust infrastructure, implement intelligent data ingestion, ensure quality and governance, and unify disparate sources into a single source of truth.",
    benefit:
      "Build unwavering trust in your data, eliminate silos, and slash data prep time.",
  },
  {
    icon: <FileHeart size={48} className="text-nsigma-gold" />,
    title: "dataPREDICT",
    titleColor: "text-nsigma-gold",
    subtitle: "The Intelligence Engine",
    description:
      "Unlock predictive power with next-generation AI. We develop, validate, and deploy custom AI/ML models (including GenAI) tailored to your strategies, with Explainable AI (XAI) for transparency.",
    benefit:
      "Gain a quantifiable edge by systematically generating alpha and enhancing risk modeling.",
  },
  {
    icon: <BarChartBig size={48} className="text-nsigma-green" />,
    title: "dataVISION",
    titleColor: "text-nsigma-green",
    subtitle: "The Insight Navigator",
    description:
      "Illuminate insights for actionable decisions. Transform complex data and model outputs into intuitive dashboards, automated reports, and compelling visual narratives for all stakeholders.",
    benefit:
      "Accelerate decision-making with clarity and drive adoption of data-driven strategies.",
  },
  {
    icon: <FileCog size={48} className="text-nsigma-red" />,
    title: "dataADVANCE",
    titleColor: "text-nsigma-red",
    subtitle: "The Operational Backbone",
    description:
      "Industrialize analytics for resilient scale. Ensure efficient, secure, and reliable operations through integrated MLOps, DataOps, SecOps, CI/CD automation, and continuous monitoring.",
    benefit:
      "Scale analytics with confidence and resilience, automating operations and reducing risk.",
  },
];

const ComponentsSection = () => {
  return (
    <section id="components" className="md:pt-40">
      <div className="section-container">
        <AnimatedSection animation="slide-up">
          <h2 className="heading-2 text-center mb-8 md:mb-20">
            The MOSAIC Integrated Ecosystem
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataSolutions.map((item, idx) => (
            <AnimatedSection
              animation="slide-in"
              delay={idx * 100}
              key={idx}
              className="bg-nsigma-grayAlt rounded-xl p-6 border border-nsigma-border card-hover"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3
                className={`text-xl font-bold mb-2 text-center ${item.titleColor}`}
              >
                {item.title}
              </h3>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-center text-nsigma-textAlt">
                {item.subtitle}
              </h4>
              <p className="text-nsigma-textAlt mb-6">{item.description}</p>
              <p className="text-nsigma-textAlt font-medium">
                <span className="font-bold">Key Benefit:</span> {item.benefit}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
