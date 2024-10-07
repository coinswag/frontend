import SectionTitle from "@/lib/section-title";
import TopStoreCard from "./TopStoreCard";

const TopStories = () => {
	const userStores = [
		{
			src: "/Icons/brand-1.svg",
			title: "Acme Inc.",
			description:
				"Official Nike merchandise, including shoes, apparel, and accessories for all athletes.",
			creator: "Nike",
			rating: 5,
		},
		{
			src: "/Icons/brand-2.svg",
			title: "Monsters",
			description:
				"Latest Apple products, including iPhones, MacBooks, and innovative accessories for tech enthusiasts.",
			creator: "Apple Inc.",
			rating: 4,
		},
		{
			src: "/Icons/brand-3.svg",
			title: "Roban",
			description:
				"Wide selection of Amazon products, offering convenience and fast shipping options.",
			creator: "Amazon",
			rating: 5,
		},
	];
	return (
		<section className=' bg-center mx-auto flex flex-col items-center justify-center w-[80%] my-[8rem]'>
			<SectionTitle title='Top Stories' />
			<h1 className='font-manrope text-2xl md:text-4xl text-center md:leading-[3.3rem]'>
				Here are our top-rated stores
			</h1>

			<div className='flex flex-col md:flex-row  justify-center items-center mt-9 gap-12'>
				{userStores.map((store, index) => (
					<TopStoreCard
						key={index}
						title={store.title}
						description={store.description}
						src={store.src}
						rating={store.rating}
						creator={store.creator}
					/>
				))}
			</div>
		</section>
	);
};

export default TopStories;
