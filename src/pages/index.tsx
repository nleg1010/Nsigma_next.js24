import { FC } from "react";
import { DefaultSeo } from "next-seo";
import { createClient } from "@/prismicio";
import type { GetStaticPropsContext } from "next";

import CaseStudies from "@/components/case-studies/CaseStudies";
import EngagementStrategies from "@/components/engagement-strategies/EngagementStrategies";
import Expertise from "@/components/expertise";
import AboutUs from "@/components/about-us/AboutUs";
import Banner from "@/components/banner";
import { PrismicRichText } from "@prismicio/react";
import Solutions from "@/components/solutions/Solutions";

const Home: FC<any> = ({ page }) => {
  const {
    questions,
    expertise,
    engagement,
    case_studies,
    about_content,
    why_cards,
    meta_title,
    meta_description,
    hero_video,
    solutions_subheader,
    solutions_content,
    solutions_tabs,
  } = page.data;
  return (
    <>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/44973111.js"
      ></script>
      <DefaultSeo title={meta_title} description={meta_description} />
      <div className="bg-[#000200]">
        <Banner video={hero_video?.url} />
        <Expertise data={expertise} />
        <Solutions
          data={{ solutions_subheader, solutions_content, solutions_tabs }}
        />
        <EngagementStrategies data={engagement} />
        <CaseStudies data={case_studies} />
        <AboutUs
          about={{
            content: about_content,
            whyCards: why_cards,
          }}
        />
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
