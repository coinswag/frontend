import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NewProduct from "@/pages/dashboard/NewProduct";
import { CirclePlus } from "lucide-react";

function CreateProductDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className='rounded-[.6rem] py-2 px-5 text-sm flex items-center justify-center gap-1 bg-white text-black'>
					<CirclePlus
						color='black'
						className='w-5'
					/>
					Add Product
				</button>
			</DialogTrigger>
			<DialogContent className='bg-primary h-screen max-w-screen border-none'>
				<NewProduct />
			</DialogContent>
		</Dialog>
	);
}
export default CreateProductDialog;
