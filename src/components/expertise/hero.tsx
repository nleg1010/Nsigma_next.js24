"use client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import AnimatedSection from "./animated-section";

const Hero: React.FC = () => {
  useEffect(() => {
    // Logic for animating elements would go here
  }, []);

  const router = useRouter();

  return (
    <div
      id="hero"
      className="bg-gradient-to-b from-nsigma-black via-nsigma-black/95 to-nsigma-gray min-h-hero relative flex items-center overflow-hidden min-h-screen"
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ opacity: 0.15 }}
      />

      <div className="container mx-auto section-padding grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 z-10">
          <AnimatedSection animation="slide-up" duration={1000} delay={200}>
            <h1 className="md:text-6xl text-3xl md:leading-[80px] w-full font-semibold text-left  mb-6">
              Our Expertise
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" duration={1000} delay={400}>
            <h3 className="text-xl md:text-2xl text-nsigma-textAlt mb-8 max-w-[540px]">
              NSigma delivers enterprise-grade data and AI solutions through a
              comprehensive methodology that spans the complete analytics
              lifecycle. Our technical depth spans six specialized domains, each
              grounded in robust architectural, operational, and governance
              standards.
            </h3>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" duration={1000} delay={600}>
            <div className="flex flex-wrap gap-4">
              <button
                className="btn-primary cta-button flex items-center group transition-all"
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                <span>Start Your Assessment</span>
                <span className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">
                  <FaArrowRight />
                </span>
              </button>

              <button className="bg-white hover:bg-gray-100  text-gray-900 btn-primary cta-button font-semibold shadow-md border transition">
                Download 1-pager
              </button>
            </div>
          </AnimatedSection>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="w-full h-full flex items-center justify-center">
            <AnimatedSection animation="scale-in" duration={1200} delay={800}>
              <div className="relative w-64 h-64 animate-pulse">
                <div className="absolute w-full h-full">
                  <div
                    className="absolute w-3 h-3 bg-nsigma-gold rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-bounce-scale"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="absolute w-3 h-3 bg-nsigma-blue rounded-full top-1/2 left-0 transform -translate-y-1/2 animate-bounce-scale"
                    style={{ animationDelay: "200ms" }}
                  ></div>
                  <div
                    className="absolute w-3 h-3 bg-nsigma-green rounded-full bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce-scale"
                    style={{ animationDelay: "400ms" }}
                  ></div>
                  <div
                    className="absolute w-3 h-3 bg-nsigma-red rounded-full top-1/2 right-0 transform -translate-y-1/2 animate-bounce-scale"
                    style={{ animationDelay: "600ms" }}
                  ></div>

                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <line
                      x1="50"
                      y1="0"
                      x2="50"
                      y2="100"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="0"
                      y1="50"
                      x2="100"
                      y2="50"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="15"
                      y1="15"
                      x2="85"
                      y2="85"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="85"
                      y1="15"
                      x2="15"
                      y2="85"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#data-strategy"
          className="text-nsigma-textAlt hover:text-nsigma-gold transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
