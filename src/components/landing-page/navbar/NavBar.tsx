import { NavLink } from "react-router-dom";
import { CircleArrowRight } from "lucide-react";

export default function NavBar() {
	return (
		<nav className='flex justify-between items-center h-[10vh] fixed w-full top-0 left-0 md:px-8 px-4 z-20 backdrop-blur-lg border-b border-b-gray-800'>
			<NavLink
				className='sm:w-8 w-6'
				to='/'>
				<img
					src='/Images/logo.svg'
					alt='Logo'
					className=''
				/>
			</NavLink>
			<div className=' items-center justify-center gap-12  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:flex hidden'>
				<NavLink
					to='/'
					className='text-sm text-gray-400'>
					Home
				</NavLink>

				<NavLink
					to='/merchandise'
					className='text-sm text-gray-400'>
					Merchandise
				</NavLink>

				<NavLink
					to='/about'
					className='text-sm text-gray-400'>
					About
				</NavLink>
			</div>
			<button className=' text-center bg-[#4F46E5] text-white pl-4  rounded-3xl flex justify-center  align-middle items-center gap-1 text-sm '>
				<p className='text-sm text-gray-300'>Get started</p>
				<CircleArrowRight
					className='h-8 w-8 rounded-full'
					fill='white'
					stroke='gray'
				/>
			</button>
		</nav>
	);
}
