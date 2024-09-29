import { Link, NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className=' bg-[#202020]  flex justify-between items-center  p-8 py-'>
			<NavLink to='/'>
				<img
					src='/Images/logo.svg'
					alt='Logo'
					className='hidden sm:block grayscale w-8'
				/>
			</NavLink>

			<p className=' text-[#797979] text-sm'>
				&#169;2024 - All Rights Reserved
			</p>

			<div className=' flex flex-row order-1 sm:order-2 '>
				<Link to={"/#"}>
					<img
						src='/Images/TwitterX.svg'
						alt='Twitter'
					/>
				</Link>
				<Link to={"/#"}>
					<img
						src='/Images/facebook.svg'
						alt=' facebook'
					/>
				</Link>
				<Link to={"/#"}>
					<img
						src='/Images/LinkedIn.svg'
						alt='Linkedln'
					/>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
