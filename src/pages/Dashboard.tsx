import { Outlet } from "react-router-dom";
import Header from "@/components/dashboard/header/Header";
import NavBar from "@/components/dashboard/navbar/NavBar";

function Dashboard() {
	return (
		<div className='dashboard__layout bg-primary'>
			<Header />
			<NavBar />
			<div className='outlet px-8 py-4 overflow-y-auto'>
				<Outlet />
			</div>
		</div>
	);
}
export default Dashboard;
