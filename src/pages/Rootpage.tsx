import { Route } from "react-router-dom";
import LandingPage from "./LandingPage";

import ShopRoutes from "./shop/ShopRoutes";

function RootPage() {
	const hostname = window.location.hostname;
	const parts = hostname.split(".");
	const isSubdomain = parts.length > 1;
	const subdomain = isSubdomain ? parts[0] : null;
	console.log(subdomain, parts);

	return (
		<>
			{" "}
			{subdomain ? (
				<ShopRoutes subdomain={subdomain} />
			) : (
				<Route
					index
					element={<LandingPage />}
				/>
			)}
		</>
	);
}
export default RootPage;
