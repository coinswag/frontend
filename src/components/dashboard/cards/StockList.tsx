import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableCell,
	TableRow,
} from "@/components/ui/table";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

export type StockCardProps = {
	stocks: number;
	size: string;
	index: number;
	handleChangeStock: (
		index: number,
		value: number | string,
		prop: "stocks" | "size"
	) => void;
};

export function SelectDemo({ size }: { size: StockCardProps["size"] }) {
	return (
		<Select value={size}>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Select a size' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem
						defaultChecked
						value='S'>
						S
					</SelectItem>
					<SelectItem value='M'>M</SelectItem>
					<SelectItem value='L'>L</SelectItem>
					<SelectItem value='XL'>XL</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

export function StockCard(props: StockCardProps) {
	return (
		<TableRow className='border-b border-b-borderColor'>
			<TableCell className='w-1/2 '>
				<Label
					htmlFor={`stock-${props.index}`}
					className='sr-only'>
					Stock
				</Label>
				<Input
					id={`stock-${props.index}`}
					type='number'
					value={props.stocks}
					onChange={(e) =>
						props.handleChangeStock(
							props.index,
							Number(e.target.value),
							"stocks"
						)
					}
					placeholder='stock'
					className='border border-borderColor rounded-xl'
				/>
			</TableCell>
			<TableCell className='w-1/2'>
				<Label
					htmlFor={`size-${props.index}`}
					className='sr-only'>
					size
				</Label>
				<Input
					id={`size-${props.index}`}
					type='text'
					value={props.size}
					onChange={(e) =>
						props.handleChangeStock(props.index, e.target.value, "size")
					}
					placeholder='size'
					className='border border-borderColor rounded-xl'
				/>
			</TableCell>
		</TableRow>
	);
}

function StockList() {
	const [stocks, setStocks] = useState([
		{
			stocks: 0,
			size: "S",
			index: 1,
		},
	]);

	const handleAddStock = () => {
		setStocks((prev) => [
			...prev,
			{
				stocks: 0,
				size: "S",
				index: prev.length + 1,
			},
		]);
	};

	const handleChangeStock = (
		index: number,
		value: number | string,
		prop: "stocks" | "size"
	) => {
		const newStocks = [...stocks];
		newStocks[index] = { ...newStocks[index], [prop]: value };
		setStocks(newStocks);
	};

	return (
		<Card className='mt-4 bg-transparent border border-borderColor rounded-[.7rem]'>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow className='border-b border-b-borderColor'>
							<TableHead>Stock</TableHead>
							<TableHead className='w-[100px]'>Size</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{stocks.map((item, index) => (
							<StockCard
								key={index}
								index={index}
								stocks={item.stocks}
								size={item.size}
								handleChangeStock={handleChangeStock}
							/>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter className='justify-center border-t p-4 border-t-borderColor'>
				<Button
					size='sm'
					variant='ghost'
					className='rounded-[.8rem] hover:bg-gray-200 text-sm  gap-2 text-gray-500 border border-borderColor '
					type='button'
					onClick={handleAddStock}>
					<Plus
						color='black'
						className='rounded-full w-5 h-5 bg-gray-400'
					/>
					Add Stock
				</Button>
			</CardFooter>
		</Card>
	);
}
export default StockList;
