import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { twMerge } from "tailwind-merge";

/**
 * Props for `TitleWithBadge`.
 */
export type TitleWithBadgeProps =
  SliceComponentProps<Content.TitleWithBadgeSlice>;

/**
 * Component for "TitleWithBadge" Slices.
 */
const TitleWithBadge = ({ slice }: TitleWithBadgeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center"
    >
      <div
        className="rounded-lg px-4 py-2 font-bold text-xl"
        style={{
          backgroundColor: slice.primary.badgebgcolor || "#000",
          color: slice.primary.badgetextcolor || "#000",
        }}
      >
        {slice.primary.badge}
      </div>
      <span className="relative">eo</span>
      <div className="title text-white pt-4 text-center">
        <PrismicRichText field={slice.primary.title} />
      </div>
    </section>
  );
};

export default TitleWithBadge;
