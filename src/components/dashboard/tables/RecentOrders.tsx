import {
	Table,
	TableBody,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import RecentOrderRow from "../rows/RecentOrdersRow";

function RecentOrders() {
	return (
		<Table className=' mt-14 [&_tr]:border-b-[#272727] border-2 border-[#272727] rounded-xl '>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow className='grid grid-cols-7 items-center p-0 [&>th]:flex [&>th]:items-center py-2 '>
					<TableHead>Customer</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Payment Method</TableHead>
					<TableHead>Time</TableHead>
					<TableHead>Item No.</TableHead>
					<TableHead className='text-right'>Amount</TableHead>
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
