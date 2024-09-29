interface SectionTitle {
	title: string;
}

const SectionTitle = ({ title }: SectionTitle) => {
	return (
		<div className=' flex flex-row gap-3 mb-3'>
			<img
				src='/Images/sparkle.svg'
				alt='sparkle'
				className='brightness-200 w-6'
			/>
			<h1 className=' text-[20px]  text-[#4f46e5] brightness-200'>
				{title}
			</h1>
			<img
				src='/Images/sparkle.svg'
				alt='sparkle'
				className='brightness-200 w-6'
			/>
		</div>
	);
};

export default SectionTitle;
