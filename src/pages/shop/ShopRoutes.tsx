import { Route, Routes } from "react-router-dom";
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
		<Routes>
			<Route
				path='/*'
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
		</Routes>
	);
}
export default ShopRoutes;
