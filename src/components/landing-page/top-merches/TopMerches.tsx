import SectionTitle from "@/lib/section-title";
import TopMerchCard from "./TopMerchCard";

function TopMerches() {
	const favourtiteMerches = [
		{
			src: "/Images/green-merch.png",
			creator: {
				name: "Nike",
				image: "/Icons/brand-1.svg",
			},
			bgGradient:
				"bg-[linear-gradient(137.5deg,_#9747FF_-0.65%,_#20004A_102.78%)]",
			isFavourite: true,
			name: "Superteam Shirt",
			price: 23.0,
		},
		{
			src: "/Images/cap.png",
			creator: {
				name: "Dobbin",
				image: "/Icons/brand-2.svg",
			},
			bgGradient:
				"bg-[linear-gradient(137.5deg,_#FFB6C1_-0.65%,_#8B008B_102.78%)]",
			isFavourite: true,
			price: 23.0,
			name: "Superteam Cap",
		},
		{
			src: "/Images/cup.png",
			creator: {
				name: "Monster",
				image: "/Icons/brand-3.svg",
			},
			bgGradient:
				"bg-[linear-gradient(137.5deg,_#FF7F50_-0.65%,_#800000_102.78%)]",
			isFavourite: true,
			name: "Superteam Cup",
			price: 23.0,
		},
	];
	return (
		<section className='bg-center mx-auto flex flex-col items-center justify-center w-[80%]'>
			<SectionTitle title='Top Merches' />
			<h1 className='font-manrope text-4xl text-center leading-[3.3rem]'>
				We sell quality merches for your needs
			</h1>
			<div className='flex justify-center gap-14 items-center mt-10'>
				{favourtiteMerches.map((merch, index) => (
					<TopMerchCard
						{...merch}
						key={index}
					/>
				))}
			</div>
		</section>
	);
}
export default TopMerches;
