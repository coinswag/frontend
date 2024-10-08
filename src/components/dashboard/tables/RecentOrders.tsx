import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import RecentOrderRow, { RecentOrder } from "../rows/RecentOrdersRow";

const recentOrdersData: RecentOrder[] = [
	{
		name: "Anioke Sebastian",
		email: "aniokechukwdi7@gmail.com",
		status: "pending",
		paymentMethod: { type: "wallet", details: "0x1234...5678" },
		date: "Apr 12, 6:09AM",
		quantity: 7,
		amount: 250.0,
	},
	{
		name: "John Doe",
		email: "johndoe@example.com",
		status: "delivered",
		paymentMethod: { type: "card", details: "6345" },
		date: "Apr 13, 2:30PM",
		quantity: 3,
		amount: 150.5,
	},
	{
		name: "Emma Watson",
		email: "emma.watson@gmail.com",
		status: "pending",
		paymentMethod: { type: "wallet", details: "0x5678...9012" },
		date: "Apr 14, 9:45AM",
		quantity: 5,
		amount: 320.75,
	},
	{
		name: "Michael Johnson",
		email: "michael.j@yahoo.com",
		status: "failed",
		paymentMethod: { type: "card", details: "7890" },
		date: "Apr 15, 3:20PM",
		quantity: 2,
		amount: 89.99,
	},
	{
		name: "Sarah Lee",
		email: "sarahlee123@hotmail.com",
		status: "delivered",
		paymentMethod: { type: "wallet", details: "0x9012...3456" },
		date: "Apr 16, 11:05AM",
		quantity: 8,
		amount: 450.25,
	},
	{
		name: "David Brown",
		email: "davidb@outlook.com",
		status: "pending",
		paymentMethod: { type: "card", details: "2345" },
		date: "Apr 17, 7:55PM",
		quantity: 1,
		amount: 75.0,
	},
	{
		name: "Lisa Chen",
		email: "lisa.chen@gmail.com",
		status: "pending",
		paymentMethod: { type: "wallet", details: "0x3456...7890" },
		date: "Apr 18, 10:30AM",
		quantity: 4,
		amount: 199.99,
	},
	{
		name: "Robert Taylor",
		email: "rob.taylor@yahoo.com",
		status: "delivered",
		paymentMethod: { type: "card", details: "9012" },
		date: "Apr 19, 1:15PM",
		quantity: 6,
		amount: 275.5,
	},
	{
		name: "Emily Davis",
		email: "emilyd@hotmail.com",
		status: "failed",
		paymentMethod: { type: "wallet", details: "0x7890...1234" },
		date: "Apr 20, 4:40PM",
		quantity: 3,
		amount: 129.75,
	},
	{
		name: "Daniel Wilson",
		email: "dan.wilson@gmail.com",
		status: "pending",
		paymentMethod: { type: "card", details: "5678" },
		date: "Apr 21, 8:20AM",
		quantity: 9,
		amount: 499.99,
	},
];

function RecentOrders() {
	return (
		<Table className=' mt-14 [&_tr]:border-b-[#272727] border-2 border-[#272727] rounded-xl '>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader className=' md:block'>
				<TableRow className='grid grid-cols-3 md:grid-cols-7 items-center p-0 [&>th]:flex [&>th]:items-center py-2 '>
					<TableCell className='text-gray-400 '>Customer</TableCell>
					<TableCell className='text-gray-400 hidden md:block '>
						Email
					</TableCell>
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
				{recentOrdersData.slice(-4).map((order, index) => (
					<RecentOrderRow
						key={index}
						{...order}
					/>
				))}
			</TableBody>
		</Table>
	);
}
export default RecentOrders;
