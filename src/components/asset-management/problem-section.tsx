import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p className="text-xl">{children}</p>,
  list: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
  listItem: ({ children }) => (
    <li className="text-xl font-normal my-5">{children}</li>
  ),
};

export type ProblemSectionProps = {
  heading1: KeyTextField;
  text1: RichTextField;
  heading2: KeyTextField;
  text2: RichTextField;
  image: ImageFieldImage;
};
const ProblemSection = ({
  heading1,
  text1,
  heading2,
  text2,
  image,
}: ProblemSectionProps) => {
  return (
    <div className="container mx-auto py-16 px-3 mt-52 flex flex-col items-center justify-center text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <h2 className="text-2xl md:text-[42px] font-bold mb-6">{heading1}</h2>
          <div className="pt-5">
            <PrismicRichText field={text1} components={components} />
          </div>
          <h2 className="text-2xl md:text-[42px] font-bold pt-10 lg:pt-14  mb-6">
            {heading2}
          </h2>
          <div className="pt-5">
            <PrismicRichText field={text2} components={components} />
          </div>
        </div>
        <div>
          <PrismicNextImage field={image} />
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
