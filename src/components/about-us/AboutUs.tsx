import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";

type Reason = {
  icon: ImageFieldImage;
  title: KeyTextField;
  info: RichTextField;
};

export type AboutUsProps = {
  subtitle: KeyTextField;
  reasons: Reason[];
};

const components: JSXMapSerializer = {
  heading4: ({ children }) => <h4 className="pb-8">{children}</h4>,
  paragraph: ({ children }) => <p>{children}</p>,
  image: ({ node }) => (
    <div className="flex items-center my-5 gap-2 lg:gap-5 text-[1rem]">
      <img src={node.url} className="lg:size-7" />
      <p className="md:text-lg">{node.alt}</p>
    </div>
  ),
};
const AboutUs = ({ subtitle, reasons }: AboutUsProps) => {
  return (
    <div className="container mx-auto px-3 text-white pb-20">
      <h4
        id="about"
        className="text-[#8f9193] uppercase lg:text-2xl text-center font-semibold"
      >
        Why Choose NSigma?
      </h4>
      <h2 className="font-bold text-white uppercase md:text-[42px] text-2xl md:leading-[50px]  mt-1 mb-14 text-center">
        {subtitle}
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map(({ icon, info, title }, idx) => (
          <div
            key={idx}
            className="w-full min-h-96 gray-linear-gradient border border-gray-600 p-5 hover:border-[#F6AF23]"
          >
            <PrismicNextImage
              field={icon}
              className="max-h-[40px] max-w-[40px]"
            />
            <h1 className="mt-2 lg:mt-5 text-2xl lg:text-3xl lg:mb-7  font-semibold">
              {title}
            </h1>
            <PrismicRichText field={info} components={components} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
