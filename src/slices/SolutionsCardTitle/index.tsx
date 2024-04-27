import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type SolutionsCardTitleProps =
  SliceComponentProps<Content.SolutionsCardTitleSlice>;

const SolutionsCardTitle = ({
  slice,
}: SolutionsCardTitleProps): JSX.Element => {
  return (
    <section
      id={slice.primary.name || ""}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center py-16"
    >
      <div className="text-white w-full max-w-7xl flex flex-col items-center gap-16 px-4">
        <div className="flex flex-col scale-75 md:scale-100 text-4xl gap-2">
          <h2 className="title text-5xl">
            <strong>{slice.primary.name}</strong>
          </h2>
          <div className="flex flex-col font-bold">
            {slice.primary.name === "INVEST-Ops" ? (
              <>
                <span>
                  <span className="text-[#c9b139]">IN</span>telligent &
                </span>
                <span>
                  <span className="text-[#c9b139]">V</span>ersatile
                </span>
                <span>
                  <span className="text-[#c9b139]">E</span>xtraction,
                </span>
                <span>
                  <span className="text-[#c9b139]">S</span>tandardization &
                </span>
                <span>
                  <span className="text-[#c9b139]">T</span>ransformation
                </span>
              </>
            ) : null}
            {slice.primary.name === "OPTIMA-Ops" ? (
              <>
                <span>
                  <span className="text-[#c9b139]">O</span>ptimal &
                </span>
                <span>
                  <span className="text-[#c9b139]">P</span>redictive
                </span>
                <span>
                  <span className="text-[#c9b139]">T</span>echniques &
                </span>
                <span>
                  <span className="text-[#c9b139]">I</span>nsightful
                </span>
                <span>
                  <span className="text-[#c9b139]">M</span>arket
                </span>
                <span>
                  <span className="text-[#c9b139]">A</span>nalytics
                </span>
              </>
            ) : null}
            {slice.primary.name === "VISION-Ops" ? (
              <>
                <span>
                  <span className="text-[#c9b139]">V</span>isual
                </span>
                <span>
                  <span className="text-[#c9b139]">I</span>nsights &
                </span>
                <span>
                  <span className="text-[#c9b139]">S</span>trategic
                </span>
                <span>
                  <span className="text-[#c9b139]">O</span>utputs for
                </span>
                <span>
                  <span className="text-[#c9b139]">I</span>nvestment
                </span>
                <span>
                  <span className="text-[#c9b139]">N</span>avigation
                </span>
              </>
            ) : null}
            {slice.primary.name === "ADVANCE-Ops" ? (
              <>
                <span>
                  <span className="text-[#c9b139]">A</span>gile
                </span>
                <span>
                  <span className="text-[#c9b139]">D</span>ata
                </span>
                <span>
                  <span className="text-[#c9b139]">V</span>alidation
                </span>
                <span>
                  <span className="text-[#c9b139]">A</span>utomation &
                </span>
                <span>
                  <span className="text-[#c9b139]">N</span>ext-Gen
                </span>
                <span>
                  <span className="text-[#c9b139]">C</span>ontinuous
                </span>
                <span>
                  <span className="text-[#c9b139]">E</span>volution
                </span>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCardTitle;
