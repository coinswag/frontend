import useCartProducts from "@/lib/zustand/useCartProducts";
import { MerchProductProps } from "@/lib/zustand/useMerchProduct";
import { Minus, X, Plus } from "lucide-react";

type CartItemProps = MerchProductProps & {
	quantity: number;
};

function CartItem(props: CartItemProps) {
	const { updateCartItemQuantity, removeCartItem } = useCartProducts();

	const handleIncreaseBtn = () => {
		if (props.quantity >= 10) return;
		updateCartItemQuantity(props.id, props.quantity + 1);
	};
	const handleDecreaseBtn = () => {
		if (props.quantity === 1) return;

		updateCartItemQuantity(props.id, props.quantity - 1);
	};
	const handleRemoveCartItem = () => {
		removeCartItem(props.id);
	};

	return (
		<div className=' mb-4 mt-4 grid grid-cols-cart_container_sm border-b border-b-borderColor pb-5 md:grid-cols-cart_container_md'>
			<div className='relative flex gap-4'>
				<img
					className='block h-20 w-24 object-cover object-top brightness-90'
					src={props.src[0]}
					alt={props.description}
				/>
				<p className='absolute left-12 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white md:hidden '>
					X{props.quantity}
				</p>
				<div>
					<h2 className='font-semibold text-gray-300 mb-1'>
						{props.name}
					</h2>
					<p className='text-sm text-gray-400 italize'>monster</p>
				</div>
			</div>
			<p className='hidden text-sm text-gray-500 md:block '>
				{props.price} USDC
			</p>
			<div className='hidden h-fit w-fit items-center gap-4 rounded-2xl bg-secondary px-3 py-1 md:flex'>
				<Minus
					color='gray'
					className='w-5 h-5'
					onClick={handleDecreaseBtn}
				/>
				<p className='text-gray-500 text-sm font-semibold'>
					{props.quantity}
				</p>
				<Plus
					color='gray'
					className='w-5 h-5'
					onClick={handleIncreaseBtn}
				/>
			</div>
			<div className='text-sm text-gray-500'>{props.sizes.join(",")}</div>
			<button
				onClick={handleRemoveCartItem}
				className='h-7 w-7 border border-borderColor rounded-full  bg-secondary p-[.3rem] flex justify-center items-center'>
				<X color='gray' />
			</button>
		</div>
	);
}
export default CartItem;
