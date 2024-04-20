import { PrismicRichText, PrismicImage } from "@prismicio/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type tabsProps = {
  data: Array<{
    name: any;
    content: any;
    image: any;
  }>;
};

export default function Tabs({ data }: tabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (i: number) => {
    setActiveTab(i);
  };
  return (
    <div className="text-xl rounded-2xl flex flex-col">
      <ul className="flex flex-col md:flex-row justify-between items-center">
        {data.map((tab, i) => (
          <li className=" w-full" key={i}>
            <button
              className={twMerge(
                "relative flex gap-2 sm:gap-12 p-8 bg-Gray w-full text-center",
                i % 2 === 1 && "bg-[#181a21]",
                i === 0 && "rounded-t-2xl md:rounded-r-none",
                i === data.length - 1 && "md:rounded-tr-2xl"
              )}
              disabled={activeTab === i}
              onClick={() => handleTabClick(i)}
            >
              {tab.name}
              <span
                className={twMerge(
                  "absolute top-[calc(90%)] w-full bg-customGreen h-1 duration-300 opacity-0 transition-opacity left-0 group-hover:opacity-100",
                  activeTab === i && "opacity-100"
                )}
              ></span>
            </button>
          </li>
        ))}
      </ul>
      <div
        className={twMerge(
          "pt-6 rounded-b-2xl bg-Gray",
          activeTab % 2 === 1 && "bg-[#181a21]"
        )}
      >
        {data.map((tab, i) => (
          <div key={i}>
            {activeTab === i && (
              <div
                className={twMerge(
                  "grid grid-cols-1 md:grid-cols-2 w-full",
                  tab.image?.url == null && "md:grid-cols-1"
                )}
              >
                <div className="px-4 text-justify pt-0 md:pt-16 md:p-4">
                  <PrismicRichText field={tab.content} />
                </div>

                <PrismicImage field={tab.image} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
