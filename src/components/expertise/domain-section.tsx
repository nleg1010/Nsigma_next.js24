import { cn } from "@/lib/utils";
import React from "react";
import AnimatedSection from "./animated-section";

interface DomainSectionProps {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
  bgColor: string;
  accentColor: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
}

const accentBorderMap: Record<string, string> = {
  "nsigma-blue": "border-nsigma-blue",
  "nsigma-green": "border-nsigma-green",
  "nsigma-red": "border-nsigma-red",
  "nsigma-gold": "border-nsigma-gold",
};

const DomainSection: React.FC<DomainSectionProps> = ({
  id,
  title,
  description,
  bulletPoints,
  bgColor,
  accentColor,
  icon,
  illustration,
  ctaText = "Learn more",
  ctaLink = "#",
}) => {
  return (
    <section id={id} className={cn("relative scroll-mt-14", bgColor)}>
      {/* Add subtle separator between sections */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <AnimatedSection animation="fade-in" className="lg:col-span-1">
            <div className="flex justify-center lg:justify-start">
              <div
                className={cn(
                  "flex items-center justify-center w-16 h-16 rounded-full",
                  accentColor && `bg-${accentColor} bg-opacity-20`
                )}
              >
                {icon}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation="slide-up"
            delay={200}
            className="lg:col-span-6"
          >
            <div
              className={cn(
                "pl-6 border-l-4",
                accentColor && accentBorderMap[accentColor]
              )}
            >
              <h2
                className={cn(
                  "heading-2 mb-4",
                  accentColor && `text-${accentColor}`
                )}
              >
                {title}
              </h2>
              <p className="info-text text-white mb-6 max-w-[540px]">
                {description}
              </p>

              <div className="mb-8">
                <ul className="list-disc pl-5 space-y-2 text-nsigma-textAlt">
                  {bulletPoints.map((point, index) => (
                    <li key={index} className="body-l ">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation="slide-in"
            delay={400}
            className="lg:col-span-5"
          >
            <div className="flex items-center justify-center h-full">
              {illustration}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default DomainSection;
