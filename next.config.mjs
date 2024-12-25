/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.prismic.io"],
  },
  compress: true,
  async headers() {
    return [
      {
        source:
          "/:all*(svg|jpg|png|gif|ico|woff|woff2|ttf|otf|eot|mp4|webm|ogg|mp3|wav|flac|aac|m4a|m4v|pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar|7z)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Expires",
            value: "Thu, 31 Dec 2037 23:55:55 GMT",
          },
        ],
      },
      {
        source: "/:all*(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Expires",
            value: "Thu, 31 Dec 2037 23:55:55 GMT",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
