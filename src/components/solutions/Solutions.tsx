import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
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
      className="py-16 pt-32 mt-32 overflow-hidden px-3 md:px-0 grid place-items-center "
      id="solutions"
    >
      <div className="container mx-auto px-3 text-white text-center md:text-lg pb-20">
        <div className="pb-8">
          <h4 className="heading-1 text-center">Industry Solutions</h4>
          <h2 className="heading-2 pb-2">
            <PrismicRichText field={is_subheadline} />
          </h2>
          <div className="info-text lg:px-6">
            <PrismicRichText field={is_intro} />
          </div>
        </div>
        <Tabs data={is_tabs} />
        {/* <div className="container mx-auto p-5 md:pl-10  mt-5 bg-[#1d2029] rounded-3xl border-b-[1px] border-[#383a46] text-white text-center md:text-lg overflow-hidden">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col justify-start items-start pb-5 md:pt-20">
              <h2 className="text-3xl font-bold py-4 text-left">
                Featured Case Study
              </h2>
              <h4 className="text-[1rem] lg:text-lg text-left">
                {is_featured_case_study}
              </h4>
              <button className="bg-[#F6AF23] text-black cta-button font-semibold mt-4  rounded-xl flex justify-center items-center gap-2 hover:scale-95 transition-transform">
                Download Case study <GrDownload />
              </button>
            </div>
            <div className="w-full md:p-10 rounded-lg flex justify-center md:pr-20">
              <PrismicNextImage
                field={featured_case_study_image}
                style={{
                  maxWidth: "545px",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  overflow: "hidden",
                  borderRadius: "30px",
                }}
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
