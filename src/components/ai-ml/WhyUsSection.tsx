import { PrismicRichText } from "@prismicio/react";



type WhyUsSectionProps = {
  data: {
    image: { url: string };
    content: Array<{
      title: string;
      description: string;
      topic: any;
      content: any;
    }>;
  };
};

function WhyUsSection({ data }: WhyUsSectionProps) {

  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="Why Us"
    >
    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44973111.js"></script>
      <div className="container text-white flex flex-col px-4 justify-center items-center w-full gap-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why to Choose NSigma for{" "}
          <span className="grad">AI/ML and Predictive Analytics</span> Services
        </h2>
        <div className="grid xl:grid-cols-3 gap-4">
          <div className="relative xl:col-span-2 w-full h-[200px] sm:h-[300px] md:h-[500px]">
            <img
              src={data.image.url}
              alt="AI/ML and Predictive Analytics"
              className="object-cover object-center absolute top-0 left-0 w-full h-full right-0 bottom-0"
            />
          </div>
          <div className="flex flex-col gap-4">
            {data?.content?.map(({ topic, content }, i) => (
              <div className="flex flex-col" key={i}>
                <h3 className="grad text-2xl"><PrismicRichText field={topic} /></h3>
                <div className="text-white"><PrismicRichText field={content} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyUsSection;
