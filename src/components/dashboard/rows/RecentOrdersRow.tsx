import { TableCell, TableRow } from "@/components/ui/table";
import OrderStatus from "@/lib/OrderStatus";
import { Wallet } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

type RecentOrdersRowProps = {
	walletAddress?: string;
};

function RecentOrderRow(props: RecentOrdersRowProps) {
	return (
		<TableRow className='grid grid-cols-3  md:grid-cols-7 items-center'>
			<TableCell className=' flex gap-3 items-center'>
				<img
					src='/Icons/avatar.svg'
					alt=''
					className='w-12 hidden md:block'
				/>
				<p className='text-[.8rem]'>Anioke Sebastian</p>
			</TableCell>
			<TableCell className='hidden md:block'>
				aniokechukwdi7@gmail.com
			</TableCell>
			<TableCell className='hidden md:block'>
				<OrderStatus status='pending' />
			</TableCell>
			<TableCell className='   items-center gap-2 hidden md:flex'>
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

			<TableCell className='hidden md:block'>Apr 12, 6:09AM</TableCell>
			<TableCell>07</TableCell>
			<TableCell className=' flex items-center gap-1 md:gap-2'>
				<img
					src='/Icons/solana.svg'
					alt=''
					className='w-6 md:w-10'
				/>
				250.00
			</TableCell>
		</TableRow>
	);
}
export default RecentOrderRow;
