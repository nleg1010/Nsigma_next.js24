import { ClipboardCheck, Database, LineChart } from "lucide-react";

const Challenge = () => {
  return (
    <section id="challenge" className="bg-nsigma-dark">
      <div className="section-container">
        <h2 className="section-heading">
          Navigating the Data{" "}
          <span className="text-nsigma-blue">Complexity Challenge</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Pain Point 1 */}
          <div className="bg-nsigma-darkAlt rounded-lg p-6 border border-nsigma-border card-hover">
            <div className="flex justify-center mb-6">
              <Database size={48} className="text-nsigma-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              Fragmented Data Silos
            </h3>
            <p className="text-nsigma-textAlt text-center">
              Inconsistent views from disparate systems hinder analysis and lead
              to costly errors.
            </p>
          </div>

          {/* Pain Point 2 */}
          <div className="bg-nsigma-darkAlt rounded-lg p-6 border border-nsigma-border card-hover">
            <div className="flex justify-center mb-6">
              <ClipboardCheck size={48} className="text-nsigma-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              Manual Inefficiencies
            </h3>
            <p className="text-nsigma-textAlt text-center">
              Analysts waste up to 70% of their time on data preparation, not
              insight generation.
            </p>
          </div>

          {/* Pain Point 3 */}
          <div className="bg-nsigma-darkAlt rounded-lg p-6 border border-nsigma-border card-hover">
            <div className="flex justify-center mb-6">
              <LineChart size={48} className="text-nsigma-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              Scalability & Cost Barriers
            </h3>
            <p className="text-nsigma-textAlt text-center">
              Legacy systems and in-house builds struggle to scale
              cost-effectively with growing data and demands.
            </p>
          </div>
        </div>

        <p className="text-center text-lg max-w-3xl mx-auto text-nsigma-textAlt">
          Staying competitive demands more than incremental fixes – it requires
          a strategic approach to data intelligence.
        </p>
      </div>
    </section>
  );
};

export default Challenge;
