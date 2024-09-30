import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;
	return (
		<nav className='flex justify-between items-center h-[10vh] fixed w-full top-0 left-0 px-8 z-20'>
			<NavLink
				className=''
				to='/'>
				<img
					src='/Images/logo.svg'
					alt='Logo'
					className=''
				/>
			</NavLink>
			<div className=' flex items-center justify-center gap-5 '>
				<NavLink
					to='/'
					className={`${
						isActive("/")
							? "bg-[#1E1E1E] py-1 px-4 rounded-2xl align-middle"
							: ""
					}`}>
					Home
				</NavLink>

				<NavLink
					to='/merchandise'
					className={`${
						isActive("/merchandise")
							? "bg-[#1E1E1E] py-1 px-4 rounded-2xl align-middle"
							: ""
					}`}>
					Merchandise
				</NavLink>

				<NavLink
					to='/about'
					className={`${
						isActive("/about") ? "bg-[#1E1E1E] py-1 px-4 rounded-2xl" : ""
					}`}>
					About
				</NavLink>
			</div>
			<button className=' text-center bg-[#4F46E5] text-white px-6 rounded-2xl flex justify-center  align-middle items-center gap-1 text-sm py-2'>
				<p className='text-sm'>Get started</p>
				<img
					src='/Icons/arrow.svg'
					alt='arrow '
				/>
			</button>
		</nav>
	);
}
