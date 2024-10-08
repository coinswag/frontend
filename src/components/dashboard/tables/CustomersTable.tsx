import {
	Table,
	TableBody,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import CustomerRow from "../rows/CustomerRow";

const customersData = [
	{
		name: "Anioke Sebastian",
		email: "aniokechukwdi7@gmail.com",
		phone: "+2349030018605",
		dateJoined: "Apr 12, 6:09AM",
		ordersCount: 7,
		avatarUrl: "/Icons/avatar.svg",
	},
	{
		name: "Emma Johnson",
		email: "emma.johnson@example.com",
		phone: "+1234567890",
		dateJoined: "May 15, 2:30PM",
		ordersCount: 3,
		avatarUrl: "/Icons/avatar.svg",
	},
	{
		name: "Liu Wei",
		email: "liu.wei@example.com",
		phone: "+8612345678901",
		dateJoined: "Jun 20, 9:45AM",
		ordersCount: 12,
		avatarUrl: "/Icons/avatar.svg",
	},
	{
		name: "Maria Garcia",
		email: "maria.garcia@example.com",
		phone: "+34612345678",
		dateJoined: "Jul 5, 11:20AM",
		ordersCount: 5,
		avatarUrl: "/Icons/avatar.svg",
	},
	{
		name: "John Smith",
		email: "john.smith@example.com",
		phone: "+447123456789",
		dateJoined: "Aug 18, 3:55PM",
		ordersCount: 9,
		avatarUrl: "/Icons/avatar.svg",
	},
	{
		name: "Aisha Patel",
		email: "aisha.patel@example.com",
		phone: "+919876543210",
		dateJoined: "Sep 2, 8:15AM",
		ordersCount: 2,
		avatarUrl: "/Icons/avatar.svg",
	},
	{
		name: "Carlos Mendoza",
		email: "carlos.mendoza@example.com",
		phone: "+525512345678",
		dateJoined: "Oct 10, 1:40PM",
		ordersCount: 6,
		avatarUrl: "/Icons/avatar.svg",
	},
	{
		name: "Sophie Dubois",
		email: "sophie.dubois@example.com",
		phone: "+33123456789",
		dateJoined: "Nov 22, 5:05PM",
		ordersCount: 4,
		avatarUrl: "/Icons/avatar.svg",
	},
	{
		name: "Hiroshi Tanaka",
		email: "hiroshi.tanaka@example.com",
		phone: "+81345678901",
		dateJoined: "Dec 7, 10:30AM",
		ordersCount: 8,
		avatarUrl: "/Icons/avatar.svg",
	},
	{
		name: "Olga Petrova",
		email: "olga.petrova@example.com",
		phone: "+79123456789",
		dateJoined: "Jan 14, 4:20PM",
		ordersCount: 1,
		avatarUrl: "/Icons/avatar.svg",
	},
];

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
				{customersData.map((customer, index) => (
					<CustomerRow
						key={index}
						{...customer}
					/>
				))}
			</TableBody>
		</Table>
	);
}
export default CustomersTable;
