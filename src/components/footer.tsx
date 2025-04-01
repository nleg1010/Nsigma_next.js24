import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Socials from "./Socials";

const routes = [
  {
    name: "About",
    sublinks: [
      { name: "Our Story", link: "/nsigma-story" },
      { name: "Careers", link: "/careers" },
    ],
  },
  {
    name: "Services",
    sublinks: [
      {
        name: "Data Strategy & AI Consulting",
        link: "/data-strategy",
      },
      { name: "AI/ML & Predictive Analytics", link: "/ai-ml" },
      {
        name: "AI TotalOps : Data, ML and Security",
        link: "/aitotalops",
      },
      { name: "Data Engineering", link: "/data-engineering" },
      {
        name: "Computer vision & IoT Solutions",
        link: "/computer-vision-iot",
      },
      {
        name: "Data Visualizations & Business Intelligence (BI)",
        link: "/visualization-bi",
      },
    ],
  },
  {
    name: "Solutions",
    link: "/#",
    sublinks: [{ name: "Asset Management", link: "/asset-management" }],
  },
  {
    name: "Contact Us",
    sublinks: [
      {
        name: "info@nsigma.io",
        link: "mailto:info@nsigma.io",
      },
    ],
  },
  {
    name: "Help",
    sublinks: [
      { name: "FAQs", link: "/frequent-questions" },
      { name: "Privacy Policy", link: "/privacy-policy" },
      { name: "Cookies Policy", link: "/cookies-policy" },
      { name: "Contact Us", link: "/contact-us" },
    ],
  },
];

export default function Footer() {
  const handleMail = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/mailsend");
  };

  return (
    <footer className="bg-[#07080a] relative">
      <div className="container mx-auto px-4 flex justify-between items-center flex-wrap gap-7 pt-16 pb-5">
        <div className="flex flex-col justify-center gap-2 lg:gap-3">
          <Link href="/" className="inline-block">
            <img
              src="/images/footer-logo.png"
              alt="logo"
              width={250}
              height={76}
            />
          </Link>
          <Socials className="pt-2 items-start gap-2" />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-7 min-w-[300px] w-[400px]">
          <div className="w-full">
            <h6 className="text-lg text-white">Subscribe to Our Newsletter</h6>
            <form className="relative flex bg-slate-200 w-full lg:min-w-[400px]">
              <label htmlFor="email" className="hidden">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Input your email"
                className="text-sm font-normal min-w-[100px] mr-12 bg-[#232728] text-[#858B93] placeholder:text-[#858B93] appearance-none p-4 outline-none border border-[#b6b5b7] w-full"
              />
              <button
                onClick={(e) => handleMail(e)}
                className=" min-w-28 h-full px-5 text-black bg-[#fac400] absolute right-0 top-0 flex items-center justify-center gap-2"
              >
                Subscribe
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 flex justify-center pt-5 pb-16 relative z-[1]">
        <div className="w-full grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-7">
          {routes.map(({ name, sublinks }, i) => (
            <div className="flex flex-col gap-2" key={i}>
              <h6 className="md:text-[22px] md:leading-8 text-md font-bold text-white pb-4">
                {name}
              </h6>
              {sublinks.map(({ name, link }, idx) => (
                <ul className="flex flex-col gap-2" key={idx}>
                  <li className="">
                    <Link
                      href={link}
                      className="text-sm md:text-[16px] font-medium  text-lightGray hover:text-white transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
