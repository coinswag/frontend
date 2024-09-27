import CustomersTable from "@/components/dashboard/tables/CustomersTable";
import { Command, CommandInput } from "@/components/ui/command";

function Customers() {
	return (
		<div className=''>
			<p className='my-8'>Customers</p>
			<Command className='bg-primary border-none'>
				<div className='flex justify-between items-center gap-6 h-[2.8rem]'>
					<CommandInput
						className='border border-borderColor w-[70%] rounded-[.5rem] flex-1'
						placeholder='Search shop...'
					/>
					<button className='bg-slate-50 text-gray-700 text-sm h-full px-8 rounded-[.5rem]'>
						Add Customer
					</button>
				</div>

				<CustomersTable />
			</Command>
		</div>
	);
}
export default Customers;
