import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

import { ReactNode } from "react";

type OrderMetricsProps = {
	title: string;
	icon: ReactNode;
};

function OrderMetrics(props: OrderMetricsProps) {
	return (
		<Card className='bg-transparent rounded-[.6rem] border-borderColor border bg-secondary'>
			<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
				<CardTitle className='text-sm font-medium'>{props.title}</CardTitle>
				{props.icon}
			</CardHeader>
			<CardContent>
				<div className='text-2xl font-bold'>+2350</div>
				<p className='text-xs text-muted-foreground'>
					+180.1% from last month
				</p>
			</CardContent>
		</Card>
	);
}
export default OrderMetrics;
