import { Plus, Minus } from "lucide-react";
import MerchCard from "@/components/shop/MerchCard";
import useMerchProduct from "@/lib/zustand/useMerchProduct";
import { useEffect, useState } from "react";
import showToast, { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import useCartProducts from "@/lib/zustand/useCartProducts";

function ProductDetails() {
	const { currentMerch, merches } = useMerchProduct();
	const navigate = useNavigate();

	const { addCartItem } = useCartProducts();
	const sizeElementStypes =
		"w-9 h-9 rounded-full border border-borderColor text-gray-500 flex justify-center items-center text-[.8rem]";

	const similarMerches = merches.map((merch, index) => (
		<MerchCard
			{...merch}
			key={index}
		/>
	));

	const [currentImage, setCurrentImage] = useState(currentMerch?.src[0]);

	const [quantity, setQuantity] = useState(1);

	const handleQuantityIncrement = () => {
		setQuantity((prev) => prev + 1);
	};

	const handleQuantityDecrement = () => {
		setQuantity((prev) => prev - 1);
	};

	const handleAddProduct = () => {
		if (currentMerch) {
			showToast.success("Added successfully");
			addCartItem(currentMerch);
		}
	};

	useEffect(() => {
		if (!currentMerch) {
			navigate("/shop");
		}
	}, [currentMerch, navigate]);

	return (
		<main>
			<section className='grid grid-cols-2 gap-12 mt-12 px-8 '>
				<div
					className={cn(
						"h-[37rem] relative w-[80%] ml-auto rounded-2xl p-8",
						currentMerch?.bgGradient
					)}>
					<img
						src={currentImage}
						alt=''
						className='h-full object-cover  rounded-xl'
					/>
					<div className='absolute flex items-center gap-5 w-[80%] ml-auto top-[103%] left-0'>
						{currentMerch?.src.map((src, index) => (
							<img
								key={index}
								src={src}
								alt=''
								className='w-14 h-12 rounded-xl object-cover border border-gray-400 p-1 '
								onClick={() => setCurrentImage(src)}
							/>
						))}
					</div>
				</div>
				<div className='w-[67%] mt-8'>
					{/* <p className='text-gray-900 text-sm bg-gray-500 w-fit px-5 rounded-xl'>
						In Stock
					</p> */}
					<h1 className='font-manrope text-4xl'>{currentMerch?.name}</h1>
					<h1 className='mt-4 '>
						price{" "}
						<span className='text-2xl font-quicksand'>
							{currentMerch?.price} USDC
						</span>
					</h1>
					<p className='mt-5 text-sm leading-7'>
						{currentMerch?.description}
					</p>
					<div className='border-t border-t-borderColor mt-8 '>
						<p className='text-gray-500 text-sm my-3'>color</p>
						<div className='flex items-center gap-4'>
							{currentMerch?.colors.map((color, index) => (
								<div
									key={index}
									style={{ background: color }}
									className='w-7 h-7 rounded-full bg-blue-300 border border-borderColor'
								/>
							))}
						</div>
					</div>
					<div className='border-t border-t-borderColor mt-4'>
						<p className='text-gray-500 text-sm my-3'>size</p>
						<div className='flex items-center gap-4'>
							{currentMerch?.sizes.map((size, index) => (
								<div
									key={index}
									className={sizeElementStypes}>
									{size}
								</div>
							))}
						</div>
					</div>
					<h2 className='text-gray-400 my-5'>
						Availability:{" "}
						<span className='font-bold'>{currentMerch?.stock}</span> in
						stock
					</h2>

					<div className='flex gap-12 items-center'>
						<div className='flex items-center border border-borderColor h-12'>
							<button
								className='w-14 border border-borderColor h-full flex justify-center items-center text-sm '
								onClick={handleQuantityIncrement}>
								<Plus color='gray' />
							</button>
							<p className='w-14 h-full flex items-center justify-center text-sm text-gray-600'>
								{quantity}
							</p>
							<button
								className='w-14 border border-borderColor h-full flex justify-center items-center text-sm '
								onClick={handleQuantityDecrement}>
								<Minus color='gray' />
							</button>
						</div>
						<button
							className='text-sm text-gray-900 bg-white rounded-[.5rem] px-12 h-12'
							onClick={handleAddProduct}>
							Add to cart
						</button>
					</div>
				</div>
			</section>
			<section className='mt-[10rem] w-[90%] mx-auto mb-8'>
				<h1 className='font-manrope text-3xl'>More Products</h1>
				<div className='mt-12 grid grid-cols-auto-fill-minmax gap-12 justify-center'>
					{similarMerches}
				</div>
			</section>
		</main>
	);
}
export default ProductDetails;
