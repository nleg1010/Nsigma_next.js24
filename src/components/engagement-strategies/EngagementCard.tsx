import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { FaCheck } from "react-icons/fa6";

export type EngagementCardProps = {
  title: KeyTextField;
  subtitle: KeyTextField;
  info: RichTextField;
  features: RichTextField;
  icon: ImageFieldImage;
};

const components: JSXMapSerializer = {
  heading4: ({ children }) => <h4 className="pb-8">{children}</h4>,
  paragraph: ({ children }) => (
    <p className="text-[1rem] lg:lext:lg xl:text-xl">{children}</p>
  ),
  list: ({ children }) => <ul className="list-inside list-">{children}</ul>,
  listItem: ({ children }) => (
    <li className="flex items-center mb-1 gap-2 text-[1rem] lg:text-lg xl:text-xl">
      <FaCheck size={16} />
      {children}
    </li>
  ),
};

const EngagementCard = ({
  title,
  subtitle,
  info,
  features,
  icon,
}: EngagementCardProps) => {
  return (
    <div
      className={`w-full h-full rounded-lg tilted-grid-radient p-4 border-b border-r border-gray-800 hover:scale-[1.02] transition-transform hover:border-[#F6AF23] hover:border`}
    >
      <div className="w-10 h-10 rounded-md flex justify-center items-center">
        <PrismicNextImage field={icon} className="w-3/4" />
      </div>
      <div className="lg:min-h-[260px] xl:min-h-[320px]">
        <h6 className="mt-2">{title}</h6>
        <h4 className="mt-7 font-semibold lg:text-2xl">{subtitle}</h4>
        <div className="mt-2 text-sm">
          <PrismicRichText field={info} components={components} />
        </div>
      </div>
      <div className="mt-5">
        <div className="text-[1rem] xl:text-xl border-b-[1px] border-white pb-1 mb-2">
          Key Features
        </div>
        <PrismicRichText field={features} components={components} />
      </div>
    </div>
  );
};

export default EngagementCard;
