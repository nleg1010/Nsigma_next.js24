import AnimatedSection from "../expertise/animated-section";

const PageBanner = ({ title, subtitle }: any) => {
  return (
    <section className=" bg-cover bg-no-repeat bg-center -mt-28">
      <div className='h-[50vh] flex items-center justify-center bg-[url("/images/particles.png")] bg-cover bg-no-repeat bg-top w-full'>
        <div className="bg-black/0 w-full h-full pt-20 flex justify-center items-center">
          <div className="container flex-col justify-items-center items-end text-white">
            <AnimatedSection delay={100} duration={1000} animation="slide-up">
              <h1 className="md:text-6xl text-3xl md:leading-[80px] w-full font-semibold text-center  mb-6">
                {title}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={100} duration={1000} animation="slide-up">
              <h3>{subtitle}</h3>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
