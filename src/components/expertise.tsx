import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { CgArrowBottomRight, CgArrowTopRight } from "react-icons/cg";
import { twMerge } from "tailwind-merge";

type ExpertiseItem = {
  icon: ImageFieldImage;
  url?: KeyTextField;
  title: KeyTextField;
  info: KeyTextField;
  image: ImageFieldImage;
  challenge: KeyTextField;
  our_approach: KeyTextField;
  measurable_outcomes: KeyTextField;
};
type ExpertiseItemProps = {
  idx: number;
  item: ExpertiseItem;
};

type ExpertiseProps = {
  subtitle: KeyTextField;
  info: RichTextField;
  data: ExpertiseItem[];
};

const linksVariants: Variants = {
  close: {
    opacity: 0.5,
    height: 0,
  },
  open: {
    opacity: 1,
    height: "auto",
  },
};

const ExpertiseItem = ({ item, idx }: ExpertiseItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div key={idx} className="border-y-[1px]">
      <motion.div
        className="w-full py-7  flex justify-between cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <h2 className="text-xl lg:text-2xl font-semibold text-white">
          {item.title}{" "}
        </h2>

        {open ? (
          <CgArrowBottomRight className="text-white text-3xl" />
        ) : (
          <CgArrowTopRight className="text-white text-3xl" />
        )}
      </motion.div>
      <motion.div
        className={twMerge("hidden w-full md:grid-cols-2", open && "grid")}
      >
        <motion.div className="flex flex-col lg:gap-10 gap-3 p-4 pb-10 text-white">
          <div className="border-l-[1px] p-4 ">
            <p className="text-sm lg:text-base">Challenge:</p>
            <p className="mt-2 lg:text-lg">{item.challenge}</p>
          </div>
          <div className="border-l-[1px] p-4 lg:text-lg">
            <p className="text-sm lg:text-base">Our Approach:</p>
            <p className="mt-2">{item.our_approach}</p>
          </div>
          <div className="border-l-[1px] p-4 ">
            <p className="text-sm lg:text-base">Measureable Outcomes:</p>
            <div className="mt-2 pl-5 lg:text-lg">
              <ul className="list-disc">
                {item.measurable_outcomes
                  ?.split("\n")
                  .map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div className="p-24 w-full flex justify-center">
          <PrismicNextImage
            field={item.image}
            className="max-h-[400px]"
          ></PrismicNextImage>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Expertise({ data, subtitle, info }: ExpertiseProps) {
  return (
    <section className="py-16 relative" id="expertise">
      <div className="container mx-auto px-4 relative z-10">
        <div>
          <h4 className="text-[#8f9193] uppercase lg:text-2xl font-semibold">
            Our Expertise
          </h4>
        </div>
        <div>
          <h2 className="font-bold text-white mt-1 mb-4 uppercase md:text-[42px] text-2xl md:leading-[50px]">
            {subtitle}
          </h2>
        </div>
        <div className="lg:w-1/2 mt-4 text-xl xl:text-2xl leading-6 text-white">
          <PrismicRichText field={info} />
        </div>
        <div className="mt-10 p-2 flex flex-col overflow-hidden">
          {data?.map((item, idx: number) => (
            <ExpertiseItem item={item} idx={idx} key={idx} />
          ))}
        </div>
      </div>
      {/* )} */}
    </section>
  );
}
