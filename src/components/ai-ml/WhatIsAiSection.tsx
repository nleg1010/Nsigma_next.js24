type WhatIsAiSectionProps = {
  content: string;
};

function WhatIsAiSection({ content }: WhatIsAiSectionProps) {
  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="What Are AI/ML"
    >
    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44973111.js"></script>
      <div className="container flex flex-col gap-12 text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          What is <span className="grad">AI/ML and Predictive Analytics </span>
          and how do they work together?
        </h2>
        <div className="text-xl whitespace-pre-line">{content}</div>
      </div>
    </section>
  );
}
export default WhatIsAiSection;
