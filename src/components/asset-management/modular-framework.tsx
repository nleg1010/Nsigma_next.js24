import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";

type Module = {
  name: KeyTextField;
  title: KeyTextField;
  text: RichTextField;
  image: ImageFieldImage;
};

export type ModularFrameworkProps = {
  title: KeyTextField;
  subtitle: KeyTextField;
  modules: Module[];
};

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="text-lg md:text-xl mt-0">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-bold">
      <br />
      {children}
    </strong>
  ),
};

const ModularFramework = ({
  title,
  subtitle,
  modules,
}: ModularFrameworkProps) => {
  return (
    <div className="container mx-auto w-3/4 text-white pt-32 px-3">
      <div className="w-full text-center pb-14 flex flex-col items-center">
        <h2 className="text-2xl md:text-[42px] font-bold uppercase pb-8">
          {title}
        </h2>
        <h4 className="text-xl md:text-2xl w-1/2">{subtitle}</h4>
      </div>
      <div>
        {modules.map(({ image, name, text, title }, i) => (
          <div
            key={i}
            className={twMerge(
              "grid grid-cols-1 md:grid-cols-2 py-10",
              i !== modules.length - 1 && "border-b-2 border-[#383a46]"
            )}
          >
            <div
              className={twMerge(
                "relative flex flex-col justify-center items-center lg:items-end gap-2",
                i % 2 === 1 && "md:order-last"
              )}
            >
              <PrismicNextImage field={image} className="w-full" />
              <div className="flex flex-wrap justify-center items-center gap-2 absolute bottom-5 lg:pr-5">
                <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  {name}
                </h4>
                <div className="bg-black/30 p-2">
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                    {title}
                  </h4>
                </div>
              </div>
            </div>
            <div
              className={twMerge(
                "flex flex-col justify-start items-start md:pt-10",
                i % 2 === 1 ? "md:pr-5" : "md:pl-5"
              )}
            >
              <PrismicRichText field={text} components={components} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModularFramework;
