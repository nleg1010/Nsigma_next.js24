import Subheader from "./Subheader";

export default function Banner() {
	return (
		<>
			<main className="relative flex items-center justify-center h-screen mb-12 overflow-hidden -mt-20">
				<div className="relative z-30 text-2xl bg-opacity-50 rounded-xl">
					<div className="flex items-center justify-center bg-black/30 w-screen h-screen">
						<div className="container h-full w-full grid-rows-[1fr,1fr] gap-4 px-4 grid justify-center items-end">
							<h1 className="md:text-6xl text-3xl md:leading-[70px] w-full font-black text-white text-center  mb-5">
								Feel the Power of an{" "}
								<span className="from-[#b0cb48] bg-gradient-to-r to-[#83E868] bg-clip-text text-transparent">
									In-House Data Team,
								</span>{" "}
								<br /> Without the Overhead
							</h1>
							<div className="md:text-2xl md:font-medium text-sm text-center text-white self-start">
								<Subheader />
							</div>
						</div>
					</div>
				</div>
				<video
					autoPlay
					muted
					playsInline
					className="absolute z-10 w-auto min-w-full h-full max-w-none object-cover"
				>
					<source src="/test2.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</main>
		</>
	);
}
