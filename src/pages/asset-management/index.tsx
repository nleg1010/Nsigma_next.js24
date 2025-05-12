import { ApplicationsProps } from "@/components/asset-management/applications";
import { BannerProps } from "@/components/asset-management/banner";
import { ModularFrameworkProps } from "@/components/asset-management/modular-framework";
import CallToAction from "@/components/asset-management/new version/call-to-action";
import Challenge from "@/components/asset-management/new version/challenge";
import ComponentsSection from "@/components/asset-management/new version/components-section";
import Hero from "@/components/asset-management/new version/hero";
import Impact from "@/components/asset-management/new version/impact";
import MosaicInfographic from "@/components/asset-management/new version/mosaic-infographics";
import MosaicIntro from "@/components/asset-management/new version/mosaic-intro";
import WhyNsigma from "@/components/asset-management/new version/why-nsigma";
import { ProblemSectionProps } from "@/components/asset-management/problem-section";
import { WhyUsProps } from "@/components/asset-management/why-us";
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
    applications,
    rwa_title,
    lower_cta_button_text,
    lower_cta_title,
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

  const applicationsData: ApplicationsProps = {
    title: rwa_title,
    applications,
  };

  // const cta: CallToActionProps = {
  //   title: lower_cta_title,
  //   buttonText: lower_cta_button_text,
  // };

  return (
    // <div className="bg-[#07080a]">
    //   <Banner {...bannerData} />
    //   <ProblemSection {...problemData} />
    //   <ModularFramework {...modulesData} />
    //   <WhyUs {...whyUsData} />
    //   <Applications {...applicationsData} />
    //   <CallToAction {...cta} />
    // </div>
    <div className="min-h-screen bg-[#111827] text-[#E5E7EB]">
      <Hero />
      <Challenge />
      <MosaicIntro />
      <div className="black-radial-gradient">
        <ComponentsSection />
        <MosaicInfographic />
      </div>
      <Impact />
      <WhyNsigma />
      <CallToAction />
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
