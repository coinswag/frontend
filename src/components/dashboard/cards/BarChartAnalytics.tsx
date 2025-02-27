"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const description = "A bar chart with a label";

const chartData = [
	{ month: "January", desktop: 186 },
	{ month: "February", desktop: 305 },
	{ month: "March", desktop: 237 },
	{ month: "April", desktop: 73 },
	{ month: "May", desktop: 209 },
	{ month: "June", desktop: 214 },
	{ month: "July", desktop: 73 },
	{ month: "August", desktop: 209 },
	{ month: "September", desktop: 214 },
	{ month: "October", desktop: 73 },
	{ month: "November", desktop: 209 },
	{ month: "December", desktop: 214 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

type BarCharProps = {
	chartStyles?: string | undefined;
	cardStyles?: string;
	cardContentStyles?: string;
	cardHeaderStyles?: string;
};
export function BarChartAnalytics(props: BarCharProps) {
	const [barCharData, setBarCharData] = useState(chartData);
	const [barSize, setBarSize] = useState(10);

	useEffect(() => {
		const handleResize = () => {
			// Get only the last 4 items from the data array
			const lastFourMonths = barCharData.slice(-7);
			setBarCharData(
				window.innerWidth >= 900 ? barCharData : lastFourMonths
			);
			setBarSize(window.innerWidth >= 900 ? 10 : 6);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [barCharData]);

	return (
		<Card
			className={cn(
				"w-full flex flex-col p-0 justify-between bg-transparent h-full border border-[#636363] barchart__analytics",
				props.cardStyles
			)}>
			<CardHeader className={cn(props.cardHeaderStyles)}>
				<CardTitle>Orders per month</CardTitle>
				<CardDescription>January - December 2024</CardDescription>
			</CardHeader>
			<CardContent className={cn(props.cardContentStyles)}>
				<ChartContainer
					className={cn(props.chartStyles)}
					config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={barCharData}
						margin={{
							top: 20,
						}}>
						<CartesianGrid
							stroke='#272727'
							vertical={false}
						/>
						<XAxis
							dataKey='month'
							tickLine={false}
							tickMargin={5}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar
							dataKey='desktop'
							fill='var(--color-desktop)'
							radius={8}
							barSize={barSize}>
							<LabelList
								position='top'
								offset={12}
								className='fill-foreground'
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col items-start gap-2 text-sm'>
				<div className='flex gap-2 font-medium leading-none'>
					Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
				</div>
				<div className='leading-none text-muted-foreground'>
					Showing total visitors for the last 6 months
				</div>
			</CardFooter>
		</Card>
	);
}
