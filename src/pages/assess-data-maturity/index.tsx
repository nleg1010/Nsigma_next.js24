import { useEffect } from "react";

const AssessDataMaturity = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-[#111827] text-[#E5E7EB] overflow-hidden relative">
      <iframe
        data-tally-src="https://tally.so/r/3EBBPl?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Data Science Questionnaire"
        className="absolute top-0 left-0 w-full h-full border-0"
      ></iframe>
    </div>
  );
};

export default AssessDataMaturity;
