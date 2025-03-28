import { RichTextField } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { FaArrowRight } from "react-icons/fa";

type CallToActionProps = {
  title: RichTextField;
};

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p>{children}</p>,
};
const CallToAction = ({ title }: CallToActionProps) => {
  return (
    <div className="w-full text-white pb-64 pt-40 flex content-center items-center px-4">
      <div className="container cta-background min-h-[500px] text-center mx-auto flex flex-col items-center justify-center sm:p-24 gap-4 rounded-[40px]">
        <h1 className="text-3xl sm:text-4xl lg:text-[46px] md:leading-[50px] w-full font-semibold sm:px-[10%]">
          <PrismicRichText field={title} components={components} />
        </h1>
        <button className="bg-[#fac400] font-semibold rounded-full text-xl p-3 flex items-center gap-2 text-black hover:scale-[0.95] transition-all">
          Talk to our Experts <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
