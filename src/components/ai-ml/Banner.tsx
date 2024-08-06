import CustomLink from "../CustomLink";
import Link from "next/link"

export default function Banner({ content }: any) {
  return (
    <>
    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/44973111.js"></script>
      <main className="relative flex items-center justify-center h-screen mb-12 overflow-hidden -mt-20">
        <div className="relative z-30 text-2xl bg-opacity-50 rounded-xl">
          <div className="flex items-center justify-center bg-black/30 w-screen h-screen">
            <div className="container h-full w-full flex gap-4 px-4 justify-center items-center flex-col">
              <div className="md:text-6xl text-3xl md:leading-[70px] w-full font-semibold text-white text-center  mb-5">
                <h1>
                  AI/ML &{" "}
                  <span className="inline-block grad">
                    Predictive Analytics
                  </span>
                </h1>
              </div>
              <Link href="/contact-us" className="text-white bg-custm_pink min-w-[165px] text-center rounded-xl hover:scale-105 transition-transform duration-200 p-2 font-normal" style={{fontWeight: '999', padding: '20px', fontSize: '25px'}}>
                Get started
              </Link>
            </div>
          </div>
        </div>
        <video
          autoPlay
          muted
          playsInline
	  loop
          className="absolute z-10 w-auto min-w-full h-full max-w-none object-cover"
        >
          <source src={content?.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  );
}
