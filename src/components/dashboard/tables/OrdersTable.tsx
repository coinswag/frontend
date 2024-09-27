import {
	Table,
	TableBody,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import OrderRow from "../rows/OrderRow";

function OrdersTable() {
	return (
		<Table className=' mt-14 [&_tr]:border-b-[#272727] border-2 border-[#272727] rounded-xl '>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow className='grid grid-cols-8 items-center p-0 [&>th]:flex [&>th]:items-center py-2 '>
					<TableHead>Order No</TableHead>
					<TableHead>Customer</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Payment Method</TableHead>
					<TableHead>Date Created</TableHead>
					<TableHead>Item No.</TableHead>
					<TableHead className='text-right'>Amount</TableHead>
					<TableHead />
				</TableRow>
			</TableHeader>
			<TableBody>
				<OrderRow
					walletAddress='0x123...4567'
					status='pending'
				/>
				<OrderRow status='delivered' />
				<OrderRow
					walletAddress='0x123...4567'
					status='failed'
				/>
				<OrderRow status='delivered' />
				<OrderRow status='delivered' />
			</TableBody>
		</Table>
	);
}
export default OrdersTable;
