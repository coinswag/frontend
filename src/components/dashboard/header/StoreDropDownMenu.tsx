import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ChevronsUpDown, PlusCircleIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import NewStore from "./NewStore";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { useStore } from "zustand";
import useShop from "@/lib/zustand/useShop";

// const userStores = [
// 	{
// 		label: "Acme Inc.",
// 		value: "acme-inc",
// 		img: "brand-1.svg",
// 	},
// 	{
// 		label: "Monsters",
// 		value: "monsters",
// 		img: "brand-2.svg",
// 	},
// 	{
// 		label: "Roban",
// 		value: "roban",
// 		img: "brand-3.svg",
// 	},
// 	{
// 		label: "Digg",
// 		value: "digg",
// 		img: "brand-4.svg",
// 	},
// ];

// type Store = (typeof userStores)[number];

function StoreDropDownMenu() {
	const [open, setOpen] = useState(false);
	const { allShops } = useShop();
	const [showNewTeamDialog, setShowNewTeamDialog] = useState(false);
	const [selectedTeam, setSelectedTeam] = useState(allShops[0]);
	return (
		<Dialog
			open={showNewTeamDialog}
			onOpenChange={setShowNewTeamDialog}>
			<Popover
				open={open}
				onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<div className='flex justify-center gap-2 items-center cursor-pointer '>
						<img
							src={`${selectedTeam.logo}`}
							alt=''
							className='w-8 mr-1'
						/>
						<div className='bg-neutral-800 flex gap-2 px-3 rounded-xl items-center'>
							<p className='text-sm'>{selectedTeam.displayName}</p>
							<ChevronsUpDown width='1rem' />
						</div>
					</div>
				</PopoverTrigger>
				<PopoverContent className='w-[280px] p-0 relative left-[4rem] border border-[#272727] rounded-xl overflow-hidden shadow-2xl'>
					<Command className='bg-primary border border-borderColor'>
						<CommandInput
							className='border-b border-b-borderColor'
							placeholder='Search shop...'
						/>
						<CommandList>
							<CommandEmpty>No team found.</CommandEmpty>

							{allShops.map((team) => (
								<CommandItem
									key={team._id}
									onSelect={() => {
										setSelectedTeam(team);
										setOpen(false);
									}}
									className="text-sm  data-[selected='true']:bg-[#2e2e2e42] data-[selected='true']:text-white">
									<Avatar className='mr-2  flex justify-center items-center'>
										<AvatarImage
											src={`${team.logo}`}
											alt={team.displayName}
											className='w-8 h-8 object-cover'
										/>
										<AvatarFallback className='uppercase'>
											{team.name.substring(0, 2)}
										</AvatarFallback>
									</Avatar>
									{team.displayName}
									<CheckIcon
										className={cn(
											"ml-auto h-4 w-4",
											selectedTeam.displayName === team.displayName
												? "opacity-100"
												: "opacity-0"
										)}
									/>
								</CommandItem>
							))}
						</CommandList>
						<CommandSeparator className='border-b border-b-borderColor' />
						<CommandList>
							<CommandGroup>
								<DialogTrigger asChild>
									<CommandItem
										onSelect={() => {
											setOpen(false);
											setShowNewTeamDialog(true);
										}}
										className="py-3 pl-4 data-[selected='true']:bg-[#2e2e2e42] data-[selected='true']:text-white">
										<PlusCircleIcon className='mr-3 h-6 w-6' />
										Create Shop
									</CommandItem>
								</DialogTrigger>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			<DialogContent>
				<NewStore />
			</DialogContent>
		</Dialog>
	);
}

export default StoreDropDownMenu;
