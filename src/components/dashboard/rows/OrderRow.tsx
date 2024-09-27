import { TableCell, TableRow } from "@/components/ui/table";
import { Wallet } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import OrderStatus, { StatusProps } from "@/lib/OrderStatus";
import { Link } from "react-router-dom";

type OrderRowProps = {
	walletAddress?: string;
	status: StatusProps["status"];
};

function OrderRow(props: OrderRowProps) {
	return (
		<TableRow className='grid grid-cols-8 items-center'>
			<TableCell>#T45632</TableCell>
			<TableCell className=' flex gap-3 items-center'>
				Anioke Sebastian
			</TableCell>
			<TableCell>
				<OrderStatus status={props.status} />
			</TableCell>
			<TableCell className='  flex  items-center gap-2'>
				{props.walletAddress ? (
					<Fragment>
						<Wallet />
						<p>{props.walletAddress}</p>
					</Fragment>
				) : (
					<Fragment>
						<img
							src='/Icons/visa.svg'
							alt=''
							className='w-8 inline'
						/>
						<p>...6345</p>
					</Fragment>
				)}
			</TableCell>

			<TableCell>Apr 12, 6:09AM</TableCell>
			<TableCell>07</TableCell>

			<TableCell className=' flex items-center gap-2 '>
				<img
					src='/Icons/solana.svg'
					alt=''
					className='w-10'
				/>
				250.00
			</TableCell>
			<TableCell>
				<Link to='/dashboard/orders/2'>
					<button className='hover:bg-secondary border border-borderColor px-6 text-sm py-[.3rem] rounded-lg'>
						View
					</button>
				</Link>
			</TableCell>
		</TableRow>
	);
}
export default OrderRow;
