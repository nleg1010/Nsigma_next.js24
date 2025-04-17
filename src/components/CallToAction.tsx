import { KeyTextField, RichTextField } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { FaArrowRight } from "react-icons/fa";

export type CallToActionProps = {
  title: RichTextField | KeyTextField;
  subtitle?: RichTextField | KeyTextField;
  buttonText?: KeyTextField;
};

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p>{children}</p>,
};
const CallToAction = ({
  title,
  subtitle,
  buttonText = "Talk to our Experts",
}: CallToActionProps) => {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden flex items-center justify-center px-8 md:px-0">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="font-bold text-white uppercase md:text-[42px] text-2xl md:leading-[50px]  mt-1 text-center mb-8">
          {/* Ready to <span className="text-[#F6AF23]">get started?</span> */}
          {typeof title === "string" ? (
            title
          ) : (
            <PrismicRichText field={title} components={components} />
          )}
        </h2>
        <p className="text-xl xl:text-2xl leading-6 lg:px-6 text-gray-300 mb-12 max-w-2xl mx-auto">
          Join the group of satisfied customers who trust our expertise to
          deliver exceptional results.
        </p>
        <button className="bg-[#F6AF23] mx-auto font-semibold rounded-xl text-xl p-3 flex items-center gap-2 text-black hover:scale-[0.95] transition-all">
          {buttonText} <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
