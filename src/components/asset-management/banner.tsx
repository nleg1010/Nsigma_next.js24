import { KeyTextField } from "@prismicio/client";
import { FaArrowRight } from "react-icons/fa6";

export type BannerProps = {
  title: KeyTextField;
  subtitle: KeyTextField;
  buttonText: KeyTextField;
};
export const Banner = ({ title, subtitle, buttonText }: BannerProps) => {
  return (
    <div className="h-screen w-full bg-[#d9d9d9] flex justify-center text-white">
      <div className="container h-full flex flex-col justify-center items-start text-left gap-10">
        <h1 className="text-left font-bold md:text-6xl text-3xl md:leading-[80px]">
          {title}
        </h1>
        <h2>{subtitle}</h2>
        <button className="bg-[#fac400] font-semibold rounded-full p-4 flex items-center gap-2 hover:scale-95 transition-transform text-black">
          {buttonText}
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
