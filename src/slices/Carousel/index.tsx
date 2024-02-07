import EmblaCarousel from "@/components/ai-ml/ExamplesSection/ExamplesCarousel";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TitleWithCardCarousel`.
 */
export type TitleWithCardCarouselProps =
  SliceComponentProps<Content.TitleWithCardCarouselSlice>;

/**
 * Component for "TitleWithCardCarousel" Slices.
 */
const TitleWithCardCarousel = ({
  slice,
}: TitleWithCardCarouselProps): JSX.Element => {
  const { title } = slice.primary;

  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="examples"
    >
      <div className="container flex flex-col gap-12 text-white px-4">
        <div className="text-3xl md:text-5xl font-bold title">
          <PrismicRichText field={title} />
        </div>
        <EmblaCarousel slides={slice.items} />
      </div>
    </section>
  );
};

export default TitleWithCardCarousel;
