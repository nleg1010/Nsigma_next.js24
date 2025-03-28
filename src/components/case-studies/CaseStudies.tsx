import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import CaseStudiesCard, { CaseStudiesCardProps } from "./CaseStudiesCard";

type CaseStudiesProps = {
  data: CaseStudiesCardProps[];
};

const CaseStudies = ({ data }: CaseStudiesProps) => {
  const slider = useRef<any>(null);

  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    className: "center",
    centerMode: true,
    centerPadding: "10px",
  };

  return (
    <section className="container mx-auto px-4 pb-20 mt-64">
      <div className="relative">
        <h2 className=" text-2xl mt-5 md:text-[42px] font-extrabold text-white text-left pb-16">
          Our Case Studies
        </h2>
      </div>
      <section className="w-full h-full mx-auto pt-10 flex justify-center relative text-white">
        <Slider {...settings}>
          {data?.map((item, idx: number) => (
            <CaseStudiesCard {...item} key={idx} />
          ))}
        </Slider>
      </section>
    </section>
  );
};

export default CaseStudies;
