import { FC } from "react";

import { KeyTextField, RichTextField } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
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
        <h4 className="text-gray-500 uppercase xl:text-2xl">
          Engagement Strategies
        </h4>
        <h1 className="font-bold text-white mt-1 mb-4 uppercase lg:text-4xl">
          {title}
        </h1>
        <h6 className="text-white mb-3 lg:text-lg xl:text-xl">{subtitle}</h6>
        <div className="text-white text-xl xl:text-2xl leading-6 text-left w-2/3 mb-10">
          <PrismicRichText field={info} components={components} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 xl:gap-7 text-white">
          {strategies?.map((item, i: number) => (
            <EngagementCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementStrategies;
