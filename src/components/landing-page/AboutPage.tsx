import SectionTitle from "@/lib/section-title";

export default function AboutPage() {
	return (
		<div className=' relative text-center justify-center items-center flex flex-col w-1/2 mx-auto my-14'>
			<SectionTitle title='About us' />
			<div className=' text-center w-full  mx-auto'>
				<p className=' text-4xl font-manrope text-neutral-400 leading-[3.2rem]'>
					Coinswag is a web3 merchandise store that allows users to create
					templates We believe in the power of decentralized commerce and
					community-driven creativity users can pay for products using
					various cryptocurrencies.
				</p>
			</div>
		</div>
	);
}
