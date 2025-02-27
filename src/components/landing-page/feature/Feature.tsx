import SectionTitle from "@/lib/section-title";
import FeatureCard from "./FeatureCard";
import { CircleSlash, Earth, Coins } from "lucide-react";

const featuresArray = [
	{
		src: CircleSlash,
		title: "Zero Inventory Risk",
		description:
			"Products are made on-demand, eliminating upfront costs and stock management.",
	},
	{
		src: Earth,
		title: "Global Transactions",
		description:
			"Accept both crypto and fiat payments for borderless commerce. ",
	},
	{
		src: Coins,
		title: "Exclusive Access",
		description:
			"Create token-gated merchandise accessible only to specific token or NFT holders.",
	},
];

const Feature = () => {
	return (
		<section className=' bg-center mx-auto flex flex-col items-center justify-center w-[90%] md:w-[80%] my-[8rem]'>
			<SectionTitle title='Features' />
			<h1 className='font-manrope text-2xl md:text-4xl text-center md:leading-[3.3rem]'>
				Top-notch designs, <br /> delivered at your doorsteps
			</h1>
			<div className='   grid grid-cols-1  md:grid-cols-3 justify-center items-center mt-9 gap-12'>
				{featuresArray.map((feature, index) => (
					<FeatureCard
						src={feature.src}
						key={index}
						title={feature.title}
						description={feature.description}
					/>
				))}
			</div>
		</section>
	);
};

export default Feature;
