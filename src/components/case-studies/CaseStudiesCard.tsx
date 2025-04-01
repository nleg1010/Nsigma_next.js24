import { ImageFieldImage, KeyTextField, LinkField } from "@prismicio/client";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import {} from "tailwind-merge";

export type CaseStudiesCardProps = {
  title: KeyTextField;
  image: ImageFieldImage;
  link_to_page: LinkField;
};

const CaseStudiesCard = ({
  image,
  link_to_page,
  title,
}: CaseStudiesCardProps) => {
  return (
    <Link
      href={`case/${link_to_page}`}
      className="block bg-cover bg-center w-[500px] h-[300px] mt-0 rounded-md pt-12 pb-5 text-white "
      style={{
        backgroundImage: image.url ? `url(${image.url})` : undefined,
      }}
    >
      <div className="w-full h-full flex flex-col justify-between">
        <h2 className="px-10">{title}</h2>
        <div className="border-t-[1px] px-10 pt-4 border-[rgba(255,255,255,0.2)] flex justify-between items-center pr-3 text-white">
          <h5>View Case Study</h5>
          <CgArrowTopRight className="text-3xl" />
        </div>
      </div>
    </Link>
  );
};

export default CaseStudiesCard;
