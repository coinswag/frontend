import { Plus, Minus } from "lucide-react";
import MerchCard from "@/components/shop/MerchCard";
import { useEffect, useState } from "react";
import showToast, { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import useCartProducts from "@/lib/zustand/useCartProducts";
import useShop, { Merch, Variant } from "@/lib/zustand/useShop";

function ProductDetails() {
	const { currentMerch, shop } = useShop();
	const navigate = useNavigate();
	console.log(shop);
	const { addCartItem } = useCartProducts();
	const similarMerches = shop?.merches.map((merch, index) => (
		<MerchCard
			{...merch}
			key={index}
		/>
	));

	const [currentImage, setCurrentImage] = useState(currentMerch?.images[0]);
	const [quantity, setQuantity] = useState(1);
	const [selectedColors, setSelectedColors] = useState<string[]>([]);
	const [selectedVariants, setSelectedVariants] = useState<Merch["variants"]>(
		[]
	);

	const handleQuantityIncrement = () => {
		setQuantity((prev) => prev + 1);
	};

	const handleQuantityDecrement = () => {
		if (quantity == 1) return;
		setQuantity((prev) => prev - 1);
	};

	const handleAddProduct = () => {
		if (
			currentMerch &&
			selectedColors.length > 0 &&
			selectedVariants.length > 0
		) {
			showToast.success("Added successfully");
			addCartItem({
				...currentMerch,
				colors: selectedColors,
				variants: selectedVariants,
				quantity,
			});
		} else {
			showToast.error("Please select at least one color and one size");
		}
	};

	const handleColorSelect = (color: string) => {
		setSelectedColors((prev) =>
			prev.includes(color)
				? prev.filter((c) => c !== color)
				: [...prev, color]
		);
	};

	const handleVariantSelect = (variant: Variant) => {
		setSelectedVariants((prev) =>
			prev.some((v) => v.size === variant.size)
				? prev.filter((v) => v.size !== variant.size)
				: [...prev, variant]
		);
	};

	useEffect(() => {
		if (!currentMerch) {
			navigate("/");
		}
	}, [currentMerch, navigate]);

	const sizeElementStyles = `w-9 h-9 rounded-full border border-borderColor text-gray-500 flex justify-center items-center text-[.8rem] cursor-pointer`;

	return (
		<main>
			<section className='grid grid-cols-2 gap-12 mt-12 px-8 '>
				<div
					className={cn(
						"h-[37rem] relative w-[67%] ml-auto rounded-2xl p-8",
						"bg-gray-400"
					)}>
					<img
						src={currentImage}
						alt=''
						className='h-full object-cover rounded-xl'
					/>
					<div className='absolute flex items-center gap-5 w-[80%] ml-auto top-[103%] left-0'>
						{currentMerch?.images.map((src, index) => (
							<img
								key={index}
								src={src}
								alt=''
								className='w-14 h-12 rounded-xl object-cover border border-gray-400 p-1 cursor-pointer'
								onClick={() => setCurrentImage(src)}
							/>
						))}
					</div>
				</div>
				<div className='md:w-full lg:w-[67%] mt-8'>
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
						<p className='text-gray-500 text-sm my-3'>
							colors (select multiple)
						</p>
						<div className='flex items-center gap-4'>
							{currentMerch?.colors.map((color, index) => (
								<div
									key={index}
									style={{
										background: `${color}`,
										border: selectedColors.includes(color)
											? "3px solid #e0e0e0"
											: "1px solid gray",
									}}
									className='w-7 h-7 rounded-full cursor-pointer'
									onClick={() => handleColorSelect(color)}
								/>
							))}
						</div>
					</div>
					<div className='border-t border-t-borderColor mt-4'>
						<p className='text-gray-500 text-sm my-3'>
							sizes (select multiple)
						</p>
						<div className='flex items-center gap-4'>
							{currentMerch?.variants.map((variant, index) => (
								<div
									key={index}
									className={`${sizeElementStyles} ${
										selectedVariants.some(
											(v) => v.size === variant.size
										)
											? "bg-gray-200"
											: ""
									}`}
									onClick={() => handleVariantSelect(variant)}>
									{variant.size}
								</div>
							))}
						</div>
					</div>
					<h2 className='text-gray-400 my-5'>
						Availability:{" "}
						<span className='font-bold'>
							{currentMerch?.variants.reduce(
								(acc, variant) => acc + variant.quantity,
								0
							)}
						</span>{" "}
						in stock
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
			<section className='mt-[10rem] w-[90%] mx-auto mb-8 boder'>
				<h1 className='font-manrope text-3xl'>More Products</h1>
				<div className='mt-12 grid grid-cols-auto-fill-minmax gap-12 justify-center'>
					{similarMerches}
				</div>
			</section>
		</main>
	);
}
export default ProductDetails;
