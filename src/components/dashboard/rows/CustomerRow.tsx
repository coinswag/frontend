import { TableCell, TableRow } from "@/components/ui/table";

// type RecentOrdersRowProps = {
// 	walletAddress?: string;
// };
type CustomerRowProps = {
	name: string;
	email: string;
	phone: string;
	dateJoined: string;
	ordersCount: number;
	avatarUrl: string;
};

function CustomerRow(props: CustomerRowProps) {
	return (
		<TableRow className='grid grid-cols-7 items-center'>
			<TableCell className='flex gap-3 items-center'>
				<img
					src={props.avatarUrl}
					alt=''
					className='w-12'
				/>
				<p>{props.name}</p>
			</TableCell>
			<TableCell>{props.email}</TableCell>
			<TableCell>{props.phone}</TableCell>
			<TableCell>{props.dateJoined}</TableCell>
			<TableCell>{props.ordersCount}</TableCell>
			<TableCell>
				<button className='rounded-[.5rem] hover:bg-secondary border border-borderColor px-6 text-sm py-[.3rem]'>
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
