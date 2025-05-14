import AnimatedSection from "@/components/expertise/animated-section";
import {
  Activity,
  AlertTriangle,
  BarChart,
  BarChart2,
  BookOpen,
  Brain,
  Brush,
  Circle,
  ClipboardCheck,
  Cloud,
  Code,
  Cpu,
  Database,
  Download,
  FileText,
  Gauge,
  GitBranch,
  GitPullRequest,
  Layers,
  LayoutDashboard,
  LineChart,
  Map,
  PieChart,
  Rocket,
  Search,
  Settings,
  Shield,
  Sliders,
  Zap,
} from "lucide-react";

const MosaicInfographic = () => {
  // Process stages data
  const processStages = [
    {
      title: "Data Collection",
      description: "Gathering raw data from databases, APIs, or files",
      icon: Cloud,
      secondIcon: Download,
      color: "#F6AF23",
    },
    {
      title: "Data Cleaning",
      description: "Fixing missing values, errors, and inconsistencies",
      icon: Brush,
      secondIcon: AlertTriangle,
      color: "#F6AF23",
    },
    {
      title: "Data Exploration",
      description: "Understanding the data with summaries and visual checks",
      icon: Search,
      secondIcon: BarChart,
      color: "#03A9FD",
    },
    {
      title: "Data Visualization",
      description: "Creating charts to reveal insights",
      icon: PieChart,
      secondIcon: LineChart,
      color: "#F7476B",
    },
    {
      title: "Feature Engineering",
      description: "Crafting useful variables to improve models",
      icon: Sliders,
      secondIcon: Settings,
      color: "#03A9FD",
    },
    {
      title: "Model Evaluation",
      description: "Testing how well the model performs",
      icon: ClipboardCheck,
      secondIcon: Gauge,
      color: "#B0CB48",
    },
    {
      title: "Prediction & Deployment",
      description: "Using the model in real-world apps",
      icon: Rocket,
      secondIcon: LayoutDashboard,
      color: "#B0CB48",
    },
  ];

  // MOSAIC components data
  const mosaicComponents = [
    {
      title: "dataACQUIRE",
      color: "#F6AF23",
      features: [
        { name: "ETL", icon: Database },
        { name: "Data Lake", icon: Layers },
        { name: "Batch Processing", icon: FileText },
        { name: "Data Governance", icon: Shield },
      ],
    },
    {
      title: "dataPREDICT",
      color: "#03A9FD",
      features: [
        { name: "Decision Trees", icon: GitBranch },
        { name: "AutoML", icon: Code },
        { name: "Neural Networks", icon: Brain },
        { name: "SHAP", icon: Zap },
      ],
    },
    {
      title: "dataVISION",
      color: "#F7476B",
      features: [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "KPI Visualization", icon: BarChart2 },
        { name: "Geospatial Images", icon: Map },
        { name: "D3.js", icon: Activity },
      ],
    },
    {
      title: "dataADVANCE",
      color: "#B0CB48",
      features: [
        { name: "DataOps", icon: Circle },
        { name: "MLOps", icon: GitPullRequest },
        { name: "Model Registry", icon: BookOpen },
        { name: "AIOps", icon: Cpu },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 rounded-xl md:py-40 md:pt-56">
      {/* Header */}
      <div className="text-center mb-8 md:mb-20">
        <AnimatedSection animation="slide-up">
          <h4 className="heading-1">
            Built Around Your Stack, Backed by Our Expertise.
          </h4>
        </AnimatedSection>
        <AnimatedSection animation="slide-up" delay={100}>
          <h2 className="heading-2 mb-2">
            MOSAIC: Your Data Science Journey, Expertly Managed
          </h2>
        </AnimatedSection>
      </div>

      {/* Process Flow - Top Section */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center relative">
          {/* Process Stages with Connecting Lines */}
          {processStages.map((stage, index) => (
            <AnimatedSection
              animation="slide-up"
              delay={index * 100}
              key={index}
            >
              {/* Process Stage */}
              <div
                className="flex flex-col items-center mx-3 mb-4"
                style={{ width: "120px" }}
              >
                <div
                  className="relative mb-3"
                  style={{ width: "64px", height: "64px" }}
                >
                  <div
                    className="absolute inset-0 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "#1F274B",
                      border: `2px solid ${stage.color}`,
                    }}
                  >
                    <stage.icon style={{ color: stage.color }} size={28} />
                    <stage.secondIcon
                      className="absolute right-0 bottom-0"
                      style={{ color: stage.color }}
                      size={20}
                    />
                  </div>
                </div>
                <h3 className="text-white text-center font-medium text-sm mb-1">
                  {stage.title}
                </h3>
                <p className="text-gray-300 text-xs text-center">
                  {stage.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < processStages.length - 1 && (
                <div className="hidden md:flex items-center mx-1">
                  <div className="w-8 h-px bg-gray-600"></div>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Color Gradient Transition Band */}
      <div className="relative mb-10 mx-auto w-full">
        <div
          className="h-2 w-full mx-auto rounded-full opacity-60 my-8"
          style={{
            background:
              "linear-gradient(90deg, #F6AF23 0%, #03A9FD 33%, #F7476B 66%, #B0CB48 100%)",
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
          }}
        />
      </div>

      {/* MOSAIC Components - Bottom Section */}
      <div className="mb-6">
        {/* Component Titles Row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {mosaicComponents.map((component, index) => (
            <AnimatedSection
              animation="slide-up"
              delay={index * 100}
              className="flex flex-col flex-1 items-center sm:items-stretch"
              key={index}
            >
              <div key={index} className="flex-1 text-center mb-6">
                <h3
                  className="font-bold text-xl"
                  style={{ color: component.color }}
                >
                  {component.title}
                </h3>
              </div>
              <div className="flex flex-1">
                <div key={index} className="flex-1">
                  <div className="flex flex-col space-y-5 ">
                    {component.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="mr-3">
                          <feature.icon
                            style={{ color: component.color }}
                            size={22}
                          />
                        </div>
                        <span className="text-gray-300 text-sm">
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Component Features */}
      </div>
    </div>
  );
};

export default MosaicInfographic;
