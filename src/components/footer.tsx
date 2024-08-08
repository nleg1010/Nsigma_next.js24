import Link from "next/link";
import { FaChevronRight, FaEnvelope } from "react-icons/fa";
import Socials from "./Socials";
import { twMerge } from "tailwind-merge";

const routes = [
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
    name: "About",
    sublinks: [
      { name: "Our Story", link: "/nsigma-story" },
      { name: "Careers", link: "/careers" },
    ],
  },
  {
    name: "Solutions",
    link: "/#",
    sublinks: [
      { name: "Asset Management", link: "/asset-management" },
      { name: "Real Estate ", link: "/real-estate" },
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
    <footer className="bg-Gray relative">
      <div className="container mx-auto px-4 flex md:flex-row flex-col justify-between items-center gap-7 pt-16 pb-10 border-b border-[#696B76]/40">
        <div className="md:w-1/2 flex justify-center sm:justify-start w-full">
          <Link href="/" className="inline-block">
            <img
              src="/images/footer-logo.png"
              alt="logo"
              width={250}
              height={76}
            />
          </Link>
        </div>
        <div className="md:w-1/2 w-full flex flex-col sm:flex-row justify-between items-center gap-7">
          <h5 className="md:text-[34px] text-2xl font-bold text-white">
            Ready to get started?
          </h5>
          <Link
            href="/contact-us"
            className="text-white bg-custm_pink min-w-[165px] text-center rounded-xl hover:scale-105 transition-transform duration-200 p-2 font-normal"
            style={{ fontWeight: "999", padding: "20px", fontSize: "25px" }}
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 flex md:flex-row flex-col justify-between gap-7 pt-10 pb-16 relative z-[1]">
        <div className="md:w-[30%] w-full">
          <h6 className="md:text-[22px] md:leading-8 text-lg font-bold text-white">
            Subscribe to our newsletter
          </h6>
          <form className="relative my-10">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Your Email Adreess"
              className="text-sm font-normal text-[#858B93] placeholder:text-[#858B93] appearance-none bg-transparent p-4 rounded-[26px] outline-none border border-[#272633] w-full"
            />
            <button
              onClick={(e) => handleMail(e)}
              className="text-2xl text-white bg-gradient-to-r from-[#EB9204] to-[#83E868] h-[38px] w-[38px] inline-flex items-center justify-center rounded-full absolute right-2 inset-y-1/2 -translate-y-1/2"
            >
              <FaChevronRight />
            </button>
          </form>
          <Socials className="hidden md:flex" />
        </div>
        <div className="md:w-[70%] w-full grid md:grid-cols-3 grid-cols-2 gap-7">
          {routes.map(({ name, sublinks }, i) => (
            <div
              className={twMerge(
                "flex flex-col gap-2",
                i === 0 && "row-span-2"
              )}
            >
              <h6 className="md:text-[22px] md:leading-8 text-md font-bold text-white pb-4">
                {name}
              </h6>
              {sublinks.map(({ name, link }) => (
                <ul className="flex flex-col gap-2">
                  <li className="pt-">
                    <Link
                      href={link}
                      className="text-sm md:text-xl font-medium  text-lightGray hover:text-white transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          ))}
          <div className="text-lightGray text-md">
            <h6 className="md:text-[22px] md:leading-8 pb-4 text-md font-bold text-white">
              Contact
            </h6>
            <p>
              NSigma Global <br />
              2915 Biscayne Blvd
              <br />
              Miami, FL 33137
            </p>
            <Link className="flex items-center" href="mailto:info@nsigma.io">
              <div className=" flex flex-row gap-1 items-center">
                <FaEnvelope />
                info@nsigma.io
              </div>
            </Link>
            <Socials className="pt-2 md:hidden items-start gap-2" />
          </div>
        </div>
      </div>
      {/* <img src="/images/abstract.png" alt='abstract' width={94} height={250} className='absolute left-4 bottom-5 -z-0' /> */}
    </footer>
  );
}
