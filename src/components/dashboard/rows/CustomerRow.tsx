import { TableCell, TableRow } from "@/components/ui/table";

// type RecentOrdersRowProps = {
// 	walletAddress?: string;
// };

function CustomerRow() {
	return (
		<TableRow className='grid grid-cols-7 items-center'>
			<TableCell className=' flex gap-3 items-center'>
				<img
					src='/Icons/avatar.svg'
					alt=''
					className='w-12'
				/>
				<p>Anioke Sebastain</p>
			</TableCell>
			<TableCell>aniokechukwdi7@gmail.com</TableCell>
			<TableCell>+2349030018605</TableCell>

			<TableCell>Apr 12, 6:09AM</TableCell>
			<TableCell>07</TableCell>
			<TableCell>
				<button className='rounded-[.5rem] hover:bg-secondary border border-borderColor px-6 text-sm py-[.3rem] '>
					Create Invoice
				</button>
			</TableCell>
			<TableCell>
				<button className='hover:bg-secondary border border-borderColor px-6 text-sm py-[.3rem] rounded-[.5rem]'>
					View Details
				</button>
			</TableCell>
		</TableRow>
	);
}
export default CustomerRow;
