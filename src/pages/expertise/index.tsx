"use client";
import CtaBanner from "@/components/expertise/cta-banner";
import DomainSection from "@/components/expertise/domain-section";
import Hero from "@/components/expertise/hero";
import IndustrySection from "@/components/expertise/industry-section";
import ResultsCarousel from "@/components/expertise/results-carousel";
import TechnicalEngagementProtocol from "@/components/expertise/technical-engagement-protocol";
import {
  BarChart2,
  BrainCircuit,
  Camera,
  Cpu,
  Database,
  LayoutDashboard,
} from "lucide-react";
import { useEffect, useState } from "react";

const Expertise = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // SVG placeholder for illustrations
  const showIllustration = (color: string, imgUrl?: string) => (
    <div className="w-full max-w-[320px] relative group">
      <div
        className="absolute -inset-0.5 bg-gradient-to-r rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
        }}
      ></div>
      <img
        src={imgUrl}
        alt="some file"
        height="100%"
        width="100%"
        className="filter fill-customGreen"
      />
      {/* <object
        type="image/svg+xml"
        data={imgUrl || "/images/data-strategy-color.svg"}
        className="text-blue-600 fill-blue-500"
      >
        Circle
      </object> */}
    </div>
  );

  return (
    <div className="min-h-screen bg-nsigma-black text-white">
      <Hero />

      <div className="py-20 black-radial-gradient section-padding">
        <DomainSection
          id="data-strategy"
          title="Data Strategy & AI Consulting"
          description="Our strategic assessment framework helps organizations map their data landscape, quantify technical debt, and develop a clear path forward."
          bulletPoints={[
            "Enterprise data topology mapping",
            "Technical debt quantification",
            "Regulatory compliance architecture",
            "System inventory and integration analysis",
            "Minimal disruption migration strategies",
          ]}
          bgColor="bg-transparent"
          accentColor="nsigma-gold"
          icon={<Database size={32} className="text-nsigma-gold" />}
          illustration={showIllustration(
            "#F6AF23",
            "/images/geometry/data-strategy-color.svg"
          )}
          ctaText="Explore our approach"
          ctaLink="#"
        />

        <DomainSection
          id="ai-ml"
          title="AI/ML & Predictive Analytics"
          description="We develop sophisticated machine learning models that drive business value through accurate predictions and actionable insights."
          bulletPoints={[
            "Forecasting with non-linear patterns",
            "NLP with domain ontologies",
            "Feature engineering + hyperparameter tuning",
            "Cross-validation and regularization strategies",
            "Concept drift management for live pipelines",
          ]}
          bgColor="bg-transparent"
          accentColor="nsigma-blue"
          icon={<BrainCircuit size={32} className="text-nsigma-blue" />}
          illustration={showIllustration(
            "#03A9FD",
            "/images/geometry/ai-ml-blue.svg"
          )}
          ctaText="Discover our capabilities"
          ctaLink="#"
        />

        <DomainSection
          id="visualization"
          title="Data Visualization & BI"
          description="Our visualization solutions transform complex data into intuitive, actionable insights through carefully designed dashboards and reports."
          bulletPoints={[
            "Interactive rendering & real-time dashboards",
            "Information architecture tuned to workflows",
            "Query optimization & caching strategies",
            "Accessibility (WCAG 2.1 AA compliant)",
            "Visual hierarchy and encoding standards",
          ]}
          bgColor="bg-transparent"
          accentColor="nsigma-green"
          icon={<LayoutDashboard size={32} className="text-nsigma-green" />}
          illustration={showIllustration(
            "#B0CB48",
            "/images/geometry/data-visualisation-green.svg"
          )}
          ctaText="See our portfolio"
          ctaLink="#"
        />

        <DomainSection
          id="data-engineering"
          title="Data Engineering"
          description="We build robust data pipelines and infrastructure that form the backbone of reliable analytics and AI systems."
          bulletPoints={[
            "ETL/ELT pipelines, streaming ingestion",
            "Data lake/warehouse schema design",
            "Error handling and idempotent logic",
            "IaC deployments with automated QA",
            "Benchmark-driven performance tuning",
          ]}
          bgColor="bg-transparent"
          accentColor="nsigma-red"
          icon={<BarChart2 size={32} className="text-nsigma-red" />}
          illustration={showIllustration(
            "#F7476B",
            "/images/geometry/data-engineering-red.svg"
          )}
          ctaText="Learn about our architecture"
          ctaLink="#"
        />

        <DomainSection
          id="totalops"
          title="AI TotalOps (Data, ML, Sec)"
          description="Our unified operations framework ensures your AI and data systems run smoothly, securely, and efficiently."
          bulletPoints={[
            "MLOps + DataOps + DevSecOps + AIOps",
            "Service mesh, containerization, CI/CD",
            "Policy-as-code, RBAC, compliance automation",
            "Monitoring + lineage tracking instrumentation",
            "Automated testing and deployment pipelines",
          ]}
          bgColor="bg-transparent"
          accentColor="nsigma-gold"
          icon={<Cpu size={32} className="text-nsigma-gold" />}
          illustration={showIllustration(
            "#F6AF23",
            "/images/geometry/totalops-color.svg"
          )}
          ctaText="Explore our methodology"
          ctaLink="#"
        />

        <DomainSection
          id="cv-iot"
          title="Computer Vision & IoT"
          description="We develop advanced computer vision solutions and IoT implementations that connect the physical and digital worlds."
          bulletPoints={[
            "Sensor processing + CV model deployment",
            "Latency/bandwidth/power optimization",
            "Edge-to-cloud synchronization",
            "Battery maximization techniques",
            "Real-time video processing and analysis",
          ]}
          bgColor="bg-transparent"
          accentColor="nsigma-blue"
          icon={<Camera size={32} className="text-nsigma-blue" />}
          illustration={showIllustration(
            "#03A9FD",
            "/images/geometry/computer-vision-blue.svg"
          )}
          ctaText="See our IoT solutions"
          ctaLink="#"
        />
      </div>

      <IndustrySection />

      <ResultsCarousel />

      <TechnicalEngagementProtocol />

      <CtaBanner />
    </div>
  );
};

export default Expertise;
