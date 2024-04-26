import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

export type TextWithImageGroupProps =
  SliceComponentProps<Content.TextWithImageGroupSlice>;

const components: JSXMapSerializer = {
  heading2: ({ children }) => <h2 className="title pb-4">{children}</h2>,
  heading3: ({ children }) => <h3 className="title pb-4">{children}</h3>,
  paragraph: ({ children }) => <p className="text-[1em]">{children}</p>,
};

const TextWithImageGroup = ({
  slice,
}: TextWithImageGroupProps): JSX.Element => {
  console.log(slice.items[0].image);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center py-16 px-4"
    >
      <div className=" text-white flex flex-col gap-16 justify-center items-center max-w-7xl">
        <div className="flex flex-col gap-6 text-center max-w-3xl px-4">
          <PrismicRichText
            field={slice.primary.title}
            components={components}
          />
          <PrismicRichText
            field={slice.primary.description}
            components={components}
          />
        </div>
        <div>
          {slice.items.map(({ image, description }, i) => (
            <div className="grid md:grid-cols-3 pb-16">
              <PrismicImage
                field={image}
                style={{ margin: "auto" }}
                width={400}
              />
              <div className="md:col-span-2 text-justify pt-4 px-4 md:p-0">
                <PrismicRichText field={description} components={components} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextWithImageGroup;
