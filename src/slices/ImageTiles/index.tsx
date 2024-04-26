import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { title } from "process";

export type ImageTilesProps = SliceComponentProps<Content.ImageTilesSlice>;

const components: JSXMapSerializer = {
  heading4: ({ children }) => <h4 className="pb-2 title">{children}</h4>,
  paragraph: ({ children }) => <p className="pb-6 text-sm">{children}</p>,
};

const ImageTiles = ({ slice }: ImageTilesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center py-16 px-4"
    >
      <div className="flex flex-col gap-8 text-white text-center items-center text-[1rem]">
        <div className="pb-8">
          <h2 className="title pb-6">
            <strong>{slice.primary.title}</strong>
          </h2>
          <PrismicRichText field={slice.primary.toptext} />
        </div>
        <div className="grid md:grid-cols-4 gap-4 justify-items-center">
          {slice.items.map(({ image, text }, i) => (
            <div
              key={i}
              className="bg-[#242727] flex flex-col justify-center rounded-xl max-w-[298px]"
            >
              <div className="flex flex-col justify-center">
                <PrismicNextImage field={image} width={80} className="m-auto" />
              </div>
              <PrismicRichText field={text} components={components} />
            </div>
          ))}
        </div>
        <PrismicRichText field={slice.primary.bottomtext} />
      </div>
    </section>
  );
};

export default ImageTiles;
