import { PrismicRichText } from "@prismicio/react";
import EmblaCarousel from "@/components/ai-ml/ExamplesSection/ExamplesCarousel";

const TitleWithCardCarousel = ({ slice }) => {
  	const { title } = slice.primary;
	const Id = title?.[0]?.type === "paragraph" ? title[0].text : " ";

  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id={Id}
    >
	<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44973111.js"></script>
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
