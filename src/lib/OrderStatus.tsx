import { cn } from "./utils";

export type StatusProps = {
	status: "pending" | "delivered" | "failed";
	className?: string;
};

export default function OrderStatus(props: StatusProps) {
	const getPendingColor = () => {
		if (props.status == "delivered") {
			return "bg-green-500";
		}
		if (props.status == "failed") {
			return "bg-red-500";
		}
		if (props.status == "pending") {
			return "bg-yellow-500";
		}
		return "bg-gray-500";
	};
	return (
		<div className={cn("flex items-center gap-2 ", props.className)}>
			<div className={`w-3 h-3 ${getPendingColor()} rounded-full`} />
			<p className='text-sm'>{props.status}</p>
		</div>
	);
}
