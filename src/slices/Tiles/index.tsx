import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { space } from "postcss/lib/list";
import { twMerge } from "tailwind-merge";

export type TilesProps = SliceComponentProps<Content.TilesSlice>;

const Tiles = ({ slice }: TilesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center py-16 px-4"
    >
      <div className="grid md:grid-cols-2 gap-4 justify-items-center text-white text-[1rem] title max-w-7xl">
        {slice.items.map(({ title, content }, i) => (
          <div
            key={i}
            className={twMerge(
              "bg-[#242727] w-full p-6",
              content.length === 0 &&
                "md:col-span-2 text-center flex justify-center"
            )}
          >
            {content.length > 0 ? (
              <>
                <h2 className="pb-6" style={{ whiteSpace: "pre-line" }}>
                  {title}
                </h2>
                <PrismicRichText field={content} />
              </>
            ) : (
              <p className="max-w-4xl">
                <strong>{title}</strong>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tiles;
