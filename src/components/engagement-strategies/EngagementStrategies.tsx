import { FC } from "react";

import { KeyTextField, RichTextField } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import AnimatedSection from "../expertise/animated-section";
import EngagementCard, { EngagementCardProps } from "./EngagementCard";

export type EngagementStrategiesProps = {
  title: KeyTextField;
  subtitle: KeyTextField;
  info: RichTextField;
  strategies: EngagementCardProps[];
};

const components: JSXMapSerializer = {
  heading4: ({ children }) => <h4 className="pb-8">{children}</h4>,
  paragraph: ({ children }) => <p>{children}</p>,
};

const EngagementStrategies: FC<any> = ({
  info,
  strategies,
  title,
  subtitle,
}: EngagementStrategiesProps) => {
  return (
    <section
      className="my-56 overflow-hidden px-3 md:px-0 grid place-items-center"
      id="engagement"
    >
      <div className="container relative px-4">
        <AnimatedSection animation="slide-up">
          <h4 className="heading-1">Engagement Strategies</h4>
        </AnimatedSection>
        <AnimatedSection animation="slide-up" delay={200}>
          <h2 className="heading-2">{title}</h2>
        </AnimatedSection>
        <AnimatedSection animation="slide-up" delay={400}>
          <h6 className="subheading-1">{subtitle}</h6>
        </AnimatedSection>
        <AnimatedSection animation="slide-up" delay={600}>
          <div className="info-text text-white w-2/3 mb-10">
            <PrismicRichText field={info} components={components} />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 xl:gap-7 text-white pb-2">
          {strategies?.map((item, i: number) => (
            <AnimatedSection animation="slide-in" delay={i * 100} key={i}>
              <EngagementCard {...item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementStrategies;
