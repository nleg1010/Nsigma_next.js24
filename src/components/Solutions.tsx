import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

type SolutionsProps = {
  data: {
    solutions_subheader: any;
    solutions_content: any;
  };
};

export default function Solutions({ data }: SolutionsProps) {
  return (
    <section
      className="py-16 overflow-hidden px-3 md:px-0 grid place-items-center"
      id="solutons"
    >
      <div className="container mx-auto px-3 text-lightGray text-center md:text-lg pb-20">
        <h2 className=" text-2xl md:text-[42px]  font-extrabold text-white text-center pb-16">
          Industrial <span className="grad">Solutions</span>
        </h2>
        <h3>{data?.solutions_subheader}</h3>
        <PrismicRichText field={data?.solutions_content} />
      </div>
    </section>
  );
}
