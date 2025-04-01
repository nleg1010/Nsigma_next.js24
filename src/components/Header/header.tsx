import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import MenuItemWithSubMenu from "./MenuItemWithSubMenu";

const routes = [
  {
    name: "Our Expertise",
    link: "/#expertise",
    sublinks: [
      {
        name: "Data Strategy & AI Consulting",
        link: "/data-strategy",
      },
      { name: "AI/ML & Predictive Analytics", link: "/ai-ml" },
      {
        name: "Data Visualization & Business Intelligence (BI)",
        link: "/visualization-bi",
      },
      { name: "AI TotalOps:Data, ML & Security", link: "/aitotalops" },
      { name: "Data Engineering", link: "/data-engineering" },
      {
        name: "Computer Vision & IoT Solutions",
        link: "/computer-vision-iot",
      },
    ],
  },
  {
    name: "Solutions",
    link: "/#solutions",
    sublinks: [
      { name: "Asset Management", link: "/asset-management" },
      { name: "Real Estate ", link: "" },
    ],
  },
  {
    name: "Case Studies",
    link: "/#casestudy",
  },
  {
    name: "Talk to Our Experts",
    link: "/contact-us",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [upperAnimation, setUpperAnimation] = useState({
    rotate: 0,
    translateY: 0,
  });
  const [middleAnimation, setMiddleAnimation] = useState({
    width: "2.5rem",
  });
  const [lowerAnimation, setLowerAnimation] = useState({
    rotate: 0,
    translateY: 0,
  });

  const handleOpen = () => {
    setOpen(!open);
    if (!open) {
      setUpperAnimation({ rotate: 45, translateY: 10 });
      setMiddleAnimation({ width: "0" });
      setLowerAnimation({ rotate: -45, translateY: -10 });
    } else {
      setUpperAnimation({ rotate: 0, translateY: 0 });
      setMiddleAnimation({ width: "2.5rem" });
      setLowerAnimation({ rotate: 0, translateY: 0 });
    }
  };

  const linksVariants: Variants = {
    close: {
      opacity: 0.5,
      height: 0,
    },
    open: {
      opacity: 1,
      height: "auto",
    },
  };

  return (
    <nav className="z-50 flex top-0 w-full my-4 justify-center fixed rounded-full bg-black bg-opacity-15 backdrop-blur-sm">
      <div className="container flex items-center justify-between font-bold py-3 px-5 lg:px-0">
        <div className="md:w-1/5 lg:w-1/4 w-1/2 z-50">
          <Link href="/" className="inline-block">
            <img
              src="/images/logo.png"
              alt="logo"
              width={156}
              height={48}
              className="z-50"
            />
          </Link>
        </div>
        <div className="flex items-center lg:w-4/5 justify-between text-center">
          {routes.map(({ name, link, sublinks }, i) => (
            <div key={name} className="hidden lg:block relative group">
              <Link
                href={link}
                key={i}
                className={twMerge(
                  `hidden p-2 md:flex md:items-center gap-2 md:text-lg text-base font-semibold text-white `,
                  i === routes.length - 1
                    ? "bg-[#FBC400] p-3 min-w-[156px] text-center text-black rounded-full hover:scale-105 transition-transform"
                    : "hover:text-[#c8ccce]"
                )}
              >
                <span>{name}</span>
                {sublinks && <FaAngleDown />}
                {i === routes.length - 1 && <FaArrowRight />}
              </Link>
              <div className="flex w-full flex-col top-[calc(100%)] md:group-hover:flex group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden duration-300 transition-all h-0 absolute">
                <span className="pt-4"></span>
                <div
                  className={twMerge(
                    "bg-Gray/75 rounded-b-xl gap-2 flex flex-col",
                    sublinks && "py-2"
                  )}
                >
                  {sublinks?.map(({ name, link }) => (
                    <Link
                      href={link}
                      key={name}
                      className={twMerge(
                        `p-2 md:text-sm text-base font-semibold text-white `,
                        "hover:bg-blue-100 hover:bg-opacity-20"
                      )}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/*
                     MOBILE LAYOUT 
                     */}

          <motion.button
            className="flex flex-col items-center gap-2 lg:hidden"
            onClick={handleOpen}
            aria-label="Open navigation menu"
          >
            <motion.div
              className="h-[2px] w-10 bg-white"
              animate={upperAnimation}
            ></motion.div>
            <motion.div
              className="h-[2px] w-10 bg-white"
              animate={middleAnimation}
            ></motion.div>
            <motion.div
              className="h-[2px] w-10 bg-white"
              animate={lowerAnimation}
            ></motion.div>
          </motion.button>

          <motion.div
            className="absolute left-0 bg-Gray overflow-hidden top-[100%] z-20 flex w-full origin-top flex-col items-end gap-8 pr-4 lg:!hidden lg:flex-row text-white"
            variants={linksVariants}
            initial="close"
            animate={open ? "open" : "close"}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <span></span>
            {/* Empty span here is needed so it acts as padding and doesn't break the animation */}
            {routes.map(({ name, link, sublinks }, i) =>
              sublinks != null ? (
                <MenuItemWithSubMenu
                  key={i}
                  item={{ name, link, subMenuItems: sublinks }}
                  toggleOpen={setOpen}
                />
              ) : (
                <Link
                  href={link}
                  key={i}
                  className={twMerge(
                    `p-2 md:text-lg text-base font-semibold text-white`,
                    i === routes.length - 1
                      ? "bg-[#FBC400] p-3 min-w-[156px] text-center rounded-xl text-black"
                      : "hover:text-[#c8ccce]"
                  )}
                  onClick={handleOpen}
                  style={{ marginBottom: "-10px" }}
                >
                  {name}
                </Link>
              )
            )}
            <span></span>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
