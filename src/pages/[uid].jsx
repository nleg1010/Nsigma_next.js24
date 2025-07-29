import { SliceZone } from "@prismicio/react";
import { DefaultSeo } from "next-seo";

import { createClient } from "../prismicio";
import { components } from "../slices";

const Page = ({ page }) => {
  const { meta_title, meta_description, meta_image, meta_url } = page.data;
  console.log(meta_image);
  const imageUrl = meta_image?.url;
  const pageUrl = meta_url;
  return (
    <>
      <DefaultSeo
        title={meta_title || "NSigma"}
        description={meta_description || ""}
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
    paths: pages
      .map((page) => {
        return {
          params: { uid: page.uid },
        };
      })
      .filter((path) => path.params.uid !== "asset-management"),
    fallback: false,
  };
}
