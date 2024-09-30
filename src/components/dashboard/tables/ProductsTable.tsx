import {
	Table,
	TableBody,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import ProductRow from "../rows/ProductRow";

function ProductTable() {
	return (
		<Table className=' mt-14 [&_tr]:border-b-[#272727] border-2 border-[#272727] rounded-xl '>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow className='grid grid-cols-7 items-center p-0 [&>th]:flex [&>th]:items-center py-2 '>
					<TableHead>Product</TableHead>
					<TableHead />
					<TableHead>Size</TableHead>
					<TableHead>Unit Price</TableHead>
					<TableHead>Date Created</TableHead>
					<TableHead>Available Item</TableHead>
					<TableHead className='text-right'></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<ProductRow
					src='/Images/green-merch.png'
					name='Basic Green Merch'
					sizes='S, M, L, XL'
					price={250.0}
					availableItem={9.0}
					dateCreated='Apr 12, 6:09AM'
				/>
				<ProductRow
					src='/Images/green-merch.png'
					name='Basic Green Merch'
					sizes='S, M, L, XL'
					price={250.0}
					availableItem={9.0}
					dateCreated='Apr 12, 6:09AM'
				/>
				<ProductRow
					src='/Images/green-merch.png'
					name='Basic Green Merch'
					sizes='S, M, L, XL'
					price={250.0}
					availableItem={9.0}
					dateCreated='Apr 12, 6:09AM'
				/>
				<ProductRow
					src='/Images/green-merch.png'
					name='Basic Green Merch'
					sizes='S, M, L, XL'
					price={250.0}
					availableItem={9.0}
					dateCreated='Apr 12, 6:09AM'
				/>
			</TableBody>
		</Table>
	);
}
export default ProductTable;
