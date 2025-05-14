import { CalendarClock, PhoneCall } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AnimatedSection from "./animated-section";

interface Blob {
  width: number;
  height: number;
  left: number;
  top: number;
}

const CtaBanner: React.FC = () => {
  const [blobs, setBlobs] = useState<Blob[]>([]);
  const router = useRouter();

  useEffect(() => {
    const generatedBlobs = Array.from({ length: 20 }, () => ({
      width: Math.random() * 200 + 50,
      height: Math.random() * 200 + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setBlobs(generatedBlobs);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 ">
      {/* Background pattern */}
      <div className="section-container mx-auto max-w-4xl relative z-10 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="slide-up">
            <h2 className="heading-2 text-white mb-8">
              Ready to transform your data strategy?
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <p className="info-text text-nsigma-textAlt mb-12 max-w-2xl mx-auto">
              Partner with NSigma to unlock the full potential of your data
              assets and achieve tangible business outcomes.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="btn-primary cta-button flex justify-center items-center"
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                Start Your Assessment
                <CalendarClock className="ml-2 h-5 w-5" />
              </button>

              <button
                className="bg-white hover:bg-gray-100  text-gray-900 btn-primary cta-button font-semibold shadow-md border transition flex justify-center items-center"
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                Schedule a Consultation
                <PhoneCall className="ml-2 h-5 w-5" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
