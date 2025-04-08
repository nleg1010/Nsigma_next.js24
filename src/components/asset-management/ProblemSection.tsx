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
  title: KeyTextField;
  info: RichTextField;
  content: RichTextField;
  image: ImageFieldImage;
  endContent: RichTextField;
};
const ProblemSection = ({
  title,
  info,
  content,
  image,
  endContent,
}: ProblemSectionProps) => {
  return (
    <div className="container mx-auto py-16 mt-52 flex flex-col items-center justify-center text-white">
      <h2 className="uppercase md:text-[42px] text-2xl md:leading-[50px] pb-6 font-semibold">
        {title}
      </h2>
      <div className="text-center lg:w-3/4">
        <PrismicRichText field={info} components={components} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-20 text-left">
        <div className="text-left">
          <PrismicRichText field={content} components={components} />
        </div>
        <div>
          {image.id ? (
            <PrismicNextImage field={image} />
          ) : (
            <div className="w-full h-full bg-[#d9d9d9]" />
          )}
        </div>
      </div>
      <div className="lg:w-3/4 text-center mt-20">
        <PrismicRichText field={endContent} components={components} />
      </div>
    </div>
  );
};

export default ProblemSection;
