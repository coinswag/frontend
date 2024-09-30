type FeatureCardProps = {
	src: string;
	title: string;
	description: string;
};

function FeatureCard(props: FeatureCardProps) {
	return (
		<article className='border border-borderColor p-10 rounded-[1.2rem] bg-secondary'>
			<img
				src={props.src}
				alt=''
				className='w-24 h-24 border-l border-t border-t-gray-700 border-l-gray-700 rounded-full p-4 mb-12'
			/>
			<h2 className='font-manrope mb-4 text-2xl  text-neutral-300'>
				{props.title}
			</h2>
			<p className='text-neutral-400'>{props.description}</p>
		</article>
	);
}
export default FeatureCard;
