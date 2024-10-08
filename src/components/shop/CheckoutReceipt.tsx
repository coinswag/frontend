import useCartProducts from "@/lib/zustand/useCartProducts";
import { useEffect, useState } from "react";

function CheckoutReceipt() {
	const { cartItems } = useCartProducts();
	const [cartItemTotalPrice, setCartItemTotalPrice] = useState(0);

	useEffect(() => {
		const total = cartItems.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		);
		console.log("me");
		setCartItemTotalPrice(total);
	}, [cartItems]);

	return (
		<div className='sticky  top-[10vh] h-fit  border border-borderColor'>
			<h2 className='border-b border-b-borderColor  px-4 border border-borderColor py-4 text-xl font-bold text-gray-500'>
				Order
			</h2>

			<div className='bg-transparent py-5 [&>div]:mb-3 [&>div]:px-4 [&>div]:text-sm [&>div]:font-semibold'>
				<ul className='border-b border-b-borderColor  pb-4 [&>li]:mb-3 [&>li]:px-4 [&>li]:text-sm'>
					{cartItems.map((item) => (
						<li
							key={item._id}
							className='flex items-center justify-between'>
							<p className='w-2/3 truncate'>
								{item.quantity} {item.name}
							</p>
							<p className='font-semibold'>{item.price.toFixed(3)}</p>
						</li>
					))}
				</ul>

				<div className='flex items-center justify-between pt-4'>
					<p>Subtotal</p>
					<p className=''>{cartItemTotalPrice}</p>
				</div>
				<div className='flex items-center justify-between'>
					<p>Shipping</p>
					<p className=''>00</p>
				</div>
				<div className='flex items-center justify-between'>
					<p className='text-blue-500'>Discount</p>
					<p className='text-blue-500'>00</p>
				</div>
			</div>
			<div className='flex items-center justify-between bg-secondary px-4 py-3'>
				<h2 className='font-bold'>Total</h2>
				<h2 className='font-bold'>{cartItemTotalPrice} USDC</h2>
			</div>
		</div>
	);
}
export default CheckoutReceipt;
