import { BarChartBig, Database, FileCog, FileHeart } from "lucide-react";

const ComponentsSection = () => {
  return (
    <section id="components" className="bg-nsigma-dark md:pt-40">
      <div className="section-container">
        <h2 className="heading-2 text-center mb-8 md:mb-20">
          The MOSAIC Integrated Ecosystem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* dataACQUIRE */}
          <div className="bg-nsigma-darkAlt rounded-lg p-6 border border-nsigma-border card-hover">
            <div className="flex justify-center mb-6">
              <Database size={48} className="text-nsigma-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-nsigma-blue">
              dataACQUIRE
            </h3>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-center text-nsigma-textAlt">
              The Foundation
            </h4>
            <p className="text-nsigma-textAlt mb-6">
              Build your future-ready data foundation. We establish robust
              infrastructure, implement intelligent data ingestion, ensure
              quality and governance, and unify disparate sources into a single
              source of truth.
            </p>
            <p className="text-nsigma-textAlt font-medium">
              <span className="font-bold">Key Benefit:</span> Build unwavering
              trust in your data, eliminate silos, and slash data prep time.
            </p>
          </div>

          {/* dataPREDICT */}
          <div className="bg-nsigma-darkAlt rounded-lg p-6 border border-nsigma-border card-hover">
            <div className="flex justify-center mb-6">
              <FileHeart size={48} className="text-nsigma-gold" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-nsigma-gold">
              dataPREDICT
            </h3>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-center text-nsigma-textAlt">
              The Intelligence Engine
            </h4>
            <p className="text-nsigma-textAlt mb-6">
              Unlock predictive power with next-generation AI. We develop,
              validate, and deploy custom AI/ML models (including GenAI)
              tailored to your strategies, with Explainable AI (XAI) for
              transparency.
            </p>
            <p className="text-nsigma-textAlt font-medium">
              <span className="font-bold">Key Benefit:</span> Gain a
              quantifiable edge by systematically generating alpha and enhancing
              risk modeling.
            </p>
          </div>

          {/* dataVISION */}
          <div className="bg-nsigma-darkAlt rounded-lg p-6 border border-nsigma-border card-hover">
            <div className="flex justify-center mb-6">
              <BarChartBig size={48} className="text-nsigma-green" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-nsigma-green">
              dataVISION
            </h3>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-center text-nsigma-textAlt">
              The Insight Navigator
            </h4>
            <p className="text-nsigma-textAlt mb-6">
              Illuminate insights for actionable decisions. Transform complex
              data and model outputs into intuitive dashboards, automated
              reports, and compelling visual narratives for all stakeholders.
            </p>
            <p className="text-nsigma-textAlt font-medium">
              <span className="font-bold">Key Benefit:</span> Accelerate
              decision-making with clarity and drive adoption of data-driven
              strategies.
            </p>
          </div>

          {/* dataADVANCE */}
          <div className="bg-nsigma-darkAlt rounded-lg p-6 border border-nsigma-border card-hover">
            <div className="flex justify-center mb-6">
              <FileCog size={48} className="text-nsigma-red" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-nsigma-red">
              dataADVANCE
            </h3>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-center text-nsigma-textAlt">
              The Operational Backbone
            </h4>
            <p className="text-nsigma-textAlt mb-6">
              Industrialize analytics for resilient scale. Ensure efficient,
              secure, and reliable operations through integrated MLOps, DataOps,
              SecOps, CI/CD automation, and continuous monitoring.
            </p>
            <p className="text-nsigma-textAlt font-medium">
              <span className="font-bold">Key Benefit:</span> Scale analytics
              with confidence and resilience, automating operations and reducing
              risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
