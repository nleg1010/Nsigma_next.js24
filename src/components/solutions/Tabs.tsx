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
  const [activeTab, setActiveTab] = useState(data[0].name);
  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };
  console.log(data);
  return (
    <div className="text-xl bg-Gray p-4 sm:p-8 md:p-14 rounded-2xl flex flex-col">
      <ul className="flex flex-col md:flex-row justify-around items-center">
        {data.map((tab, i) => (
          <li className="pb-3 md:pb-0" key={i}>
            <button
              className="relative flex pb-2 gap-2 sm:gap-12"
              disabled={activeTab === tab.name}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.name}
              <span
                className={twMerge(
                  "absolute top-[calc(100%)] w-full bg-customGreen h-1 duration-300 opacity-0 transition-opacity left-0 group-hover:opacity-100",
                  activeTab === tab.name && "opacity-100"
                )}
              ></span>
            </button>
          </li>
        ))}
      </ul>
      <div className="pt-6">
        {data.map((tab, i) => (
          <div key={i}>
            {activeTab === tab.name && (
              <div
                className={twMerge(
                  "grid grid-cols-1 md:grid-cols-3 place-items-center w-full",
                  tab.image?.url == null && "md:grid-cols-1"
                )}
              >
                <div className="px-2 text-left md:text-center col-span-2">
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
