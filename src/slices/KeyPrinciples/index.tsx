import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

export type KeyPrinciplesProps =
  SliceComponentProps<Content.KeyPrinciplesSlice>;

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className="title md:text-left text-center">{children}</h3>
  ),
};

const KeyPrinciples = ({ slice }: KeyPrinciplesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center py-16"
    >
      <div className="text-white w-full max-w-7xl px-4">
        <PrismicRichText field={slice.primary.title} components={components} />
        <div className="w-full flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          {slice.items.map(({ image, text }, i) => (
            <div className="bg-[#242727] rounded-lg p-4 flex flex-col items-center text-[1rem] max-w-[200px]">
              <PrismicImage field={image} width={48} />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPrinciples;
