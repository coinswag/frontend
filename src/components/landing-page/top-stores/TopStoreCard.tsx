import { Star } from "lucide-react";

type TopStoreCardProps = {
	src: string;
	title: string;
	description: string;
	creator: string;
	rating: number;
};

const TopStoreCard = (props: TopStoreCardProps) => {
	const stars = Array.from({ length: 5 }, (_, index) => (
		<Star
			key={index}
			stroke={index < props.rating ? "none" : "gray"}
			fill={index < props.rating ? "#fac55a" : "none"}
		/>
	));

	return (
		<article className='text-center'>
			<div className='flex items-center justify-center gap-2'>
				<img
					src={props.src}
					alt=''
					className='w-11'
				/>
				<h2 className='text-gray-300 font-bold text-2xl font-manrope'>
					{props.title}
				</h2>
			</div>

			<p className='text-xl  my-6 text-gray-500 '>{`"${props.description}"`}</p>
			<div className='flex justify-center items-center '>{stars}</div>
			<p className='text-sm text-gray-500'>{props.creator}</p>
		</article>
	);
};

export default TopStoreCard;
