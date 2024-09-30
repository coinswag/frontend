import SectionTitle from "@/lib/section-title";

function Review() {
	return (
		<section className='flex justify-center items-center gap-12 my-[8rem] h-[28rem]'>
			<div className='w-[40%]'>
				<SectionTitle title='Product Review' />
				<h1 className='font-manrope text-4xl text-gray-400 leading-[3.2rem] mt-10'>
					"Coinswag is a solid choice for anyone looking to show off their
					crypto passion or searching for gifts for blockchain-minded
					friends. "
				</h1>
			</div>
			<div className='h-full relative'>
				<div className='absolute bg-gradient-to-b from-transparent from-60% via-black/10 to-black h-full w-full' />
				<div className='absolute bottom-4 left-4'>
					<h2 className=' text-lg text-gray-400'>Anioke Sebastian</h2>
					<p className='text-sm text-gray-600'>CEO, Coinswag</p>
				</div>
				<img
					src='https://i.pinimg.com/564x/50/e7/ef/50e7ef4c7462eb14212b41e841b272fe.jpg'
					alt=''
					className='w-[32rem] h-full  object-cover rounded-[1.5rem] object-top'
					style={{ objectPosition: "center 10%" }}
				/>
			</div>
		</section>
	);
}
export default Review;
