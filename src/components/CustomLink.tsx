import Link from "next/link";
import { twMerge } from "tailwind-merge";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function CustomLink({ href, children, className }: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        `font-bold text-white bg-custm_pink p-4 min-w-[165px] text-center rounded-xl hover:scale-105 transition-transform duration-200`,
        className
      )}
    >
    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44973111.js"></script>
      {children}
    </Link>
  );
}
export default CustomLink;
