import MerchCard from "@/components/shop/MerchCard";
import { useState } from "react";
import { Command } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import useMerchProduct from "@/lib/zustand/useMerchProduct";
import { useEffect } from "react";
import { getShopByName } from "@/actions/api/shop";

function ProductOverveiw() {
	const { merches } = useMerchProduct();
	const [shopMerch, setShopMerch] = useState(merches);

	const handleMerchSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value) {
			return setShopMerch(shopMerch);
		}
		const searchValue = e.target.value;
		const filteredMerch = shopMerch.filter((merch) =>
			merch.name.toLowerCase().includes(searchValue.toLowerCase())
		);
		setShopMerch(filteredMerch);
	};

	useEffect(() => {
		const getCartItems = async () => {
			const response = await getShopByName("degods");
			const data = response.data;
			console.log(data);
			// setCartItems(data.);
		};

		getCartItems();
	}, []);

	const stars = shopMerch.map((product) => (
		<MerchCard
			key={product.id}
			{...product}
		/>
	));
	return (
		<main>
			<Command className='bg-primary px-8'>
				<div
					className={cn(
						"flex items-center px-3",
						"w-[42%] mx-auto mt-12 border border-borderColor rounded-[2rem] h-[3.5rem] px-8"
					)}>
					<Search className='mr-2 h-4 w-4 shrink-0 opacity-50 ' />
					<input
						className={cn(
							"flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-zinc-400"
						)}
						placeholder='Search for products'
						onChange={handleMerchSearch}
					/>
				</div>
				<p className='mt-12 text-gray-400'>Products</p>
				<div className='mt-5 mb-5 grid grid-cols-auto-fill-minmax gap-12 justify-center'>
					{stars}
				</div>
			</Command>
		</main>
	);
}
export default ProductOverveiw;
