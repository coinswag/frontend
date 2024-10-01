import { Plus, Minus } from "lucide-react";
import MerchCard from "@/components/shop/MerchCard";

function ProductDetails() {
	const sizeElementStypes =
		"w-9 h-9 rounded-full border border-borderColor text-gray-500 flex justify-center items-center text-[.8rem]";

	const stars = Array.from({ length: 8 }, (_, index) => (
		<MerchCard
			id={index.toString()}
			src='/Images/black-merch.png'
			creator={{ name: "Monster", image: "/Icons/brand-3.svg" }}
			bgGradient='bg-[linear-gradient(137.5deg,_#9747FF_-0.65%,_#20004A_102.78%)]'
			isFavourite={true}
			name='Superteam Cup'
			price={23.0}
			key={index}
		/>
	));
	return (
		<main>
			<section className='grid grid-cols-2 gap-12 mt-12 px-8'>
				<div className='h-full relative w-[80%] ml-auto'>
					<img
						src='/Images/base-unn-merch-back.png'
						alt=''
						className='h-full object-cover  rounded-xl'
					/>
					<div className='absolute flex items-center gap-5 w-[80%] ml-auto top-[103%] left-0 '>
						<img
							src='/Images/base-unn-merch.jpeg'
							alt=''
							className='w-14 h-12 rounded-xl object-cover border border-gray-400 p-1 '
						/>
						<img
							src='/Images/black-merch.png'
							alt=''
							className='w-14 h-12 rounded-xl object-contain border border-gray-400 p-1 '
						/>
						<img
							src='/Images/base-unn-merch-back.png'
							alt=''
							className='w-14 h-12 rounded-xl object-contain border border-gray-400 p-1 '
						/>
					</div>
				</div>
				<div className='w-[67%] mt-8'>
					<p>In Stock</p>
					<h1 className='font-manrope text-4xl'>Basee UNN Hoodies</h1>
					<h1 className='mt-4'>
						price{" "}
						<span className='text-2xl font-quicksand'>61.00 USDC</span>
					</h1>
					<p className='mt-5 text-sm leading-7'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquam ipsam qui id quibusdam quisquam nemo asperiores optio.
						Dolores aperiam minus doloremque pariatur odio sequi, quisquam
						quae voluptate debitis cupiditate earum quo quia culpa
						quaerat.
					</p>
					<div className='border-t border-t-borderColor mt-8 '>
						<p className='text-gray-500 text-sm my-3'>color</p>
						<div className='flex items-center gap-4'>
							<div className='w-7 h-7 rounded-full bg-blue-300' />
							<div className='w-7 h-7 rounded-full bg-blue-300' />
							<div className='w-7 h-7 rounded-full bg-blue-300' />
							<div className='w-7 h-7 rounded-full bg-blue-300' />
							<div className='w-7 h-7 rounded-full bg-blue-300' />
						</div>
					</div>
					<div className='border-t border-t-borderColor mt-4'>
						<p className='text-gray-500 text-sm my-3'>size</p>
						<div className='flex items-center gap-4'>
							<div className={sizeElementStypes}>S</div>
							<div className={sizeElementStypes}>M</div>
							<div className={sizeElementStypes}>L</div>
							<div className={sizeElementStypes}>XL</div>
						</div>
					</div>
					<h2 className='text-gray-400 my-5'>
						Availability: <span className='font-bold'>10</span> in stock
					</h2>

					<div className='flex gap-12 items-center'>
						<div className='flex items-center border border-borderColor h-12'>
							<button className='w-14 border border-borderColor h-full flex justify-center items-center text-sm '>
								<Plus color='gray' />
							</button>
							<p className='w-14 h-full flex items-center justify-center text-sm text-gray-600'>
								2
							</p>
							<button className='w-14 border border-borderColor h-full flex justify-center items-center text-sm '>
								<Minus color='gray' />
							</button>
						</div>
						<button className='text-sm text-gray-900 bg-white rounded-[.5rem] px-12 h-12'>
							Add to cart
						</button>
					</div>
				</div>
			</section>
			<section className='mt-[10rem] w-[90%] mx-auto'>
				<h1 className='font-manrope text-3xl'>More Products</h1>
				<div className='mt-12 grid grid-cols-auto-fill-minmax gap-12 justify-center'>
					{stars}
				</div>
			</section>
		</main>
	);
}
export default ProductDetails;
