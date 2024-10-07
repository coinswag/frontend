import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

import SharedShopLayout from "./shop/SharedShopLayout";

function RootPage() {
	const hostname = window.location.hostname;
	const parts = hostname.split(".");
	const isSubdomain = parts.length > 2;
	const subdomain = isSubdomain ? parts[0] : null;

	return (
		<Routes>
			{" "}
			{subdomain ? (
				<Route
					index
					element={<SharedShopLayout subdomain={subdomain} />}
				/>
			) : (
				<Route
					index
					element={<LandingPage />}
				/>
			)}
		</Routes>
	);
}
export default RootPage;
