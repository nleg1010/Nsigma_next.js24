import {
  PrismicRichText,
  PrismicImage,
  JSXMapSerializer,
} from "@prismicio/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type tabsProps = {
  data: Array<{
    name: any;
    content: any;
    image: any;
  }>;
};

const components: JSXMapSerializer = {
  heading4: ({ children }) => <h4 className="pb-8">{children}</h4>,
  paragraph: ({ children }) => <p className="text-[1rem]">{children}</p>,
};

export default function Tabs({ data }: tabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (i: number) => {
    setActiveTab(i);
  };
  return (
    <div className="text-xl rounded-2xl flex flex-col">
      <ul className="flex flex-col md:flex-row justify-between items-center group/ul">
        {data.map((tab, i) => (
          <li className=" w-full group/li" key={i}>
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
              <h4 className="title group-hover:scale-125 transition-transform">
                <strong>{tab.name}</strong>
              </h4>
              <span
                className={twMerge(
                  "absolute top-[calc(95.5%)] w-full bg-customGreen h-1 duration-300 opacity-0 transition-opacity left-0 group-hover/li:opacity-100 ",
                  activeTab === i && "group-[&:not(:hover)]/ul:opacity-100"
                )}
              ></span>
            </button>
          </li>
        ))}
      </ul>
      <div
        className={twMerge(
          "pt-6 rounded-b-2xl bg-Gray border-t-2 border-[#313131] md:h-[50vh]",
          activeTab % 2 === 1 && "bg-[#181a21]"
        )}
      >
        {data.map((tab, i) => (
          <div key={i}>
            {activeTab === i && (
              <div
                className={twMerge(
                  "grid grid-cols-1 content-center md:grid-cols-2 w-full gap-4 p-4",
                  tab.image?.url == null && "md:grid-cols-1"
                )}
              >
                <div className="px-4 text-justify">
                  <PrismicRichText
                    field={tab.content}
                    components={components}
                  />
                </div>
                <div className="flex flex-row justify-center items-center h-[400px]">
                  <PrismicImage
                    field={tab.image}
                    style={{ maxHeight: "100%", display: "block" }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
