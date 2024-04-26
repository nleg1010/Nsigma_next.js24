import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { text } from "stream/consumers";
import { twMerge } from "tailwind-merge";

export type TextWithTitleProps =
  SliceComponentProps<Content.TextWithTitleSlice>;

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p className="max-w-5xl">{children}</p>,
  list: ({ children }) => (
    <ul className="list-disc pl-4 text-[1em]">{children}</ul>
  ),
  listItem: ({ children }) => <li className="">{children}</li>,
};

const TextWithTitle = ({ slice }: TextWithTitleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center  py-16"
    >
      <div
        className={twMerge(
          "w-full flex flex-col gap-8 px-8 max-w-7xl",
          slice.variation === "default" && "items-center text-center"
        )}
      >
        <div className="title">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="flex flex-col gap-4">
          {slice.items.map(({ paragraphs, textcolor }, i) => (
            <div
              style={{ color: textcolor || "#FFF" }}
              className={twMerge(
                "title text-[1em] text-center marker:text-orange-400 ",
                slice.variation === "left" && "text-left"
              )}
            >
              <PrismicRichText field={paragraphs} components={components} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextWithTitle;
