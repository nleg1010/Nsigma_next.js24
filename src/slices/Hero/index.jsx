import { PrismicRichText } from "@prismicio/react";
import { useRouter } from "next/router";

const components = {
  heading5: ({ children }) => <h5 className="pt-4">{children}</h5>,
};

const TitleWithButton = ({ slice }) => {
  const { title, video, button } = slice.primary;
  const Id = title[0]?.text;
  const router = useRouter();

  return (
    <section
      id={Id}
      className="relative flex items-center justify-center h-screen mb-12 overflow-hidden -mt-28"
    >
      <div className="relative z-30 text-2xl bg-opacity-50 rounded-xl">
        <div className="flex items-center justify-center bg-black/30 w-screen h-screen">
          <div className="container h-full w-full flex gap-4 px-4 justify-center items-center flex-col">
            <div className="md:text-6xl text-3xl md:leading-[70px] w-full font-semibold text-white text-center mb-5 title">
              <PrismicRichText field={title} components={components} />
            </div>

            <button
              className="btn-primary cta-button flex justify-center items-center gap-2 text-black shadow-md group transition"
              onClick={() => router.push(button?.url || "#")}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      {/* <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute z-10 w-auto min-w-full h-full max-w-none object-cover"
      >
        <source src={video?.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </section>
  );
};

export default TitleWithButton;
