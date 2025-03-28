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
          <h2 className="text-2xl uppercase md:text-[42px]  font-extrabold text-white text-center pb-7">
            Industry Solutions
          </h2>
          <div className="lg:text-xl pb-6">
            <PrismicRichText field={is_subheadline} />
          </div>
          <div className="lg:text-2xl">
            <PrismicRichText field={is_intro} />
          </div>
        </div>
        <Tabs data={is_tabs} />
        <div className="container mx-auto pl-10 pt-20  mt-5 gray-linear-gradient rounded-[40px] border-b-[1px] border-[#383a46] text-white text-center md:text-lg overflow-hidden">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col justify-start items-start pb-5">
              <h1 className="text-3xl md:text-5xl font-bold title mb-4 text-left">
                Featured Case Study
              </h1>
              <h4 className="text-left">{is_featured_case_study}</h4>
              <button className="bg-[#fac400] text-black font-semibold mt-2 py-4 px-2 rounded-full flex justify-center items-center gap-1">
                Download Case study <FaArrowRight />
              </button>
            </div>
            <div className="w-full pl-10">
              <PrismicNextImage
                field={featured_case_study_image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
