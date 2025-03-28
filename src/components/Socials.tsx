import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { twMerge } from "tailwind-merge";

type SocialsProps = { className: string };

export default function Socials({ className }: SocialsProps) {
  return (
    <ul className={twMerge("flex flex-wrap gap-3", className)}>
      <li>
        <Link
          href="https://x.com"
          className="text-lg text-white hover:bg-lightGray transition-colors size-8 lg:size-10 inline-flex items-center justify-center rounded-full"
        >
          <FaXTwitter className="size-5 lg:size-6" />
        </Link>
      </li>
      <li>
        <Link
          href="mailto://info@nsigma.io"
          className="text-lg text-white hover:bg-lightGray transition-color  size-8 lg:size-10  inline-flex items-center justify-center rounded-full"
        >
          <MdOutlineMailOutline className="size-5 lg:size-6" />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/company/nsigma-global"
          className="text-lg text-white hover:bg-lightGray transition-color  size-8 lg:size-10  inline-flex items-center justify-center rounded-full"
        >
          <FaLinkedinIn className="size-5 lg:size-6" />
        </Link>
      </li>
    </ul>
  );
}
