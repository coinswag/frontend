import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Overview from "./pages/Overview";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import OrderDetails from "./pages/OrderDetails";
import Dashboard from "./pages/Dashboard";
import SharedLayout from "./components/landing-page/shared-layout/shared-wrapper";
import LandingPage from "./pages/Landing-page";
import About from "./pages/About";
import Merchandise from "./pages/Merchandise";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Otp from "./pages/auth/Otp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/merchandise",
        element: <Merchandise />,
      },
    ],
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
    element: <Dashboard />,
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
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
