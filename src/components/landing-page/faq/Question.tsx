import { CircleHelp, Plus, Minus } from "lucide-react";
import { useState } from "react";

type QuestionProps = {
	question: string;
	answer: string;
};

function Question(props: QuestionProps) {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<article className='p-4 rounded-3xl bg-[#a5a5a53f] space-y-2'>
			<div className='flex justify-between items-center gap-2'>
				<CircleHelp
					fill='#fff'
					stroke='#000000'
				/>
				<p className='text-gray-200 mr-auto .font-manrope text-left  font-semibold text-sm md:text-lg'>
					{props.question}
				</p>

				<button onClick={handleClick}>{open ? <Minus /> : <Plus />}</button>
			</div>
			{open && (
				<div className='text-left pl-8 text-gray-300 text-sm'>
					{props.answer}
				</div>
			)}
		</article>
	);
}
export default Question;
