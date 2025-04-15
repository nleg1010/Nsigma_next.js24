import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
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

const ModularFramework = ({
  title,
  subtitle,
  modules,
}: ModularFrameworkProps) => {
  return (
    <div className="container mx-auto text-white pt-20">
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
              "grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10 py-10",
              i !== modules.length - 1 && "border-b-2 border-[#383a46]",
              i % 2 === 0 && "md:grid-row-reverse"
            )}
          >
            <div className="relative">
              <PrismicNextImage field={image} className="w-full" />
              <div className="flex flex-wrap justify-center items-center gap-2 absolute bottom-5 right-10">
                <h4 className="text-xl md:text-2xl font-semibold">{name}</h4>
                <div className="bg-black/30 p-2">
                  <h4 className="text-xl md:text-2xl font-semibold">{title}</h4>
                </div>
              </div>
            </div>
            <div>
              <PrismicRichText field={text} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModularFramework;
