import { KeyTextField } from "@prismicio/client";
import { BsDownload } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

export type BannerProps = {
  title: KeyTextField;
  subtitle: KeyTextField;
  buttonText: KeyTextField;
  secondButtonText: KeyTextField;
};
export const Banner = ({
  title,
  subtitle,
  buttonText,
  secondButtonText,
}: BannerProps) => {
  return (
    <div className="h-screen w-full flex justify-center text-white maaas-bg-image">
      <div className="container px-8 md:px-0 h-full flex flex-col justify-center items-start text-left gap-10">
        <h1 className="text-left font-bold md:text-6xl text-3xl md:leading-[80px]">
          {title}
        </h1>
        <h2>{subtitle}</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-[#fac400] font-semibold rounded-full p-4 flex items-center gap-2 hover:scale-95 transition-transform text-black">
            {buttonText}
            <FaArrowRight />
          </button>
          <button className="bg-transparent border border-[#fac400] font-semibold rounded-full p-4 flex items-center gap-2 hover:scale-95 transition-transform text-white">
            {secondButtonText}
            <BsDownload />
          </button>
        </div>
      </div>
    </div>
  );
};
