import useCartProducts from "@/lib/zustand/useCartProducts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
	const navigate = useNavigate();
	const { cartItems } = useCartProducts();
	const [cartItemTotalPrice, setCartItemTotalPrice] = useState(0);

	useEffect(() => {
		const total = cartItems.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		);
		setCartItemTotalPrice(total);
	}, [cartItems]);

	const EthereumIcon = () => {
		return <i className='pi pi-ethereum'></i>;
	};

	return (
		<div className='sticky  top-[10vh] h-fit border border-borderColor rounded-2xl'>
			<h2 className='border-b border-b-borderColor px-4 py-4 text-xl  text-gray-500'>
				Order Summary
			</h2>
			<div className=' py-5 [&>div]:mb-3 [&>div]:px-4 [&>div]:text-sm text-gray-700'>
				<div className='flex items-center justify-between'>
					<p>Subtotal</p>
					<p className=''>
						{cartItemTotalPrice}
						USDC
					</p>
				</div>
				<div className='flex items-center justify-between'>
					<p>Shipping</p>
					<p className=''>00 USDC</p>
				</div>
				<div className='flex items-center justify-between'>
					<p className='text-blue-500'>Discount</p>
					<p className='text-blue-500'>
						<EthereumIcon />
						00
					</p>
				</div>
			</div>
			<div className='flex items-center justify-between bg-secondary px-4 py-3'>
				<h2 className='font-bold'>Total</h2>
				<h2 className='font-bold'>
					<EthereumIcon />
					{cartItemTotalPrice} USDC
				</h2>
			</div>
			<button
				onClick={() => navigate("/checkout")}
				className='mt-4 w-full  py-3 text-center font-bold text-white bg-violet-500 rounded-xl'>
				Checkout
			</button>
		</div>
	);
}
export default OrderSummary;
