import CustomLink from "@/components/CustomLink";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Link from "next/link";
import { space } from "postcss/lib/list";
import { twMerge } from "tailwind-merge";

export type TilesProps = SliceComponentProps<Content.TilesSlice>;

const Tiles = ({ slice }: TilesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center py-16 px-4"
    >
      <div className="grid md:grid-cols-2 gap-4 justify-items-center text-white text-[1rem] title max-w-7xl">
        {slice.items.map(({ title, content, link }, i) => (
          <div
            key={i}
            className={twMerge(
              "bg-[#242727] w-full p-6",
              content.length === 0 &&
                "md:col-span-2 text-center flex justify-center"
            )}
          >
            {content.length > 0 ? (
              <div className="flex flex-col gap-4">
                <h2 className="" style={{ whiteSpace: "pre-line" }}>
                  {title}
                </h2>
                <PrismicRichText field={content} />
                <CustomLink className="w-fit " href={link ?? ""}>
                  Learn More
                </CustomLink>
              </div>
            ) : (
              <div className="relative">
                <span className="w-full h-1 absolute top-[-24px] -translate-x-1/2 rounded-full from-[#b0cb48] bg-gradient-to-r to-[#83E868]" />
                <p className="max-w-4xl">
                  <strong>{title}</strong>
                </p>
                <span className="w-full h-1 absolute bottom-[-23px] -translate-x-1/2 rounded-full from-[#b0cb48] bg-gradient-to-r to-[#83E868]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tiles;
