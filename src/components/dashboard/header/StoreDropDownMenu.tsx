import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ChevronsUpDown, PlusCircleIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
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

{
	/* <div className='bg-neutral-800 flex gap-2 px-3 rounded-xl items-center'>
	<p className='text-sm'>Angelos</p>
	<ChevronsUpDown width='1rem' />
</div>; */
}

const userStores = [
	{
		label: "Acme Inc.",
		value: "acme-inc",
		img: "brand-1.svg",
	},
	{
		label: "Monsters",
		value: "monsters",
		img: "brand-2.svg",
	},
	{
		label: "Roban",
		value: "roban",
		img: "brand-3.svg",
	},
	{
		label: "Digg",
		value: "digg",
		img: "brand-4.svg",
	},
];

type Store = (typeof userStores)[number];

function StoreDropDownMenu() {
	const [open, setOpen] = useState(false);
	const [showNewTeamDialog, setShowNewTeamDialog] = useState(false);
	const [selectedTeam, setSelectedTeam] = useState<Store>(userStores[0]);
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
							src={`/Icons/${selectedTeam.img}`}
							alt=''
							className='w-10 mr-1'
						/>
						<div className='bg-neutral-800 flex gap-2 px-3 rounded-xl items-center'>
							<p className='text-sm'>{selectedTeam.label}</p>
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

							{userStores.map((team) => (
								<CommandItem
									key={team.value}
									onSelect={() => {
										setSelectedTeam(team);
										setOpen(false);
									}}
									className="text-sm  data-[selected='true']:bg-[#2e2e2e42] data-[selected='true']:text-white">
									<Avatar className='mr-2  flex justify-center items-center'>
										<AvatarImage
											src={`/Icons/${team.img}`}
											alt={team.label}
											className='w-8 h-8 object-cover'
										/>
										<AvatarFallback className='uppercase'>
											{team.value.substring(0, 2)}
										</AvatarFallback>
									</Avatar>
									{team.label}
									<CheckIcon
										className={cn(
											"ml-auto h-4 w-4",
											selectedTeam.value === team.value
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
				{/* <DialogHeader>
					<DialogTitle>Create team</DialogTitle>
					<DialogDescription>
						Add a new team to manage products and customers.
					</DialogDescription>
				</DialogHeader>
				<div>
					<div className='space-y-4 py-2 pb-4'>
						<div className='space-y-2'>
							<Label htmlFor='name'>Team name</Label>
							<Input
								id='name'
								placeholder='Acme Inc.'
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='plan'>Subscription plan</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder='Select a plan' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='free'>
										<span className='font-medium'>
											Free
										</span>{" "}
										-{" "}
										<span className='text-muted-foreground'>
											Trial for two weeks
										</span>
									</SelectItem>
									<SelectItem value='pro'>
										<span className='font-medium'>Pro</span>{" "}
										-{" "}
										<span className='text-muted-foreground'>
											$9/month per user
										</span>
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
				<DialogFooter>
					<Button
						variant='outline'
						onClick={() => setShowNewTeamDialog(false)}>
						Cancel
					</Button>
					<Button type='submit'>Continue</Button>
				</DialogFooter> */}
			</DialogContent>
		</Dialog>
	);
}

// export function CommandDemo() {
//   return (
//     <Command className="rounded-lg border shadow-md md:min-w-[450px]">
//       <CommandInput placeholder="Type a command or search..." />
//       <CommandList>
//         <CommandEmpty>No results found.</CommandEmpty>
//         <CommandGroup heading="Suggestions">
//           <CommandItem>
//             <CalendarIcon className="mr-2 h-4 w-4" />
//             <span>Calendar</span>
//           </CommandItem>
//           <CommandItem>
//             <FaceIcon className="mr-2 h-4 w-4" />
//             <span>Search Emoji</span>
//           </CommandItem>
//           <CommandItem disabled>
//             <RocketIcon className="mr-2 h-4 w-4" />
//             <span>Launch</span>
//           </CommandItem>
//         </CommandGroup>
//         <CommandSeparator />
//         <CommandGroup heading="Settings">
//           <CommandItem>
//             <PersonIcon className="mr-2 h-4 w-4" />
//             <span>Profile</span>
//             <CommandShortcut>⌘P</CommandShortcut>
//           </CommandItem>
//           <CommandItem>
//             <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
//             <span>Mail</span>
//             <CommandShortcut>⌘B</CommandShortcut>
//           </CommandItem>
//           <CommandItem>
//             <GearIcon className="mr-2 h-4 w-4" />
//             <span>Settings</span>
//             <CommandShortcut>⌘S</CommandShortcut>
//           </CommandItem>
//         </CommandGroup>
//       </CommandList>
//     </Command>

export default StoreDropDownMenu;
