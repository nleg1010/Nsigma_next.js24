import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type SocialsProps = { className: string };

export default function Socials({ className }: SocialsProps) {
  return (
    <ul className={twMerge("flex flex-wrap gap-3", className)}>
      <li>
        <Link
          href="https://x.com"
          className="text-lg text-white hover:bg-lightGray transition-colors bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full"
        >
          <FaTwitter />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/company/nsigma-global"
          className="text-lg text-white hover:bg-lightGray transition-colors bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full"
        >
          <FaLinkedinIn />
        </Link>
      </li>
      <li>
        <Link
          href="mailto://info@nsigma.io"
          className="text-lg text-white hover:bg-lightGray transition-colors bg-lightGray/20 h-[38px] w-[38px] inline-flex items-center justify-center rounded-full"
        >
          <FaEnvelope />
        </Link>
      </li>
    </ul>
  );
}
