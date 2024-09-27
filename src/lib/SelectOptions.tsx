import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const paymentMethod = [
	{
		img: "/Icons/visa.svg",
		label: "Card Payment",
		value: "card",
	},
	{
		img: "/Images/Wallet.svg",
		label: "Crypto Payment",
		value: "crypto",
	},
	{
		img: "/Icons/banknote.svg",
		label: "All Payment",
		value: "all",
	},
];

function SelectOptions() {
	const [selectedValue, setSelectedValue] = useState("all");

	return (
		<Select
			value={selectedValue}
			onValueChange={setSelectedValue}>
			<SelectTrigger className='text-sm bg-transparent border-borderColor h-full'>
				<SelectValue placeholder='Select a payment method' />
			</SelectTrigger>
			<SelectContent className='bg-transparent border-borderColor'>
				<SelectGroup className=''>
					{paymentMethod.map((method) => (
						<SelectItem
							key={method.value}
							value={method.value}
							className=''>
							{method.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
export default SelectOptions;
