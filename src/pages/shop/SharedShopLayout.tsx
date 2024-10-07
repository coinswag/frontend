import { Outlet } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ConnectButton } from "@particle-network/connectkit";

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
	return (
		<div className='bg-primary h-screen'>
			<ScrollToTop />
			<header className='flex justify-between items-center px-8 py-4 border-b border-b-borderColor'>
				<Link
					to='/shop'
					className='flex items-center gap-2'>
					<img
						src='/Icons/brand-1.svg'
						alt=''
						className='w-8 h-8 rounded-full'
					/>
					<h1 className='font-bold'>{props.subdomain || "DeGods"}</h1>
				</Link>
				<h1>Shop</h1>
				<div className='flex items-center gap-8'>
					<ConnectButton label='Connect Wallet'></ConnectButton>
					<Link
						to='/shop/cart'
						className='relative'>
						<ShoppingBag />
						<span className='absolute -top-3 -right-2 bg-blue-600 text-white text-sm h-5 w-5 rounded-full flex justify-center items-center'>
							3
						</span>
					</Link>
				</div>
			</header>
			<Outlet />
		</div>
	);
}
export default SharedShopLayout;
