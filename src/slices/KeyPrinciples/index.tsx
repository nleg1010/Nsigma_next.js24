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
  heading3: ({ children }) => <h3 className="title text-left">{children}</h3>,
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
        <div className="flex flex-col gap-4 pt-4 justify-center min-[450px]:justify-start min-[450px]:flex-row flex-wrap">
          {slice.items.map(({ image, text }, i) => (
            <div className="bg-[#242727] rounded-lg p-4 flex flex-col items-center text-[1rem] min-[450px]:max-w-[300px]">
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
