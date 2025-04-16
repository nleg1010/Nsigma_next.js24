import { Banner, BannerProps } from "@/components/asset-management/banner";
import ModularFramework, {
  ModularFrameworkProps,
} from "@/components/asset-management/modular-framework";
import ProblemSection, {
  ProblemSectionProps,
} from "@/components/asset-management/problem-section";
import WhyUs, { WhyUsProps } from "@/components/asset-management/why-us";
import { createClient } from "@/prismicio";
import { GetStaticPropsContext } from "next";
import { AssetManagementDocumentData } from "../../../prismicio-types";

const AssetManagement = ({ page }: any) => {
  const {
    hero_title,
    hero_subtitle,
    hero_button_text,
    hero_second_button_text,
    problem_heading_1,
    problem_text_1,
    problem_heading_2,
    problem_text_2,
    problem_image,
    mf_title,
    mf_subtitle,
    modules,
    why_title,
    reasons,
  } = page.data as AssetManagementDocumentData;

  const bannerData: BannerProps = {
    title: hero_title,
    subtitle: hero_subtitle,
    buttonText: hero_button_text,
    secondButtonText: hero_second_button_text,
  };

  const problemData: ProblemSectionProps = {
    heading1: problem_heading_1,
    text1: problem_text_1,
    heading2: problem_heading_2,
    text2: problem_text_2,
    image: problem_image,
  };

  const modulesData: ModularFrameworkProps = {
    title: mf_title,
    subtitle: mf_subtitle,
    modules,
  };

  const whyUsData: WhyUsProps = {
    title: why_title,
    reasons,
  };

  return (
    <div className="bg-[#07080a]">
      <Banner {...bannerData} />
      <ProblemSection {...problemData} />
      <ModularFramework {...modulesData} />
      <WhyUs {...whyUsData} />
    </div>
  );
};

export default AssetManagement;

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const page = await client.getSingle("asset_management");

  return {
    props: { page },
  };
}
