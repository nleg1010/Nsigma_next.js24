import { createClient } from "@/prismicio";
import type { GetStaticPropsContext } from "next";
import { DefaultSeo } from "next-seo";
import { FC } from "react";

import AboutUs, { AboutUsProps } from "@/components/about-us/AboutUs";
import Banner from "@/components/banner";
import CallToAction from "@/components/CallToAction";
import CaseStudies, {
  CaseStudiesProps,
} from "@/components/case-studies/CaseStudies";
import EngagementStrategies, {
  EngagementStrategiesProps,
} from "@/components/engagement-strategies/EngagementStrategies";
import Expertise from "@/components/expertise";
import Solutions from "@/components/solutions/Solutions";
import { HomeDocumentData } from "../../prismicio-types";

const Home: FC<any> = ({ page }) => {
  const {
    ex_subtitle,
    ex_info,
    expertise,
    about_content,
    why_cards,
    meta_title,
    meta_description,
    hero_video,
    is_subheadline,
    is_intro,
    is_tabs,
    is_featured_case_study,
    featured_case_study_image,
    our_case_study,
    cs_subtitle,
    es_title,
    es_subtitle,
    es_info,
    strategies,
    cu_subtitle,
    cu_reasons,
    cta_top,
    cta_bottom,
  } = page.data as HomeDocumentData;

  const expertiseData = {
    subtitle: ex_subtitle,
    info: ex_info,
    data: expertise,
  };

  const industrySolutionsData = {
    is_subheadline,
    is_intro,
    is_tabs,
    is_featured_case_study,
    featured_case_study_image,
  };

  const engagementStrategiesData: EngagementStrategiesProps = {
    title: es_title,
    subtitle: es_subtitle,
    info: es_info,
    strategies,
  };

  const chooseUsData: AboutUsProps = {
    subtitle: cu_subtitle,
    reasons: cu_reasons,
  };

  const ourCaseStudyData: CaseStudiesProps = {
    subtitle: cs_subtitle,
    data: our_case_study,
  };

  return (
    <>
      <DefaultSeo
        title={meta_title as string}
        description={meta_description as string}
      />
      <div className="bg-nsigma-black">
        <Banner />
        <div className="black-radial-gradient">
          <Expertise {...expertiseData} />
          <Solutions {...industrySolutionsData} />
        </div>
        <CaseStudies {...ourCaseStudyData} />
        <EngagementStrategies {...engagementStrategiesData} />
        <AboutUs {...chooseUsData} />
        <CallToAction title={cta_bottom} />
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const page = await client.getSingle("home");

  return {
    props: { page },
  };
}
