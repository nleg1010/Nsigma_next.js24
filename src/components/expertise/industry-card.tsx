import { cn } from "@/lib/utils";
import React from "react";
import AnimatedSection from "./animated-section";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const accentBorderMap: Record<string, string> = {
  "nsigma-blue": "border-nsigma-blue",
  "nsigma-green": "border-nsigma-green",
  "nsigma-red": "border-nsigma-red",
  "nsigma-gold": "border-nsigma-gold",
};

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  description,
  icon,
  color,
  delay = 0,
}) => {
  // Map color strings to actual Tailwind classes
  const getColorClasses = (colorName: string) => {
    return {
      border: accentBorderMap[colorName],
      bg: `bg-${colorName}`,
      text: `text-${colorName}`,
    };
  };

  const colors = getColorClasses(color);

  return (
    <AnimatedSection animation="scale-in" delay={delay} className="h-full">
      <div
        className={cn(
          "h-full p-6 rounded-xl border-l-4 bg-opacity-15 hover:bg-opacity-10 transition-all duration-300",
          colors.bg,
          colors.border
        )}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full",
              colors.bg,
              "bg-opacity-20"
            )}
          >
            {icon}
          </div>
          <h3 className={cn("text-xl lg:text-2xl font-semibold", colors.text)}>
            {title}
          </h3>
        </div>
        <p className="text-body-s-mobile md:text-body-s-desktop text-nsigma-textAlt">
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
};

export default IndustryCard;
