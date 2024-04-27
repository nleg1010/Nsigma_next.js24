import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

const contentComponents: JSXMapSerializer = {
  list: ({ children }) => (
    <ul className="list-image-[url(/images/bullet-list.png)] list-inside">
      {children}
    </ul>
  ),
  listItem: ({ children }) => <li className="pb-4">{children}</li>,
};

const components: JSXMapSerializer = {
  heading3: ({ children }) => <h3 className="title pb-2">{children}</h3>,
  heading4: ({ children }) => <h4 className="title pb-2">{children}</h4>,
  list: ({ children }) => (
    <ul className="list-disc list-inside ">{children}</ul>
  ),
  listItem: ({ children }) => <li className="">{children}</li>,
};

const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center py-16"
    >
      <div className="px-4 text-white w-full max-w-7xl flex flex-col gap-4">
        <PrismicRichText field={slice.primary.title} components={components} />
        <div>
          <PrismicRichText
            field={slice.primary.content}
            components={contentComponents}
          />
        </div>
        <div>
          <PrismicRichText
            field={slice.primary.subcontent}
            components={components}
          />
        </div>
        <div className="">
          <PrismicRichText
            field={slice.primary.imagesection}
            components={components}
          />
          <PrismicImage
            field={slice.primary.image}
            className="pt-4 max-h-[60vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
