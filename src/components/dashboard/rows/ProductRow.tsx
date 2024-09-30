import { TableCell, TableRow } from "@/components/ui/table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

type ProductRowProps = {
	src: string;
	name: string;
	sizes: string;
	price: number;
	availableItem: number;
	dateCreated: string;
};

function ProductRow(props: ProductRowProps) {
	return (
		<TableRow className='grid grid-cols-7 items-center'>
			<TableCell className='flex gap-3 items-center col-span-2'>
				<img
					src={props.src}
					alt={props.name}
					className='w-[7rem]'
				/>
				<p>{props.name}</p>
			</TableCell>
			<TableCell className=' flex gap-3 items-center'>
				{props.sizes}
			</TableCell>
			<TableCell className=' flex items-center gap-2 '>
				<img
					src='/Icons/solana.svg'
					alt=''
					className='w-10'
				/>
				{props.price}
			</TableCell>

			<TableCell className='  flex  items-center gap-2'>
				Apr 12, 6:09AM
			</TableCell>
			<TableCell className='  flex  items-center gap-2'>
				{props.availableItem}
			</TableCell>

			<TableCell>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button aria-haspopup='true'>
							<MoreHorizontal className='h-4 w-4' />
							<span className='sr-only'>Toggle menu</span>
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align='end'
						className='bg-secondary border border-borderColor rounded-xl'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>Edit</DropdownMenuItem>
						<DropdownMenuItem>Delete</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	);
}
export default ProductRow;
