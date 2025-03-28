export default function Banner() {
  return (
    <main className="relative flex items-center justify-center h-screen overflow-hidden bg-center bg-cover bg-[url(/images/banner.png)]">
      <div className="relative z-30 text-2xl bg-opacity-50 rounded-xl">
        <div className="flex items-center justify-center bg-black/30 w-screen h-screen p-4">
          <div className="container flex-col justify-items-start items-end text-white">
            <h1 className="md:text-6xl text-3xl md:leading-[80px] w-full font-semibold text-left  mb-6">
              Elite Data Science
              <br />
              and AI Solutions <br />
              at Unmatched Value
            </h1>
            <h3>World-Class Data Teams That Scale With Your Ambitions</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
