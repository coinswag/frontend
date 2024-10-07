import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewStore() {
	return (
		<Card className='bg-primary border border-borderColor'>
			<CardHeader>
				<CardTitle>Create New Shop</CardTitle>
				<CardDescription>
					Create your new shop in one-click.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className='grid w-full items-center gap-4'>
						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='name'>Name</Label>
							<Input
								id='name'
								placeholder='Name of your project'
							/>
						</div>
						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='description'>Description</Label>
							<textarea
								id='description'
								placeholder='Short description of your project'
								className='rounded border p-2 placeholder:text-gray-700 placeholder:text-sm bg-transparent'
							/>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className='flex justify-end'>
				<Button>Deploy</Button>
			</CardFooter>
		</Card>
	);
}
