import { KeyTextField, RichTextField } from "@prismicio/client";

export type TranscendingProps = {
  title: KeyTextField;
  paragraph_1: RichTextField;
  paragraph_2: RichTextField;
  paragraph_3: RichTextField;
};

const Transcending = ({
  title,
  paragraph_1,
  paragraph_2,
  paragraph_3,
}: TranscendingProps) => {
  return (
    <div className="container mx-auto mt-52 text-white flex justify-center">
      <h2 className="uppercase md:text-[42px] text-2xl md:leading-[50px] pb-6 font-semibold">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div></div>
      </div>
    </div>
  );
};

export default Transcending;
