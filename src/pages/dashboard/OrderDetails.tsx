import OrderDetailsTable from "@/components/dashboard/tables/OrderDetailsTable";
import { Separator } from "@/components/ui/separator";
import OrderStatus from "@/lib/OrderStatus";
import { Fragment } from "react/jsx-runtime";
import { Banknote, Download, Wallet, MoveLeft } from "lucide-react";
// cusomer name
// customer email
// billing number
// address
// payment method
// customer number

const billingInfo = [
	{
		label: "Customer name",
		value: "Anioke Sebastian",
	},
	{
		label: "Customer email",
		value: "aniokechukwudi7@gmail.com",
	},
	{
		label: "Customer contact",
		value: "+2349030018605",
	},
	{
		label: "Billing Address",
		value: "24 oboloafo, nsukka, enugu state",
	},
	{
		label: "Payment Method",
		value: "card",
	},
];

function OrderDetails() {
	const walletAddress = "0x123...4567";
	return (
		<div className='pt-8'>
			<div className='text-sm flex gap-1 items-center'>
				<MoveLeft />
				<p>Back</p>
			</div>
			<div className='flex justify-between mt-6'>
				<div>
					<div className='flex items-center gap-2 mb-1'>
						<Banknote color='#a3a3a3' />
						<p className='text-neutral-400 text-sm'>Payment</p>
					</div>
					<h1 className='text-5xl flex gap-5'>
						0.0021 SOL{" "}
						<OrderStatus
							status='pending'
							className='border border-borderColor px-4 py-1 rounded-[.6rem]'
						/>
					</h1>
					<div className='rounded-[.5rem] border border-borderColor flex items-center  mt-4 gap-6 py-6 px-8 bg-secondary'>
						<div>
							<p className='text-neutral-600 text-sm mb-1'>Customer</p>
							<p>Anioke Sebastian</p>
						</div>
						<Separator
							orientation='vertical'
							className='h-[3rem] border-borderColor border h'
						/>
						<div>
							<p className='text-neutral-600 text-sm mb-1'>
								Payment Method
							</p>
							<p className='flex  items-center gap-2'>
								{walletAddress ? (
									<Fragment>
										<Wallet className='w-4' />
										<p>{walletAddress}</p>
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
							</p>
						</div>
						<Separator
							orientation='vertical'
							className='h-[3rem] border-borderColor border'
						/>
						<div>
							<p className='text-neutral-600 text-sm mb-1'>
								Date Created
							</p>
							<p>Apr 12, 6:09AM</p>
						</div>
					</div>
				</div>
				<button className='rounded-[.5rem] flex items-center gap-2 border border-borderColor px-6 h-fit py-3 text-sm'>
					Download Receipt <Download className='w-4' />
				</button>
			</div>
			<div className='mt-10 w-[60%] min-w-[50rem]'>
				<h1 className='text-3xl  border-b border-b-borderColor pb-4 mb-6'>
					Summary
				</h1>
				<div className='grid grid-cols-3 gap-y-6'>
					{billingInfo.map((info) => (
						<div>
							<p className='text-neutral-600 text-sm mb-1'>
								{info.label}
							</p>
							<p>{info.value}</p>
						</div>
					))}
				</div>
			</div>
			<OrderDetailsTable />
		</div>
	);
}

export default OrderDetails;
