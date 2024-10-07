import { Navigate, Outlet } from "react-router-dom";
import Header from "@/components/dashboard/header/Header";
import NavBar from "@/components/dashboard/navbar/NavBar";
import { useConnect } from "@particle-network/authkit";
import showToast from "@/lib/utils";
import { useEffect } from "react";

function SharedDashboardLayout() {
	const { connected } = useConnect();

	useEffect(() => {
		if (!connected) {
			showToast.error("Please connect to continue");
		}
	}, [connected]);

	if (!connected) {
		return <Navigate to='/' />;
	}

	if (connected) {
		return (
			<div className='dashboard__layout bg-primary'>
				<Header />
				<NavBar />
				<div className='outlet px-5	 md:px-8 py-4 overflow-y-auto'>
					<Outlet />
				</div>
			</div>
		);
	}
}
export default SharedDashboardLayout;
