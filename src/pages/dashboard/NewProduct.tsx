import { X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
function NewProduct() {
	return (
		<div className=''>
			<header className='flex justify-between items-center'>
				<DialogPrimitive.Close>
					<X />
				</DialogPrimitive.Close>

				<h1>Create Merch</h1>
				<button>Create Merch</button>
			</header>
			<div className='grid grid-cols-2 py-4'>
				<form>
					<p className='text-gray-500'>
						Provide the details below to create a new merch in your shop
					</p>
					<div className='my-4 w-full '>
						<label htmlFor='name'>Name</label>
						<div className='  '>
							<Input
								style={{ backgroundColor: "red" }}
								name='name'
								id='name'
								className='w-full bg-gray-800  border-borderColor rounded-xl block h-12 z-30'
							/>
						</div>
					</div>
					<div>
						<label htmlFor='description'>Description</label>
						<textarea
							name='description'
							className='bg-gray-800 text-white p-2 rounded-lg'
							id='description'
						/>
					</div>
					<div>
						<label htmlFor='price'>Price</label>
						<input
							type='number'
							name='price'
							id='price'
						/>
					</div>
					<div>
						<label htmlFor='image'>Image</label>
						<input
							type='file'
							name='image'
							id='image'
						/>
					</div>
					<button>Create Merch</button>
				</form>
				<div></div>
			</div>
		</div>
	);
}
export default NewProduct;
