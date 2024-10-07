import { Link, NavLink } from "react-router-dom";
import {
	LayoutDashboard,
	Shirt,
	Package2,
	Contact,
	LogOut,
	Settings,
} from "lucide-react";

function NavBar() {
	const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
		return `w-full flex justify-center items-center h-[3.5rem]  ${
			isActive ? "active" : ""
		}`;
	};

	return (
		<aside className=' flex flex-col items-center gap-[1rem] border-r border-r-[#272727]'>
			<Link
				to='/'
				className=' flex justify-center items-center mb-[3rem] h-[10vh]'>
				<img
					src='/Images/logo.svg'
					alt='coinswag logo'
					className='w-8 brightness-200'
				/>
			</Link>
			<NavLink
				to='/dashboard'
				className={getNavLinkClass}
				end>
				{({ isActive }) => (
					<LayoutDashboard color={isActive ? "#fff" : "#7e7e7e"} />
				)}
			</NavLink>

			<NavLink
				to='/dashboard/products'
				className={getNavLinkClass}>
				{({ isActive }) => <Shirt color={isActive ? "#fff" : "#7e7e7e"} />}
			</NavLink>
			<NavLink
				to='/dashboard/orders'
				className={getNavLinkClass}>
				{({ isActive }) => (
					<Package2 color={isActive ? "#fff" : "#7e7e7e"} />
				)}
			</NavLink>
			<NavLink
				to='/dashboard/customers'
				className={getNavLinkClass}>
				{({ isActive }) => (
					<Contact color={isActive ? "#fff" : "#7e7e7e"} />
				)}
			</NavLink>
			<div className='mt-auto w-full flex flex-col gap-4'>
				<NavLink
					to='/dashboard/settings'
					className={getNavLinkClass}>
					{({ isActive }) => (
						<Settings color={isActive ? "#fff" : "#7e7e7e"} />
					)}
				</NavLink>
				<NavLink
					to='/'
					className={getNavLinkClass}>
					{({ isActive }) => (
						<LogOut color={isActive ? "#fff" : "#7e7e7e"} />
					)}
				</NavLink>
			</div>
		</aside>
	);
}
export default NavBar;
