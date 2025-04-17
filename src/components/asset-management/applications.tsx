import { KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { CgArrowBottomRight, CgArrowTopRight } from "react-icons/cg";
import { AssetManagementDocumentDataApplicationsItem } from "../../../prismicio-types";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export type ApplicationsProps = {
  title: KeyTextField;
  applications: AssetManagementDocumentDataApplicationsItem[];
};

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p className="text-white text-xl">{children}</p>,
};

const Applications = ({ title, applications }: ApplicationsProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="container mx-auto flex flex-col justify-center pt-64 px-8 md:px-0">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
        {title}
      </h2>

      <div
        id="slider"
        className="flex flex-col justify-center items-center md:justify-normal md:flex-row overflow-y-auto md:overflow-x-auto no-scrollbar scroll-smooth  pb-4 pt-20"
      >
        {applications.map(({ content, image, title }, idx) => {
          const [open, setOpen] = useState(false);
          const applicationAnimation = useMemo(
            () => ({
              height: open ? "45vh" : "35vh",
              minWidth: open && !isMobile ? "40vh" : "30vh",
            }),
            [open]
          );

          const handleClickOnApplication = () => {
            setOpen((prev) => !prev);
          };

          return (
            <motion.div
              className="relative cursor-pointer"
              onClick={handleClickOnApplication}
              key={idx}
              animate={applicationAnimation}
              style={{ minWidth: "30vh", height: "35vh" }}
            >
              <PrismicNextImage field={image} className="w-full h-full" />
              <div className="absolute h-full w-full top-0 flex flex-col justify-between gap-2 p-5">
                <div className="flex justify-end">
                  <div className="bg-white h-[40px] w-[40px] rounded-lg flex justify-center items-center">
                    {open ? (
                      <CgArrowBottomRight className="text-black text-3xl" />
                    ) : (
                      <CgArrowTopRight className="text-black text-3xl" />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-white">
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <motion.div animate={{ display: open ? "block" : "none" }}>
                    <PrismicRichText field={content} components={components} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Applications;
