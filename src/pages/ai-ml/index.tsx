import { createClient } from "@/prismicio";
import type { GetStaticPropsContext } from "next";
import { DefaultSeo } from "next-seo";
import { FC } from "react";

import Banner from "@/components/ai-ml/Banner";
import BenefitsSection from "@/components/ai-ml/BenefitsSection";
import DataScienceSection from "@/components/ai-ml/DataScienceSection";
import Divider from "@/components/ai-ml/Divider";
import ExamplesSection from "@/components/ai-ml/ExamplesSection/ExamplesSection";
import Navigation from "@/components/ai-ml/Navigation";
import ProcessSection from "@/components/ai-ml/ProcessSection";
import ReadySection from "@/components/ai-ml/ReadySection";
import SignsYouNeedAiSection from "@/components/ai-ml/SingsYouNeedAiSection";
import WhatIsAiSection from "@/components/ai-ml/WhatIsAiSection";
import WhyUsSection from "@/components/ai-ml/WhyUsSection";

const AiMl: FC<any> = ({ page }) => {
  const {
    ai_video,
    data_science,
    what_is_ai,
    ai_steps,
    ai_signs,
    benefits,
    examples,
    why_us_image,
    why_us_list,
    meta_title,
    meta_description,
    meta_image,
    meta_url,
    slices,
  } = page.data;

  const imageUrl = meta_image?.url || "";
  const pageUrl = meta_url || "";

  return (
    <>
      <DefaultSeo
        title={meta_title}
        description={meta_description}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: pageUrl,
          title: meta_title || "NSigma",
          description: meta_description || "Default description",
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: meta_title || "NSigma",
            },
          ],
          site_name: "NSigma",
        }}
        twitter={{
          handle: "@yourhandle",
          site: "@yourhandle",
          cardType: "summary_large_image",
        }}
      />

      <div className="bg-[#000200]">
        <Banner content={ai_video} />
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
