import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

export type TechStackProps = SliceComponentProps<Content.TechStackSlice>;

const components: JSXMapSerializer = {
  heading3: ({ children }) => <h3 className="title text-left">{children}</h3>,
  heading4: ({ children }) => <h4 className="title break-words">{children}</h4>,
};

const TechStack = ({ slice }: TechStackProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center py-16"
    >
      <div className="text-white w-full max-w-7xl px-4">
        <PrismicRichText field={slice.primary.title} components={components} />
        <div className="w-full flex flex-wrap gap-4 pt-4 justify-start">
          {slice.items.map(({ text }, i) => (
            <div className="bg-[#242727] rounded-lg p-4 flex flex-col text-[1rem] min-[450px]:max-w-[226px]">
              <PrismicRichText field={text} components={components} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
