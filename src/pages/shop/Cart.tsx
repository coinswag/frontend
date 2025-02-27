import useCartProducts from "@/lib/zustand/useCartProducts";
import CartItem from "../../components/shop/CartItem";

import OrderSummary from "@/components/shop/OrderSummary";

function Cart() {
	const { cartItems } = useCartProducts();

	return (
		<div className='mt-4 justify-between gap-7 px-4 pb-7 md:grid grid-cols-checkout_container md:px-12'>
			<div className=' '>
				<div className='grid grid-cols-cart_container_sm border-b border-b-borderColor py-4 md:grid-cols-cart_container_md [&>p]:text-[.8rem] [&>p]:text-gray-500'>
					<p>PRODUCT</p>
					<p className='hidden md:block'>PRICE</p>
					<p className='hidden md:block'>QUANTITY</p>
					<p className='hidden md:block'>SIZES</p>
					<p>TOTAL</p>
				</div>
				{cartItems.map((item) => (
					<CartItem
						key={item._id}
						{...item}
					/>
				))}
			</div>
			<OrderSummary />
		</div>
	);
}
export default Cart;
