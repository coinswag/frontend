import { BarChartAnalytics } from "../../components/dashboard/cards/BarChartAnalytics";
import { PieChartAnalytics } from "../../components/dashboard/cards/PieChartAnalytics";
import TotalRevenue from "../../components/dashboard/cards/TotalRevenue";
import RecentOrders from "../../components/dashboard/tables/RecentOrders";

function Overview() {
	return (
		<div className=''>
			<p className='text-sm my-8'>Analytics</p>
			<div className='analytics'>
				<TotalRevenue />
				<BarChartAnalytics chartStyles='h-[18rem] w-[45rem]' />
				<PieChartAnalytics />
			</div>
			<RecentOrders />
		</div>
	);
}
export default Overview;
