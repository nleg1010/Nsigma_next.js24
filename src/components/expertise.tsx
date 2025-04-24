import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { CgArrowBottomRight, CgArrowTopRight } from "react-icons/cg";

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
    <div key={idx} className="border-y-[1px]">
      <div
        className="w-full py-7 flex justify-between cursor-pointer"
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
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 w-full overflow-hidden"
          >
            <div className="flex flex-col lg:gap-10 gap-3 p-4 pb-10 text-white">
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
            </div>
            <div className="p-24 w-full flex justify-center">
              <PrismicNextImage
                field={item.image}
                className="max-h-[400px]"
              ></PrismicNextImage>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Expertise({ data, subtitle, info }: ExpertiseProps) {
  return (
    <section className="py-16 relative" id="expertise">
      <div className="container mx-auto px-4 relative z-10">
        <div>
          <h4 className="heading-1">Our Expertise</h4>
        </div>
        <div>
          <h2 className="heading-2">{subtitle}</h2>
        </div>
        <div className="lg:w-1/2 mt-4 info-text text-white">
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
