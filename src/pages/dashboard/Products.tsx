import { Command, CommandInput } from "@/components/ui/command";
import { CalendarDateRangePicker } from "@/lib/CalendarDateRangePicker";
import SelectOptions from "@/lib/SelectOptions";

import ProductTable from "@/components/dashboard/tables/ProductsTable";
import CreateProductDialog from "@/components/dashboard/cards/CreateProductDialog";

function Products() {
	return (
		<div>
			<div className='flex justify-between items-center my-8'>
				<h1>Products</h1>
				<CreateProductDialog />
			</div>
			<div className='mt-8'>
				<Command className='bg-primary border-none'>
					<div className='flex justify-between items-center gap-6 h-[2.8rem]'>
						<CommandInput
							className='border border-borderColor w-full'
							placeholder='Search shop...'
						/>
						<div className='flex justify-center items-center gap-2 h-full'>
							<CalendarDateRangePicker />
							<SelectOptions />
						</div>
					</div>
					<ProductTable />
				</Command>
			</div>
		</div>
	);
}
export default Products;
