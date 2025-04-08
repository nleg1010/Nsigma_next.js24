import { KeyTextField, RichTextField } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { FaArrowRight } from "react-icons/fa";

type CallToActionProps = {
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
    <div className="w-full h-fit lg:h-screen text-white pb-64 pt-40 flex content-center items-center px-4 md:px-0 cta-background">
      <div className="container min-h-[500px] text-center mx-auto flex flex-col items-center justify-center p-8 sm:p-24 gap-4 rounded-[40px]">
        <h1 className="text-3xl sm:text-4xl lg:text-[46px] md:leading-[50px] w-full font-semibold lg:px-[10%]">
          {typeof title === "string" ? (
            title
          ) : (
            <PrismicRichText field={title} components={components} />
          )}
        </h1>
        {subtitle && (
          <h3 className="text-xl">
            {typeof subtitle === "string" ? (
              subtitle
            ) : (
              <PrismicRichText field={subtitle} components={components} />
            )}
          </h3>
        )}
        <button className="bg-[#fac400] font-semibold rounded-full text-xl p-3 flex items-center gap-2 text-black hover:scale-[0.95] transition-all">
          {buttonText} <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
