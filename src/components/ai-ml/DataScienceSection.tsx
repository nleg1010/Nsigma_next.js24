type DataScienceSectionProps = {
  content: string;
};

function DataScienceSection({ content }: DataScienceSectionProps) {
  return (
    <section
      className="w-full flex justify-center items-center py-12"
      id="AI/ML and Predictive Analytics"
    >
    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44973111.js"></script>
      <div className="container flex flex-col gap-12 text-white px-4">
        <h2 className="grad text-3xl md:text-5xl font-bold">
          AI/ML & Predictive Analytics
        </h2>
        <div className="text-xl whitespace-pre-line">{content}</div>
      </div>
    </section>
  );
}
export default DataScienceSection;
