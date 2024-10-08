import { TableCell, TableRow } from "@/components/ui/table";
import OrderStatus, { StatusProps } from "@/lib/OrderStatus";
import { Wallet } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

type PaymentMethod = {
	type: "wallet" | "card";
	details: string;
};

export type RecentOrder = {
	name: string;
	email: string;
	status: StatusProps["status"]; // Add more statuses as needed
	paymentMethod: PaymentMethod;
	date: string;
	quantity: number;
	amount: number;
};

function RecentOrderRow(props: RecentOrder) {
	return (
		<TableRow className='grid grid-cols-3 md:grid-cols-7 items-center'>
			<TableCell className='flex gap-3 items-center'>
				<img
					src='/Icons/avatar.svg'
					alt=''
					className='w-12 hidden md:block'
				/>
				<p className='text-[.8rem]'>{props.name}</p>
			</TableCell>
			<TableCell className='hidden md:block'>{props.email}</TableCell>
			<TableCell className='hidden md:block'>
				<OrderStatus status={props.status} />
			</TableCell>
			<TableCell className='items-center gap-2 hidden md:flex'>
				{props.paymentMethod.type === "wallet" ? (
					<Fragment>
						<Wallet />
						<p>{props.paymentMethod.details}</p>
					</Fragment>
				) : (
					<Fragment>
						<img
							src='/Icons/visa.svg'
							alt=''
							className='w-8 inline'
						/>
						<p>...{props.paymentMethod.details}</p>
					</Fragment>
				)}
			</TableCell>
			<TableCell className='hidden md:block'>{props.date}</TableCell>
			<TableCell>{props.quantity}</TableCell>
			<TableCell className='flex items-center gap-1 md:gap-2'>
				<img
					src='/Icons/solana.svg'
					alt=''
					className='w-6 md:w-10'
				/>
				{props.amount.toFixed(2)}
			</TableCell>
		</TableRow>
	);
}

export default RecentOrderRow;
