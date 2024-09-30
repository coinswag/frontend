import SectionTitle from "@/lib/section-title";
import FeatureCard from "./FeatureCard";

const Feature = () => {
	return (
		<section className=' bg-center mx-auto flex flex-col items-center justify-center w-[80%] my-[8rem]'>
			<SectionTitle title='Features' />
			<h1 className='font-manrope text-4xl text-center leading-[3.3rem]'>
				Top-notch designs, <br /> delivered at your doorsteps
			</h1>
			<div className='   flex  justify-center items-center mt-9 gap-12'>
				<FeatureCard
					src='/Images/Wallet.svg'
					title='Recieve the magic'
					description='Choose a plan and share your design project details with us we’re here to listen.'
				/>
				<FeatureCard
					src='/Images/Wallet.svg'
					title='Recieve the magic'
					description='Choose a plan and share your design project details with us we’re here to listen.'
				/>
				<FeatureCard
					src='/Images/Wallet.svg'
					title='Recieve the magic'
					description='Choose a plan and share your design project details with us we’re here to listen.'
				/>
			</div>
		</section>
	);
};

export default Feature;
