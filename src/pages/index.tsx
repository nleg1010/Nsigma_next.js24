import { FC } from "react";
import Head from "next/head";
import { createClient } from "@/prismicio";
import type { GetStaticPropsContext } from "next";

import CaseStudies from "@/components/case-studies/CaseStudies";
import EngagementStrategies from "@/components/engagement-strategies/EngagementStrategies";
import Expertise from "@/components/expertise";
import AboutUs from "@/components/about-us/AboutUs";
import Banner from "@/components/banner";

const Home: FC<any> = ({ page, caseStudies, aboutUs }) => {
  const { questions, expertise, engagement } = page.data;
  return (
    <>
      <Head>
        <title>Nsigma | Data Driven Intelligence</title>
      </Head>
      <div className="bg-[#000200]">
        <Banner data={questions} />
        <Expertise data={expertise} />
        <EngagementStrategies data={engagement} />
        <CaseStudies data={caseStudies} />
        <AboutUs about={aboutUs.data} />
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getSingle("home");
  const aboutUs = await client.getSingle("about_us");
  const caseStudies = await client.getAllByType("case_studies");

  return {
    props: { page, caseStudies, aboutUs },
  };
}
