import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

/**
 * Props for `NavigationSlice`.
 */
export type NavigationSliceProps =
  SliceComponentProps<Content.NavigationSliceSlice>;

/**
 * Component for "NavigationSlice" Slices.
 */
const NavigationSlice = ({ slice }: NavigationSliceProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="our-process"
    >
      <div
        className="container flex flex-col gap-12 text-white px-4"
        style={{ alignItems: "center" }}
      >
        <div
          className="text-l bg-Gray p-4 sm:p-7 md:p-5 rounded-2xl flex flex-col"
          style={{
            height: "40px",
            width: "84%",
            borderRadius: "25px 25px 25px 25px",
          }}
        >
          <div
            className="flex pb-8 gap-2 sm:gap-12"
            style={{ marginTop: "-8px" }}
          >
            {slice.items.map(({ label, link }, i) => (
              <>
                <button
                  key={i}
                  className={`relative focus:outline-none group`}
                  onClick={() => handleTabClick(i)}
                >
                  <Link href={`#${(link as { url: string | undefined })?.url}`}>
                    <PrismicRichText field={label} />
                  </Link>
                  <span
                    className={twMerge(
                      "absolute top-[calc(100%_+_1.75rem)] w-full bg-customGreen h-1 duration-300 opacity-0 transition-opacity left-0 group-hover:opacity-0",
                      i === activeTab && 0 > 1 && "opacity-100"
                    )}
                    style={{ marginTop: "-17px" }}
                  ></span>
                </button>
              </>
            ))}
          </div>
          <div className="w-full bg-black h-[2px] mb-6"></div>
        </div>
      </div>
    </section>
  );
};

export default NavigationSlice;
