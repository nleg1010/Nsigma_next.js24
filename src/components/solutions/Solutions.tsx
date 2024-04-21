import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import Tabs from "./Tabs";

type SolutionsProps = {
  data: {
    solutions_subheader: any;
    solutions_content: any;
    solutions_tabs: any;
  };
};

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p className="text-[1rem]">{children}</p>,
};

export default function Solutions({ data }: SolutionsProps) {
  return (
    <section
      className="py-16 overflow-hidden px-3 md:px-0 grid place-items-center "
      id="solutions"
    >
      <div className="container mx-auto px-3 text-lightGray text-center md:text-lg pb-20">
        <div className="pb-8">
          <h2 className=" text-2xl md:text-[42px]  font-extrabold text-white text-center pb-16">
            Industry <span className="grad">Solutions</span>
          </h2>
          <div className="text-3xl md:text-5xl font-bold title pb-4">
            <PrismicRichText field={data?.solutions_subheader} />
          </div>
          <PrismicRichText
            field={data?.solutions_content}
            components={components}
          />
        </div>
        <Tabs data={data?.solutions_tabs} />
      </div>
    </section>
  );
}
