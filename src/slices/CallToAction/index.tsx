import CustomLink from "@/components/CustomLink";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta = ({ slice }: CtaProps): JSX.Element => {
  const { heading, text, button } = slice.primary;

  return (
    <section className="w-full py-20">
      <div className="text-white gap-4 text-center flex-col w-full bg-customNeutral px-4 flex items-center justify-center py-20">
        <div className="text-4xl md:text-6xl pb-4 font-bold title">
          <PrismicRichText field={heading} />
        </div>
        <div className="max-w-lg">{text}</div>
        <CustomLink href={button.url} className="p-2 font-normal">
          Schedule a call
        </CustomLink>
      </div>
    </section>
  );
};

export default Cta;
