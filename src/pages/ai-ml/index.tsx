import { FC } from "react";
import Head from "next/head";
import { createClient } from "@/prismicio";
import type { GetStaticPropsContext } from "next";

import Banner from "@/components/ai-ml/Banner";
import Navigation from "@/components/ai-ml/Navigation";
import DataScienceSection from "@/components/ai-ml/DataScienceSection";
import WhatIsAiSection from "@/components/ai-ml/WhatIsAiSection";
import ProcessSection from "@/components/ai-ml/ProcessSection";
import Divider from "@/components/ai-ml/Divider";
import SignsYouNeedAiSection from "@/components/ai-ml/SingsYouNeedAiSection";
import ReadySection from "@/components/ai-ml/ReadySection";
import WhyUsSection from "@/components/ai-ml/WhyUsSection";
import BenefitsSection from "@/components/ai-ml/BenefitsSection";
import ExamplesSection from "@/components/ai-ml/ExamplesSection/ExamplesSection";

const AiMl: FC<any> = ({ page }) => {
  const {
    data_science,
    what_is_ai,
    ai_steps,
    ai_signs,
    benefits,
    examples,
    why_us_image,
    why_us_list,
  } = page.data;
  return (
    <>
      <Head>
        <title>Nsigma | Data Driven Intelligence</title>
      </Head>
      <div className="bg-[#000200]">
        <Banner />
        <Navigation />
        <DataScienceSection content={data_science} />
        <Divider />
        <WhatIsAiSection content={what_is_ai} />
        <Divider />
        <ProcessSection tabs={ai_steps} />
        <Divider />
        <SignsYouNeedAiSection cards={ai_signs} />
        <Divider />
        <BenefitsSection cards={benefits} />
        <Divider />
        <ExamplesSection examples={examples} />
        <Divider />
        <WhyUsSection data={{ image: why_us_image, content: why_us_list }} />
        <ReadySection />
      </div>
    </>
  );
};

export default AiMl;

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getSingle("ai_ml");

  return {
    props: { page },
  };
}
