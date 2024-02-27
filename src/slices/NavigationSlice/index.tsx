import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { PrismicNextLink } from '@prismicio/next'


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
      <div className="container flex flex-col gap-12 text-white px-4">
        <div className="text-3xl md:text-5xl font-bold title">
        </div>
        <div className="text-xl bg-Gray p-4 sm:p-8 md:p-14 rounded-2xl flex flex-col">
          <div className="flex pb-8 gap-2 sm:gap-12">
            {slice.items.map(({ label, link }, i) => (
              <button
                key={i}
                className={`relative focus:outline-none group`}
                onClick={() => handleTabClick(i)}
              >
	      	<Link href={`#${link.url}`}>
		    <PrismicRichText field={label} />
		</Link>
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
        </div>
      </div>
    </section>

  );
};

export default NavigationSlice;
