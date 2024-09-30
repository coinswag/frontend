import {
	Card,
	CardTitle,
	CardHeader,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { WalletMinimal, TrendingUp } from "lucide-react";

function TotalRevenue() {
	return (
		<Card className='w-full  bg-violet-300 flex flex-col justify-between '>
			<CardHeader className='flex gap-3 items-center'>
				<WalletMinimal
					color='#808080'
					style={{
						backgroundColor: "white",
						padding: "7px 3px",
						height: "2.3rem",
						width: "2.3rem",
						borderRadius: ".4rem",
					}}
				/>
				<CardTitle>Profit</CardTitle>
			</CardHeader>
			<CardContent className='mt-auto mb-2'>
				<img
					src='/Icons/big-coins.svg'
					alt=''
					className='w-full'
				/>
			</CardContent>
			<CardFooter className='flex-col items-start gap-2 text-sm'>
				<h2 className='text-3xl flex  items-center'>
					$23,000 <TrendingUp className='w-9 ml-4' />{" "}
					<span className='text-sm'>+12%</span>
				</h2>
				<div className='flex gap-2 font-medium leading-none'>
					Trending up by 5.2% this month{" "}
					{/* <TrendingUp className='h-4 w-4' /> */}
				</div>
			</CardFooter>
		</Card>
	);
}
export default TotalRevenue;
