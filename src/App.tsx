import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Overview from "./pages/dashboard/Overview";
import Orders from "./pages/dashboard/Orders";
import Customers from "./pages/dashboard/Customers";
import Settings from "./pages/dashboard/Settings";
import Products from "./pages/dashboard/Products";
import OrderDetails from "./pages/dashboard/OrderDetails";

import LandingPage from "./pages/LandingPage";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Otp from "./pages/auth/Otp";

import SharedDashboardLayout from "./pages/dashboard/SharedDashboardLayout";
import { Toaster } from "react-hot-toast";

import Providers from "./components/providers";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/otp",
		element: <Otp />,
	},
	{
		path: "/dashboard",
		element: <SharedDashboardLayout />,
		children: [
			{
				index: true,
				element: <Overview />,
			},
			{
				path: "/dashboard/orders",
				element: <Orders />,
			},
			{
				path: "/dashboard/orders/:id",
				element: <OrderDetails />,
			},
			{
				path: "/dashboard/customers",
				element: <Customers />,
			},
			{
				path: "/dashboard/settings",
				element: <Settings />,
			},
			{
				path: "/dashboard/products",
				element: <Products />,
			},
		],
	},
]);

function App() {
	return (
		<Fragment>
			<Toaster />
			<Providers>
				<RouterProvider router={router} />
			</Providers>
		</Fragment>
	);
}

export default App;
