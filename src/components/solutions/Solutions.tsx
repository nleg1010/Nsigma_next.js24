import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { FaArrowRight } from "react-icons/fa";
import Tabs, { TabsItemProps } from "./Tabs";

type SolutionsProps = {
  is_subheadline: RichTextField;
  is_intro: RichTextField;
  is_tabs: TabsItemProps[];
  is_featured_case_study: KeyTextField;
  featured_case_study_image: ImageFieldImage;
};

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p className="text-[1rem] title">{children}</p>,
};

export default function Solutions({
  is_subheadline,
  is_intro,
  is_tabs,
  is_featured_case_study,
  featured_case_study_image,
}: SolutionsProps) {
  return (
    <section
      className="py-16 mt-52 overflow-hidden px-3 md:px-0 grid place-items-center "
      id="solutions"
    >
      <div className="container mx-auto px-3 text-white text-center md:text-lg pb-20">
        <div className="pb-8">
          <h4 className="lg:text-2xl md:leading-[50px] font-semibold uppercase text-[#8f9193] text-center">
            Industry Solutions
          </h4>
          <h2 className="uppercase md:text-[42px] text-2xl md:leading-[50px] pb-6 font-semibold">
            <PrismicRichText field={is_subheadline} />
          </h2>
          <div className="text-xl xl:text-2xl leading-6 lg:px-6">
            <PrismicRichText field={is_intro} />
          </div>
        </div>
        <Tabs data={is_tabs} />
        <div className="container mx-auto pl-10  mt-5 gray-linear-gradient rounded-[40px] border-b-[1px] border-[#383a46] text-white text-center md:text-lg overflow-hidden">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col justify-start items-start pb-5 pt-20">
              <h2 className="md:text-[42px] text-2xl md:leading-[50px] font-bold title mb-4 text-left">
                Featured Case Study
              </h2>
              <h4 className="text-left lg:text-2xl">
                {is_featured_case_study}
              </h4>
              <button className="bg-[#F6AF23] text-black font-semibold mt-2 py-4 px-2 rounded-full flex justify-center items-center gap-1 hover:scale-95 transition-transform">
                Download Case study <FaArrowRight />
              </button>
            </div>
            <div className="w-full p-10 rounded-lg">
              <PrismicNextImage
                field={featured_case_study_image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  overflow: "hidden",
                  borderRadius: "30px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
