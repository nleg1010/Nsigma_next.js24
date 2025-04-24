import { CheckCircle2 } from "lucide-react";

const WhyNsigma = () => {
  return (
    <section id="why-nsigma" className="bg-nsigma-dark md:py-32">
      <div className="section-container">
        <h2 className="heading-2 mb-8 md:mb-20 text-center">
          The NSigma Managed Service Difference
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Graphic Column */}
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
                <span className="text-xs font-bold text-white">Expertise</span>
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-nsigma-red p-3 rounded-full">
                <span className="text-xs font-bold text-white">Technology</span>
              </div>

              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-nsigma-green p-3 rounded-full">
                <span className="text-xs font-bold text-white">Service</span>
              </div>

              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-nsigma-gold p-3 rounded-full">
                <span className="text-xs font-bold text-white">Results</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="flex-shrink-0 h-6 w-6 text-nsigma-gold mt-1" />
              <div>
                <p className="text-lg">
                  <span className="font-bold">
                    True Managed Service, Tailored to You:
                  </span>{" "}
                  We adapt technology and architecture to your needs, not the
                  other way around. No rigid platforms, just expertly managed
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="flex-shrink-0 h-6 w-6 text-nsigma-gold mt-1" />
              <div>
                <p className="text-lg">
                  <span className="font-bold">Unmatched Dual Expertise:</span>{" "}
                  Decades of deep asset management experience fused with elite
                  data science proficiency. We understand your world.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="flex-shrink-0 h-6 w-6 text-nsigma-gold mt-1" />
              <div>
                <p className="text-lg">
                  <span className="font-bold">Integrated & Future-Proof:</span>{" "}
                  A seamless, holistic platform leveraging best-of-breed,
                  tech-agnostic tools designed for agility and evolution.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="flex-shrink-0 h-6 w-6 text-nsigma-gold mt-1" />
              <div>
                <p className="text-lg">
                  <span className="font-bold">
                    Outcome-Focused Partnership:
                  </span>{" "}
                  Your success is our metric. We partner transparently to
                  achieve tangible business impact and empower your team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-lg mt-12 max-w-3xl mx-auto">
          Solve the 'build vs. buy' dilemma. Get custom analytics power without
          the overhead, managed by experts.
        </p>
      </div>
    </section>
  );
};

export default WhyNsigma;
