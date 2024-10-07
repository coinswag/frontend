import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import RecentOrderRow from "../rows/RecentOrdersRow";

function RecentOrders() {
	return (
		<Table className=' mt-14 [&_tr]:border-b-[#272727] border-2 border-[#272727] rounded-xl '>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader className=' md:block'>
				<TableRow className='grid grid-cols-3 md:grid-cols-7 items-center p-0 [&>th]:flex [&>th]:items-center py-2 '>
					<TableCell className='text-gray-400 '>Customer</TableCell>
					<TableCell className='text-gray-400 hidden '>Email</TableCell>
					<TableCell className='text-gray-400 hidden md:block'>
						Status
					</TableCell>
					<TableCell className='text-gray-400 hidden md:block'>
						Payment Method
					</TableCell>
					<TableCell className='text-gray-400 hidden md:block'>
						Time
					</TableCell>
					<TableCell className='text-gray-400 hidden md:block'>
						Item No.
					</TableCell>
					<TableCell className='text-gray-400 text-center'>
						Amount
					</TableCell>
				</TableRow>
			</TableHeader>
			<TableBody>
				<RecentOrderRow walletAddress='0x123...4567' />
				<RecentOrderRow />
				<RecentOrderRow walletAddress='0x123...4567' />
				<RecentOrderRow />
				<RecentOrderRow />
			</TableBody>
		</Table>
	);
}
export default RecentOrders;
