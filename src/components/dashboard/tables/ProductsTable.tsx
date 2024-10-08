import {
	Table,
	TableBody,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import ProductRow from "../rows/ProductRow";
import useShop from "@/lib/zustand/useShop";

function ProductTable() {
	const { shop } = useShop();
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
				{shop?.merches.map((item, index) => (
					<ProductRow
						key={index}
						{...item}
					/>
				))}
			</TableBody>
		</Table>
	);
}
export default ProductTable;
