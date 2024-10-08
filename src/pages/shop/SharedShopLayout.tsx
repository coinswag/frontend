import { Outlet } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ConnectButton } from "@particle-network/connectkit";
import useCartProducts from "@/lib/zustand/useCartProducts";
// import useShop from "@/lib/zustand/useShop";
import { getShopByName } from "@/actions/api/shop";
import useShop from "@/lib/zustand/useShop";

type SharedShopLayoutProps = {
	subdomain?: string;
};

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

function SharedShopLayout(props: SharedShopLayoutProps) {
	const { cartItems } = useCartProducts();
	const { shop } = useShop();

	console.log(props.subdomain);

	useEffect(() => {
		const getShop = async () => {
			const response = await getShopByName("degods");
			const shopData = response.data;

			console.log("shop shopData: ", shopData);
			//   setShop(shopData);

			//   console.log("currentShop", shop);
		};

		getShop();
	}, []);

	return (
		<div className='bg-primary h-screen '>
			<ScrollToTop />
			<header className='flex justify-between items-center px-8 py-4 border-b border-b-borderColor relative'>
				<Link
					to='/'
					className='flex items-center gap-2'>
					<img
						src={shop?.logo}
						alt=''
						className='w-8 h-8 rounded-full object-cover'
					/>
					<h1 className='font-bold text-gray-300'>{shop?.displayName}</h1>
				</Link>
				<h1 className='absolute -transalte-x-1/1 -translate-y-1/2 top-1/2 left-1/2 text-gray-400'>
					Shop
				</h1>
				<div className='flex items-center gap-8'>
					<ConnectButton label='Connect Wallet'></ConnectButton>
					<Link
						to='/cart'
						className='relative'>
						<ShoppingBag color='#f0f0f0' />
						<span className='absolute -top-3 -right-2 bg-violet-600 text-white text-sm h-5 w-5 rounded-full flex justify-center items-center'>
							{cartItems.length}
						</span>
					</Link>
				</div>
			</header>
			<Outlet />
		</div>
	);
}
export default SharedShopLayout;
