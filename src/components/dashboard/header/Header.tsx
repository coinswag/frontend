import { Bell } from "lucide-react";
import StoreDropDownMenu from "./StoreDropDownMenu";
import UserProfileDropDownMenu from "./UserProfileDropDownMenu";

function Header() {
	return (
		<header className='flex justify-between items-center px-8 bg-[#111111] border-b border-b-[#272727]'>
			<StoreDropDownMenu />

			<div className='flex justify-center gap-4 items-center '>
				<div className='relative'>
					<Bell />
					<span className='absolute bg-red-500 h-2 w-2 rounded-full -top-1 right-0' />
				</div>
				<UserProfileDropDownMenu />
			</div>
		</header>
	);
}
export default Header;
