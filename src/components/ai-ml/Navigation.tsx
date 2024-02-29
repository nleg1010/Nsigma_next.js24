import Link from "next/link";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";
import { PrismicNextLink } from '@prismicio/next'

const SECTIONS = [
  { title: "AI/ML and Predictive Analytics", id: "AI/ML and Predictive Analytics" },
  { title: "What Are AI/ML", id: "what-are-ai-ml" },
  { title: "Our Process", id: "our-process" },
  { title: "Signs you need AI/ML", id: "signs-you-need-ai" },
  { title: "Benefits", id: "benefits" },
  { title: "Examples", id: "examples" },
  { title: "Why Us", id: "why-us" },
];

interface SliceItem {
  label: any;
  link: any;
}

interface NavigationProps {
  slices: SliceComponentProps<SliceItem>[];
}

function Navigation({ slices }: NavigationProps) {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index: any) => {
	    setActiveTab(index);
	  };
	const slice = slices[0];
  return (
  <>
  { slice &&
<section
      className="w-full flex justify-center items-center py-12"
      id="our-process"
    >
      <div className="container flex flex-col gap-12 text-white px-4">
        <div className="text-l bg-Gray p-4 sm:p-8 md:p-5 rounded-2xl flex flex-col" style={{ height: '0px' }}>
          <div className="flex pb-8 gap-2 sm:gap-12" style={{ marginTop: '-15px'}}>
            {slice?.items.map(({ label, link }, i) => (
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
                    "absolute top-[calc(100%_+_1.75rem)] w-full bg-customGreen h-1 duration-300 opacity-0 transition-opacity left-0 group-hover:opacity-100",
                    i === activeTab && 0 > 1 &&"opacity-100"
                  )}
		  style={{ marginTop: '-17px'}}
                ></span>
              </button>
	      </>
            ))}
          </div>
          <div className="w-full bg-black h-[2px] mb-6"></div>
        </div>
      </div>
    </section>
    }
  
    <div className="w-full flex items-center justify-center">
      <div className="container w-fit mx-4 px-4 bg-Gray flex-wrap flex items-center justify-center rounded-[42px] py-2 text-white gap-x-8 gap-y-2">
        {SECTIONS.map(({ title, id }) => (
          <Link href={`#${id}`} key={id} className="text-nowrap">
            {title}
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
export default Navigation;
