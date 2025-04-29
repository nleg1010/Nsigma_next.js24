import { KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { AssetManagementDocumentDataReasonsItem } from "../../../prismicio-types";

export type WhyUsProps = {
  title: KeyTextField;
  reasons: AssetManagementDocumentDataReasonsItem[];
};

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p className="text-white text-xl">{children}</p>,
};

const WhyUs = ({ title, reasons }: WhyUsProps) => {
  return (
    <div className="container mx-auto px-8 md:px-3 pt-48 flex flex-col justify-center items-center">
      <h2 className="mx-auto text-3xl md:text-5xl font-bold text-white text-center">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
        {reasons.map(({ icon, info, title }, idx) => (
          <div
            className="bg-[#232728] flex flex-col gap-4 items-start justify-center p-5 text-white border border-gray-600 hover:border-[#F6AF23] transition-all"
            key={idx}
          >
            <div className="h-10 w-10">
              <PrismicNextImage field={icon} className="fill-white" />
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <PrismicRichText field={info} components={components} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
