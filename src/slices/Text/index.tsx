import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Space_Mono } from "next/font/google";
import { twMerge } from "tailwind-merge";

export type TextProps = SliceComponentProps<Content.TextSlice>;
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex pb-32 flex-col items-center text-white text-lg"
    >
      <div
        className={twMerge(
          "p-4 md:px-16 md:pt-4 text-center max-w-[1180px]",
          slice.variation === "boldColored" && "title",
          slice.variation === "withHr" && "relative w-1/2"
        )}
      >
        {slice.variation === "withHr" && (
          <>
            <span className="absolute bg-grad h-[2px] w-[300px] top-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#eb9204] to-[#83e868] via-[#83e868]" />
            <span className="absolute bg-grad h-[2px] w-[300px] bottom-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#eb9204] to-[#83e868] via-[#83e868]" />
          </>
        )}
        <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  );
};

export default Text;