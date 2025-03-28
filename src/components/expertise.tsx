import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";
import { CgArrowBottomRight, CgArrowTopRight } from "react-icons/cg";
import { twMerge } from "tailwind-merge";

type ExpertiseProps = {
  subtitle: KeyTextField;
  info: RichTextField;
  data: Array<{
    icon: ImageFieldImage;
    url?: KeyTextField;
    title: KeyTextField;
    info: KeyTextField;
    image: ImageFieldImage;
    challenge: KeyTextField;
    our_approach: KeyTextField;
    measurable_outcomes: KeyTextField;
  }>;
};

export default function Expertise({ data, subtitle, info }: ExpertiseProps) {
  return (
    <section className="py-16 relative" id="expertise">
      <div className="container mx-auto px-4 relative z-10">
        <div>
          <h2 className="md:text-[42px] text-2xl md:leading-[50px] font-semibold text-white uppercase mb-5">
            Our Expertise
          </h2>
        </div>
        <div>
          <h4 className="text-[#8f9193] lg:text-2xl">{subtitle}</h4>
        </div>
        <div className="lg:w-1/2 mt-4 text-xl lg:text-2xl font-medium text-white">
          <PrismicRichText field={info} />
        </div>
        <div className="mt-10 p-2 flex flex-col overflow-hidden">
          {data?.map((item, idx: number) => {
            const [open, setOpen] = useState(false);

            return (
              <div key={idx} className="border-y-[1px]">
                <div
                  className="w-full py-7  flex justify-between cursor-pointer"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <h2 className="text-xl lg:text-2xl font-semibold text-white">
                    {item.title}
                  </h2>

                  {open ? (
                    <CgArrowBottomRight className="text-white text-3xl" />
                  ) : (
                    <CgArrowTopRight className="text-white text-3xl" />
                  )}
                </div>
                <div
                  className={twMerge(
                    "hidden w-full md:grid-cols-2",
                    open && "grid"
                  )}
                >
                  <div className="flex flex-col lg:gap-10 gap-3 p-4 pb-10 text-white">
                    <div className="border-l-[1px] p-4 lg:text-lg">
                      <p>Challenge:</p>
                      <p className="mt-2 ">{item.challenge}</p>
                    </div>
                    <div className="border-l-[1px] p-4 lg:text-lg">
                      <p>Our Approach:</p>
                      <p className="mt-2">{item.our_approach}</p>
                    </div>
                    <div className="border-l-[1px] p-4 lg:text-lg">
                      <p>Measureable Outcomes:</p>
                      <div className="mt-2 pl-5">
                        <ul className="list-disc">
                          {item.measurable_outcomes
                            ?.split("\n")
                            .map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-10">
                    <PrismicNextImage
                      field={item.image}
                      alt=""
                    ></PrismicNextImage>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* )} */}
    </section>
  );
}
