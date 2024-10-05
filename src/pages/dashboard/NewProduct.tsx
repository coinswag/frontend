import { X, Images, Plus } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import StockList from "@/components/dashboard/cards/StockList";
import { useState, useRef } from "react";
import showToast from "@/lib/utils";
import { ImagePlus } from "lucide-react";

export function SelectDemo() {
	return (
		<Select>
			<SelectTrigger className='w-full bg-transparent mt-8 rounded-[.4rem] border border-borderColor h-12 text-gray-600'>
				<SelectValue
					className='text-gray-500'
					placeholder='Select merchandise type'
				/>
			</SelectTrigger>
			<SelectContent className='bg-primary border border-borderColor text-gray-400'>
				<SelectGroup>
					<SelectLabel>Merch Type</SelectLabel>
					<SelectItem
						className='text-gray-600'
						value='apple'>
						Apple
					</SelectItem>
					<SelectItem
						className='text-gray-600'
						value='banana'>
						Banana
					</SelectItem>
					<SelectItem
						className='text-gray-600'
						value='blueberry'>
						Blueberry
					</SelectItem>
					<SelectItem
						className='text-gray-600'
						value='grapes'>
						Grapes
					</SelectItem>
					<SelectItem
						className='text-gray-600'
						value='pineapple'>
						Pineapple
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

function NewProduct() {
	const fileRef = useRef<HTMLInputElement>(null);
	const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

	const handleAddFileClick = () => {
		if (uploadedFiles.length >= 5) {
			return showToast.error("You can only upload 5 images");
		}
		fileRef.current?.click();
	};

	const [currentImage, setCurrentImage] = useState<File | null>(null);

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		const allFiles = uploadedFiles;
		if (files) {
			setUploadedFiles([...uploadedFiles, ...Array.from(files)]);
		}
		if (allFiles.length == 0 && files) {
			setCurrentImage(files[0]);
		}
	};

	const [merchColor, setMerchColor] = useState<string[]>(["#000000"]);

	const handleAddColor = () => {
		setMerchColor([...merchColor, "#000000"]);
	};

	const handleCurrentImage = (index: number) => {
		const currentImage = uploadedFiles[index];
		setCurrentImage(currentImage);
		console.log(currentImage);
	};

	return (
		<div className='new__product'>
			<header className='flex justify-between items-center  bg-secondary px-8 relative border-b border-b-borderColor'>
				<DialogPrimitive.Close className='border border-borderColor rounded-full p-1'>
					<X
						color='gray'
						className=''
						strokeWidth={1}
					/>
				</DialogPrimitive.Close>

				<h1 className=' text-gray-600 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
					New Merch
				</h1>
				<button className='text-sm bg-violet-600 px-4 py-2 rounded-3xl'>
					Create Merch
				</button>
			</header>
			<form className='bg-secondary row-start-2 row-span-3 px-12 py-8 overflow-y-scroll'>
				<p className='text-gray-500 text-center'>
					Provide the details below to create a new merch in your shop
				</p>
				<div className='my-8 w-full '>
					<label
						htmlFor='name'
						className='text-sm text-gray-500 block'>
						Name
					</label>
					<div className=' rounded-xl mt-4  border-borderColor'>
						<input
							name='name'
							id='name'
							placeholder='Enter the name of the merch'
							className='w-full border  border-borderColor rounded-xl block h-12 z-30 bg-transparent indent-4 bg placeholder:text-gray-600 placeholder:text-sm'
						/>
					</div>
				</div>
				<div className='mt-8'>
					<label
						className='block text-sm text-gray-500'
						htmlFor='description'>
						Description
					</label>
					<textarea
						name='description'
						className=' text-white p-3 h-[8rem] mt-4 w-full bg-transparent border border-borderColor rounded-2xl resize-none'
						id='description'
					/>
				</div>
				<div className='mt-5'>
					<label
						className='block text-sm text-gray-500'
						htmlFor='color'>
						Color
					</label>
					<div className='flex items-center gap-4 mt-4'>
						{merchColor.map((color, index) => (
							<input
								key={index}
								className='w-8 h-8 rounded-full bg-blue-300'
								type='color'
								value={color}
								onChange={(e) => {
									const newColors = [...merchColor];
									newColors[index] = e.target.value;
									setMerchColor(newColors);
								}}
							/>
						))}

						<button
							className='w-9 h-9 rounded-full border border-borderColor text-gray-500 flex justify-center items-center text-[.8rem]'
							onClick={handleAddColor}
							type='button'>
							<Plus color='gray' />
						</button>
					</div>
				</div>
				<div className='rounded-xl py-16 mt-5 border border-dashed border-gray-700 justify-center items-center flex flex-col'>
					<input
						className='hidden'
						type='file'
						name=''
						id=''
						ref={fileRef}
						onChange={handleFileUpload}
					/>
					<Images color='#374151' />
					<p className='text-gray-400 mt-2'>
						Drop your image here or{" "}
						<span
							className='text-blue-700 underline cursor-pointer hover:text-blue-500'
							onClick={handleAddFileClick}>
							browse
						</span>
					</p>

					<p className='text-[.8rem] text-gray-500 mt-1'>
						Supports only JPG, JPEG and PNG
					</p>
					<button
						type='button'
						className='text-[.8rem]  text-gray-300 px-4 py-1 rounded-[.4rem] bg-violet-500 mt-4'>
						Connect wallet to use NFT
					</button>
				</div>
				<SelectDemo />
				<StockList />
			</form>
			<div className='row-start-2 row-span-3 px-12'>
				<div className='flex justify-center items-center gap-4 mt-3 h-[6vh] '>
					{uploadedFiles.map((file, index) => (
						<img
							className='w-14 h-12 rounded-xl object-cover border border-gray-400 p-1 cursor-pointer '
							src={URL.createObjectURL(file)}
							alt=''
							key={index}
							onClick={() => handleCurrentImage(index)}
						/>
					))}
				</div>
				<div className='h-[90%] mt-2 flex justify-center items-center'>
					{uploadedFiles.length == 0 && (
						<div className='bg-secondary rounded-[.8rem] p-8 shadow-slate-900'>
							<ImagePlus
								strokeWidth={1}
								stroke='gray'
								className='h-[13rem] w-[13rem] text-gray-400'
							/>
							<p className='text-gray-400 text-sm text-center'>
								No image uploaded yet
							</p>
						</div>
					)}
					{currentImage && (
						<img
							className='h-[90%] w-[80%] object-cover object-top rounded-[.6rem] border border-borderColor'
							src={URL.createObjectURL(currentImage)}
							alt=''
						/>
					)}
				</div>
			</div>
		</div>
	);
}
export default NewProduct;
