import CustomLink from "./CustomLink";
import Image from "next/image";

function Subheader() {
	return (
		<div className="w-full gap-4 flex items-center justify-center flex-col">
			<h2 className="text-white mt-5 text-lg md:text-3xl font-normal">
				<Image
					src="/images/logo.png"
					alt="logo"
					width={187}
					height={57}
					className="z-50 -mt-1 inline-block max-w-28 md:max-w-none"
				/>
				: Bespoke Data Science and AI Solutions That Match Your In-House Wildest
				Dreams, at a Fraction of the Cost
			</h2>
			<CustomLink href="/contact-us" className="font-semibold text-lg my-5">
				Get Started
			</CustomLink>
		</div>
	);
}
export default Subheader;
