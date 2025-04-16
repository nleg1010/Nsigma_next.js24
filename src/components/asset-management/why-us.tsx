import { KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { AssetManagementDocumentDataReasonsItem } from "../../../prismicio-types";

export type WhyUsProps = {
  title: KeyTextField;
  reasons: AssetManagementDocumentDataReasonsItem[];
};

const WhyUs = ({ title, reasons }: WhyUsProps) => {
  return (
    <div className="container px-3 flex justify-center items-center">
      <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
        {reasons.map(({ icon, info, title }, idx) => (
          <div className="bg-slate-400 flex flex-col">
            <PrismicNextImage field={icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
