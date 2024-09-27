import {
	Table,
	TableBody,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import CustomerRow from "../rows/CustomerRow";

function CustomersTable() {
	return (
		<Table className=' mt-14 [&_tr]:border-b-[#272727] border-2 border-[#272727] rounded-xl '>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow className='grid grid-cols-7 items-center p-0 [&>th]:flex [&>th]:items-center py-2 '>
					<TableHead>Customer</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Telephone</TableHead>
					<TableHead>Time</TableHead>
					<TableHead>Total Purchases</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<CustomerRow />
				<CustomerRow />
				<CustomerRow />
				<CustomerRow />
				<CustomerRow />
			</TableBody>
		</Table>
	);
}
export default CustomersTable;
