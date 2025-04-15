import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicImage,
  PrismicRichText,
} from "@prismicio/react";
import { useState } from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

export type TabsItemProps = {
  name: KeyTextField;
  heading: KeyTextField;
  text: RichTextField;
  features: RichTextField;
  image: ImageFieldImage;
};

type TabsProps = {
  data: TabsItemProps[];
};

const components: JSXMapSerializer = {
  heading4: ({ children }) => <h4 className="pb-8">{children}</h4>,
  paragraph: ({ children }) => (
    <p className="text-[1rem] lg:text-lg text-left">{children}</p>
  ),
  list: ({ children }) => <ul className="list-inside list-">{children}</ul>,
  listItem: ({ children }) => (
    <li className="flex items-start mb-1 gap-2 text-[1rem] lg:text-lg text-left">
      <RiCheckDoubleFill size={23} />
      {children}
    </li>
  ),
};

export default function Tabs({ data }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (i: number) => {
    setActiveTab(i);
  };
  return (
    <div className="p-6 text-xl rounded-3xl bg-[#1d2029]  flex flex-col">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between items-center group/ul gap-4">
        {data.map((tab, i) => (
          <li
            className="w-full group/li hover:scale-[0.98] transition-transform"
            key={i}
          >
            <button
              className={twMerge(
                "relative p-3 bg-[#4a4d54] rounded-full w-full text-[#bbbfc0] text-center min-w",
                activeTab === i &&
                  "font-semibold relative border-2 border-[#F6AF23]"
              )}
              disabled={activeTab === i}
              onClick={() => handleTabClick(i)}
            >
              <h4 className=" w-full">{tab.name}</h4>
            </button>
          </li>
        ))}
      </ul>
      <div className="pt-6">
        {data.map((tab, i) => (
          <div key={i}>
            {activeTab === i && (
              <div
                className={twMerge(
                  "grid grid-cols-1 content-center md:grid-cols-2 w-full gap-4 py-4",
                  tab.image?.url == null && "md:grid-cols-1"
                )}
              >
                <div className="px-4 text-justify text-xl">
                  <h2 className="text-3xl text-left font-bold py-4">
                    {tab.heading}
                  </h2>
                  <PrismicRichText field={tab.text} components={components} />
                  <div className="mt-4">
                    <PrismicRichText
                      field={tab.features}
                      components={components}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center max-h-96">
                  <PrismicImage
                    field={tab.image}
                    style={{
                      maxHeight: "100%",
                      display: "block",
                      borderRadius: 20,
                    }}
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
