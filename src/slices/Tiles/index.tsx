import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { space } from "postcss/lib/list";
import { twMerge } from "tailwind-merge";

/**
 * Props for `Tiles`.
 */
export type TilesProps = SliceComponentProps<Content.TilesSlice>;

const Tiles = ({ slice }: TilesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid md:grid-cols-2 gap-4 justify-items-center text-white text-[1rem] title p-8">
        {slice.items.map(({ title, content }, i) => (
          <div key={i} className="bg-[#242727] w-full p-6">
            <h2 className="pb-6" style={{ whiteSpace: "pre-line" }}>
              {title}
            </h2>
            <PrismicRichText field={content} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tiles;
