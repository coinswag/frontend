import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export function CalendarDateRangePicker({
	className,
}: React.HTMLAttributes<HTMLDivElement>) {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(2023, 0, 20),
		to: addDays(new Date(2023, 0, 20), 20),
	});

	return (
		<div className={cn("grid gap-2 h-full", className)}>
			<Popover>
				<PopoverTrigger asChild>
					<button
						id='date'
						className={cn(
							"w-[260px] text-left font-normal flex items-center justify-center text-[.8rem] border border-borderColor",
							!date && "text-muted-foreground"
						)}>
						<CalendarIcon className='mr-2 h-4 w-4' />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, "LLL dd, y")} -{" "}
									{format(date.to, "LLL dd, y")}
								</>
							) : (
								format(date.from, "LLL dd, y")
							)
						) : (
							<span>Pick a date</span>
						)}
					</button>
				</PopoverTrigger>
				<PopoverContent
					className='w-auto p-0'
					align='end'>
					<Calendar
						initialFocus
						mode='range'
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
