import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

/**
 * Component for "Cta" Slices.
 */
const Cta = ({ slice }) => {
	const { heading, text, button } = slice.primary;
	const Id = heading[0]?.text;

  return (
    <section id={Id} className="w-full py-20">
	<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44973111.js"></script>
      <div className="text-white gap-4 text-center flex-col w-full bg-customNeutral px-4 flex items-center justify-center py-20">
        <div className="text-4xl md:text-6xl pb-4 font-bold title">
          <PrismicRichText field={heading} />
        </div>
        <div className="max-w-lg">{text}</div>

        <Link
          href="/contact-us"
          className="text-white bg-custm_pink min-w-[165px] text-center rounded-xl hover:scale-105 transition-transform duration-200 p-2 font-normal"
        >
          Schedule a call
        </Link>
      </div>
    </section>
  );
};

export default Cta;
