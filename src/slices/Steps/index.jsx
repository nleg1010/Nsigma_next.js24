import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

const TitleWithSteps = ({ slice }) => {
  const { title } = slice.primary;
  const Id = title?.[0]?.type === "paragraph" ? title[0].text : " ";
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <section className="w-full flex justify-center items-center py-12" id={Id}>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/44973111.js"
      ></script>
      <div className="container flex flex-col gap-12 text-white px-4">
        <div className="text-3xl md:text-5xl font-bold title">
          <PrismicRichText field={title} />
        </div>
        <div className="text-xl bg-Gray p-4 sm:p-8 md:p-14 rounded-2xl flex flex-col">
          <div className="flex pb-8 gap-2 sm:gap-12">
            {slice.items.map(({ icon, title }, i) => (
              <button
                key={i}
                className={`relative focus:outline-none group`}
                onClick={() => handleTabClick(i)}
              >
                <Image src={icon.url} alt={title} width={54} height={54} />
                <span
                  className={twMerge(
                    "absolute top-[calc(100%_+_1.75rem)] w-full bg-customGreen h-1 duration-300 opacity-0 transition-opacity left-0 group-hover:opacity-100",
                    i === activeTab && "opacity-100"
                  )}
                ></span>
              </button>
            ))}
          </div>
          <div className="w-full bg-black h-[2px] mb-6"></div>
          {slice.items.map(({ title, description }, index) => (
            <div
              key={index}
              className={twMerge(
                "flex-col gap-2",
                activeTab === index ? "flex" : "hidden"
              )}
            >
              <div className="font-bold text-2xl sm:text-3xl">{title}</div>
              <div className="text-sm sm:text-base">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TitleWithSteps;
