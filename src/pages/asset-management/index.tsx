import { Banner, BannerProps } from "@/components/asset-management/banner";
import ProblemSection, {
  ProblemSectionProps,
} from "@/components/asset-management/ProblemSection";
import Transcending, {
  TranscendingProps,
} from "@/components/asset-management/Transcending";
import CallToAction from "@/components/CallToAction";
import { createClient } from "@/prismicio";
import { GetStaticPropsContext } from "next";
import { AssetManagementDocumentData } from "../../../prismicio-types";

const AssetManagement = ({ page }: any) => {
  const {
    hero_title,
    hero_subtitle,
    hero_button_text,
    upper_cta_heading,
    upper_cta_button_text,
    problem_title,
    problem_info,
    problem_content,
    problem_image,
    problem_end_content,
    transcending_title,
    transcending_paragraph_1,
    transcending_paragraph_2,
    transcending_paragraph_3,
  } = page.data as AssetManagementDocumentData;

  const bannerData: BannerProps = {
    title: hero_title,
    subtitle: hero_subtitle,
    buttonText: hero_button_text,
  };

  const problemData: ProblemSectionProps = {
    title: problem_title,
    info: problem_info,
    content: problem_content,
    image: problem_image,
    endContent: problem_end_content,
  };

  const transcendingData: TranscendingProps = {
    title: transcending_title,
    paragraph_1: transcending_paragraph_1,
    paragraph_2: transcending_paragraph_2,
    paragraph_3: transcending_paragraph_3,
  };

  return (
    <div className="bg-[#07080a]">
      <Banner {...bannerData} />
      <CallToAction
        title={upper_cta_heading as any}
        buttonText={upper_cta_button_text}
      />
      <ProblemSection {...problemData} />
      <Transcending {...transcendingData} />
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
