import {
  Building2,
  Factory,
  Home,
  LineChart,
  ShoppingBag,
  Truck,
} from "lucide-react";
import React from "react";
import AnimatedSection from "./animated-section";
import IndustryCard from "./industry-card";

const IndustrySection: React.FC = () => {
  const industries = [
    {
      title: "Asset Management",
      description:
        "Full-stack investment workflow enablement via MOSAIC platform",
      icon: <Building2 size={20} className="text-nsigma-gold" />,
      color: "nsigma-gold",
    },
    {
      title: "Real Estate",
      description: "Object detection + property management optimization",
      icon: <Home size={20} className="text-nsigma-blue" />,
      color: "nsigma-blue",
    },
    {
      title: "Manufacturing",
      description: "Sensor integration + quality optimization",
      icon: <Factory size={20} className="text-nsigma-green" />,
      color: "nsigma-green",
    },
    {
      title: "Retail",
      description: "Consumer intelligence + demand forecasting",
      icon: <ShoppingBag size={20} className="text-nsigma-red" />,
      color: "nsigma-red",
    },
    {
      title: "Financial Services",
      description:
        "Predictive portfolio monitoring + financial dashboard visualization",
      icon: <LineChart size={20} className="text-nsigma-gold" />,
      color: "nsigma-gold",
    },
    {
      title: "Supply Chain",
      description: "Data visibility + predictive delays",
      icon: <Truck size={20} className="text-nsigma-blue" />,
      color: "nsigma-blue",
    },
  ];

  return (
    <section id="industries" className="section-padding ">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-in" className="mb-12 text-center">
          <h2 className="heading-2 mb-6">Industry-Specific Implementations</h2>
          <h4 className="info-text text-nsigma-textAlt max-w-2xl mx-auto">
            While NSigma's expertise is broadly applicable, we specialize in the
            following verticals:
          </h4>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              color={industry.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
