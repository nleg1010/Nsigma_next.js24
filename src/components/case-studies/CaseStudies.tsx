import { KeyTextField } from "@prismicio/client";
import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import CaseStudiesCard, { CaseStudiesCardProps } from "./CaseStudiesCard";

export type CaseStudiesProps = {
  subtitle: KeyTextField;
  data: CaseStudiesCardProps[];
};

const CaseStudies = ({ data, subtitle }: CaseStudiesProps) => {
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
    <section
      className="container mx-auto px-4 pb-20 mt-32 pt-32"
      id="casestudy"
    >
      <div className="relative">
        <h4 className=" heading-1">Our Case Studies</h4>
        <h2 className="heading-2 pb-12">{subtitle}</h2>
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
