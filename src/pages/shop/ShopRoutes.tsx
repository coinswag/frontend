import { Route } from "react-router-dom";
import SharedShopLayout from "./SharedShopLayout";
import ProductOverveiw from "./ProductOverveiw";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";

type ShopRoutesProps = {
	subdomain: string;
};
function ShopRoutes(props: ShopRoutesProps) {
	console.log(props.subdomain);
	return (
		<Route
			path='/shop'
			element={<SharedShopLayout />}>
			<Route
				index
				element={<ProductOverveiw />}
			/>
			<Route
				path='product/:id'
				element={<ProductDetails />}
			/>
			<Route
				path='cart'
				element={<Cart />}
			/>
			<Route
				path='checkout'
				element={<Checkout />}
			/>
		</Route>
	);
}
export default ShopRoutes;
