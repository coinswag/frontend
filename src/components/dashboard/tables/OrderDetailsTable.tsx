import {
	Table,
	TableBody,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
	TableCell,
} from "@/components/ui/table";
const items = [
	{
		type: "Laptop",
		quantity: 2,
		unitPrice: 999.99,
		amount: 1999.98, // 2 * 999.99
	},
	{
		type: "Headphones",
		quantity: 5,
		unitPrice: 49.99,
		amount: 249.95, // 5 * 49.99
	},
	{
		type: "Mouse",
		quantity: 3,
		unitPrice: 29.99,
		amount: 89.97, // 3 * 29.99
	},
	{
		type: "Keyboard",
		quantity: 4,
		unitPrice: 79.99,
		amount: 319.96, // 4 * 79.99
	},
	{
		type: "Monitor",
		quantity: 1,
		unitPrice: 199.99,
		amount: 199.99, // 1 * 199.99
	},
	{
		type: "USB-C Cable",
		quantity: 10,
		unitPrice: 14.99,
		amount: 149.9, // 10 * 14.99
	},
	{
		type: "Webcam",
		quantity: 2,
		unitPrice: 89.99,
		amount: 179.98, // 2 * 89.99
	},
	{
		type: "External Hard Drive",
		quantity: 1,
		unitPrice: 129.99,
		amount: 129.99, // 1 * 129.99
	},
];
function OrderDetailsTable() {
	return (
		<Table className=' mt-14 [&_tr]:border-b-[#272727] border-2 border-[#272727] rounded-xl '>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow className='grid grid-cols-4 items-center p-0 [&>th]:flex [&>th]:items-center py-2 '>
					<TableHead>Product</TableHead>
					<TableHead>Quantity</TableHead>
					<TableHead>Unit Price</TableHead>
					<TableHead className='text-right'>Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{items.map((product) => (
					<TableRow className='grid grid-cols-4 items-center'>
						<TableCell>{product.type}</TableCell>
						<TableCell>{product.quantity}</TableCell>
						<TableCell>{product.unitPrice}</TableCell>
						<TableCell>{product.amount}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
export default OrderDetailsTable;
