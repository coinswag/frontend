import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";

import ShopRoutes from "./shop/ShopRoutes";

function RootPage() {
  const hostname = window.location.hostname;
  const parts = hostname.split(".");
  const isSubdomain = parts.length > 2;
  const subdomain = isSubdomain ? parts[0] : null;
  console.log(subdomain, parts);
  console.log(hostname);

  return (
    <>
      {" "}
      {subdomain ? (
        <ShopRoutes subdomain={subdomain} />
      ) : (
        <Routes>
          <Route index element={<LandingPage />} />
        </Routes>
      )}
    </>
  );
}
export default RootPage;
