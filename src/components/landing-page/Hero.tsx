import { useEffect, useState } from "react";

const Hero = () => {
	const [currentMerch, setCurrentMerch] = useState("black");

	const [merchSearch, setMerchSearch] = useState("dofosdjfopsjd");

	const handleMerchSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMerchSearch(e.target.value);
	};

	useEffect(() => {
		const merch = ["black", "green", "purple"];
		const interval = setInterval(() => {
			setCurrentMerch((prevMerch) => {
				const currentIndex = merch.indexOf(prevMerch);
				const nextIndex = (currentIndex + 1) % merch.length;
				return merch[nextIndex];
			});
		}, 2000);

		return () => clearInterval(interval);
	}, []);
	return (
		<section className='bg-[url("/Images/lines.svg")] bg-cover bg-center text-center  items-center justify-center relative ellow-400  mx-auto w-full h-screen flex overflow-hidden'>
			<div className=' relative bottom-[20%] flex flex-col items-center'>
				<h1 className='leading-[1.2] font-quicksand text-5xl font-bold'>
					The Web3 Platform For <br /> Community-driven Merchandise
				</h1>

				<p className=' text-center text-[#FFFFFFB2] text-md mt-6 w'>
					Coinswag is a platform that enables creators and communities to
					effortlessly create storefronts and sell merch and <br /> branded
					items, powered by blockchain technology and crypto payments.
				</p>

				<div className=' pr-1 flex border border-[#474747] rounded-3xl overflow-hidden items-center justify-between mt-6 w-[80%] h-12 backdrop-blur-lg bg-[#222222] shadow-custom-dark'>
					<input
						type='text'
						value={merchSearch}
						placeholder='Enter name of store'
						onChange={handleMerchSearch}
						className='sm:px-4 px-3 py-2  outline-none  flex-1'
					/>
					<button className=' text-center bg-[#4F46E5] text-[#FFFFFFB2] py-1 sm:px-6 px-2  rounded-3xl flex justify-center items-center gap-1 h-[78%] text-sm'>
						<img
							src='/Icons/search.svg'
							alt='search icon '
							className='w-4 brightness-100 invert'
						/>
						Search
					</button>
				</div>
			</div>
			<div className='absolute h-full w-full -z-30'>
				<img
					src='/Images/cap.svg'
					alt='Cap merch'
					className='absolute top-[153px] md:top-[90px] left-0 object-cover sm:block hidden animate-up-down'
				/>

				<img
					src='/Images/mug.svg'
					alt='mug mercch'
					className='  absolute md:top-[90px] top-[186px] bottom-10 right-0 object-cover w-[185px] sm:block hidden animate-up-down delay-500'
				/>

				<img
					src='/Images/left-merch.svg'
					alt='left-merch'
					className='absolute hidden lg:block bottom-0 .top-[263px] left-0 .w-[240px] object-cover '
				/>

				<img
					src={`/Images/${currentMerch}-merch.png`}
					alt='Cloth merch'
					className=' absolute -bottom-[10%] left-1/2 -translate-x-1/2 h-[57%]'
				/>

				<img
					src='/Images/right-merch.svg'
					alt='right-merch'
					className='absolute hidden lg:block  bottom-0 right-0 .top-[263px] .w-[240px]  '
				/>
			</div>
		</section>
	);
};

export default Hero;
