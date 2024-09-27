import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuGroup,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuPortal,
	DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

import { Plus, Store, User, Settings, HandCoins } from "lucide-react";

function UserProfileDropDownMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<img
					className='w-8 h-8 rounded-full cursor-pointer border object-fit border-[#272727]'
					src='/Icons/user.svg'
					alt=''
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56 bg-primary border-borderColor'>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator className='bg-borderColor' />
				<DropdownMenuGroup>
					<DropdownMenuItem className='hover:bg-primary'>
						Profile
						<DropdownMenuShortcut>
							<User className='w-4' />
						</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem disabled>
						Billing
						<DropdownMenuShortcut>
							<HandCoins className='w-4' />
						</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Settings
						<DropdownMenuShortcut>
							<Settings className='w-4' />
						</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator className='bg-borderColor' />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Stores{" "}
						<DropdownMenuShortcut>
							{" "}
							<Store className='w-4' />
						</DropdownMenuShortcut>
					</DropdownMenuItem>

					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							Invite users
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>Email</DropdownMenuItem>
								<DropdownMenuItem>Link</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
					<DropdownMenuItem>
						New Store
						<DropdownMenuShortcut>
							<Plus className='w-4' />
						</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator className='bg-borderColor' />
				<DropdownMenuItem>Twitter</DropdownMenuItem>
				<DropdownMenuItem>DSCVR</DropdownMenuItem>
				<DropdownMenuSeparator className='bg-borderColor' />
				<DropdownMenuItem>
					Log out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default UserProfileDropDownMenu;
