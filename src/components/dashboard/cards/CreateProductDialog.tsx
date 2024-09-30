import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
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
			<DialogContent className='sm:max-w-[425px] bg-secondary'>
				<DialogHeader>
					<DialogTitle className='text-center'>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're
						done.
					</DialogDescription>
				</DialogHeader>
				<div className='grid gap-4 py-4'></div>
				<DialogFooter>
					<button type='submit'>Save changes</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
export default CreateProductDialog;
