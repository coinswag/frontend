import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
type TopMerchCardProps = {
	src: string;
	name: string;
	creator: {
		name: string;
		image: string;
	};
	price: number;
	isFavourite: boolean;
	bgGradient: string;
};
// background: linear-gradient(137.5deg, #9747FF -0.65%, #20004A 102.78%);

function TopMerchCard(props: TopMerchCardProps) {
	return (
		<article className='relative max-w-[21rem] bg-secondary p-4 border border-borderColor rounded-[1rem]'>
			<div
				className={cn(
					" h-[17rem] w-full flex justify-center items-center px-3 relative rounded-tl-[.8rem] rounded-tr-[.8rem]",
					props.bgGradient
				)}>
				<div className='flex justify-end items-center absolute top-0 left-0 w-full px-3 mt-2 '>
					{/* <h2 className='text-[.8rem] text-gray-300 font-bold bg-secondary px-3 py-2 rounded-[.2rem] relative overflow-hidden shadow-custom-dark'>
						<span className='absolute  w-full top-0 left-0 bg-gradient-to-r from-[#9945FF] to-[#14F195] h-[1px]' />
						{props.price} SOL
					</h2> */}

					<span className='bg-[#a9a9a95a] p-1 rounded-full'>
						<Star
							stroke='none'
							fill='#fac55a'
						/>
					</span>
				</div>
				<img
					src={props.src}
					alt=''
				/>
			</div>
			<div className='flex justify-between items-center mt-3 gap-3'>
				<img
					src={props.creator.image}
					alt=''
					className='w-8 h-8 rounded-full '
				/>
				<div className='mr-auto flex-1 overflow-ellipsis'>
					<h3 className='font-bold text-gray-300 '>{props.name}</h3>
					<p className='text-sm text-gray-500'>{props.creator.name}</p>
				</div>
				<button className='bg-white text-black px-6 py-2 rounded-[.5rem] text-sm'>
					Buy
				</button>
			</div>
		</article>
	);
}
export default TopMerchCard;
