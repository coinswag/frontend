import { TableCell, TableRow } from "@/components/ui/table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

type Variant = {
	size: string;
	quantity: number;
	_id: string;
};

type ProductRowProps = {
	_id: string;
	name: string;
	description: string;
	price: number;
	images: string[];
	colors: string[];
	merchandiseType: string;
	variants: Variant[];
};

function ProductRow(props: ProductRowProps) {
	const totalQuantity = props.variants.reduce(
		(sum, variant) => sum + variant.quantity,
		0
	);
	const sizes = props.variants.map((variant) => variant.size).join(", ");

	return (
		<TableRow className='grid grid-cols-7 items-center'>
			<TableCell className='flex gap-3 items-center col-span-2'>
				<img
					src={props.images[0]}
					alt={props.name}
					className='w-[4rem]'
				/>
				<p>{props.name}</p>
			</TableCell>
			<TableCell className='flex gap-3 items-center'>{sizes}</TableCell>
			<TableCell className='flex items-center gap-2'>
				<img
					src='/Icons/solana.svg'
					alt=''
					className='w-10'
				/>
				{props.price}
			</TableCell>
			<TableCell className='flex items-center gap-2'>
				{/* Note: The date is not provided in the new object structure */}
				N/A
			</TableCell>
			<TableCell className='flex items-center gap-2'>
				{totalQuantity}
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
