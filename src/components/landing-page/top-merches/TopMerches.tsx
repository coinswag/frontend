import SectionTitle from "@/lib/section-title";
import TopMerchCard from "./TopMerchCard";

// Certainly! I'll generate some variations of the linear gradient using different color combinations. Here are several examples using the same angle (137.5deg) but with different color pairs:

// 1. Sunset Orange to Deep Purple:
// ```html
// <div class="bg-[linear-gradient(137.5deg,_#FF6B6B_-0.65%,_#4A0E4E_102.78%)]">
// ```

// 2. Aqua to Navy:
// ```html
// <div class="bg-[linear-gradient(137.5deg,_#00FFFF_-0.65%,_#000080_102.78%)]">
// ```

// 3. Lime Green to Forest Green:
// ```html
// <div class="bg-[linear-gradient(137.5deg,_#32CD32_-0.65%,_#228B22_102.78%)]">
// ```

// 4. Golden Yellow to Burnt Orange:
// ```html
// <div class="bg-[linear-gradient(137.5deg,_#FFD700_-0.65%,_#CC5500_102.78%)]">
// ```

// 5. Light Pink to Deep Magenta:
// ```html
// <div class="bg-[linear-gradient(137.5deg,_#FFB6C1_-0.65%,_#8B008B_102.78%)]">
// ```

// 6. Sky Blue to Midnight Blue:
// ```html
// <div class="bg-[linear-gradient(137.5deg,_#87CEEB_-0.65%,_#191970_102.78%)]">
// ```

// 7. Coral to Maroon:
// ```html
// <div class="bg-[linear-gradient(137.5deg,_#FF7F50_-0.65%,_#800000_102.78%)]">
// ```

// 8. Mint Green to Emerald:
// ```html
// <div class="bg-[linear-gradient(137.5deg,_#98FF98_-0.65%,_#50C878_102.78%)]">
// ```

// You can use these gradients directly in your HTML or JSX with Tailwind CSS. Remember, you can adjust the color codes to fine-tune the gradients to your liking. Would you like me to explain how to create a custom component or utility class for these gradients?

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
		<section className='bg-center mx-auto flex flex-col items-center justify-center md:w-[80%] w-[90%]'>
			<SectionTitle title='Top Merches' />
			<h1 className='font-manrope text-2xl md:text-4xl text-center md:leading-[3.3rem]'>
				We sell quality merches for your needs
			</h1>
			<div className='flex flex-col md:flex-row justify-center gap-14 items-center mt-10'>
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
