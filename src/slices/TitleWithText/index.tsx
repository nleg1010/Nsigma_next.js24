import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TitleWithText`.
 */
export type TitleWithTextProps =
  SliceComponentProps<Content.TitleWithTextSlice>;

/**
 * Component for "TitleWithText" Slices.
 */
const TitleWithText = ({ slice }: TitleWithTextProps): JSX.Element => {
  const { title, text } = slice.primary;

  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="what-are-ai-ml"
    >
      <div className="container flex flex-col gap-12 text-white px-4">
        <div className="text-3xl md:text-5xl font-bold title">
          <PrismicRichText field={title} />
        </div>
        <div className="text-xl whitespace-pre-line">
          <PrismicRichText field={text} />
        </div>
      </div>
    </section>
  );
};

export default TitleWithText;
