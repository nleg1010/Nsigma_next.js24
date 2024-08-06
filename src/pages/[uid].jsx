import { DefaultSeo } from "next-seo";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices";

const Page = ({ page }) => {
  const { meta_title, meta_description } = page.data;
  return (
    <>
	<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44973111.js"></script>
      <DefaultSeo
        title={meta_title || "NSigma"}
        description={meta_description || ""}
      />

      <div className="bg-[#000200]">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid);

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}
