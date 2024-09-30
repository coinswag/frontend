import { Plus, Minus } from "lucide-react";

function ProductDetails() {
	return (
		<main>
			<div className='grid grid-cols-2 '>
				<div>
					<img
						src='/Images/base-unn-merch.jpeg'
						alt=''
					/>
					<div>
						<img
							src='/Images/base-unn-merch.jpeg'
							alt=''
						/>
						<img
							src='/Images/black-merch.png'
							alt=''
						/>
					</div>
				</div>
				<div>
					<p>In Stock</p>
					<h1>Basee UNN Hoodies</h1>
					<div>
						<p>price</p> <h1>61.00 USDC</h1>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquam ipsam qui id quibusdam quisquam nemo asperiores optio.
						Dolores aperiam minus doloremque pariatur odio sequi, quisquam
						quae voluptate debitis cupiditate earum quo quia culpa
						quaerat.
					</p>
					<div>
						<p>color</p>
						<div className='flex items-center gap-4'>
							<div className='w-7 h-7 rounded-full bg-blue-300' />
							<div className='w-7 h-7 rounded-full bg-blue-300' />
							<div className='w-7 h-7 rounded-full bg-blue-300' />
							<div className='w-7 h-7 rounded-full bg-blue-300' />
							<div className='w-7 h-7 rounded-full bg-blue-300' />
						</div>
					</div>
					<div>
						<p>size</p>
						<div className='flex items-center gap-4'>
							<div className='w-7 h-7 rounded-full border border-borderColorm flex justify-center items-center text-sm'>
								sm
							</div>
							<div className='w-7 h-7 rounded-full border border-borderColorm flex justify-center items-center text-sm'>
								md
							</div>
							<div className='w-7 h-7 rounded-full border border-borderColorm flex justify-center items-center text-sm'>
								lg
							</div>
							<div className='w-7 h-7 rounded-full border border-borderColorm flex justify-center items-center text-sm'>
								xl
							</div>
						</div>
					</div>
					<div>
						<h2>Availability:</h2>
						<p>10 in stock</p>
					</div>
					<div className='flex gap-7 items-center'>
						<div className='flex items-center'>
							<button>
								<Plus />
							</button>
							<p>2</p>
							<button>
								<Minus />
							</button>
						</div>
						<button>Add to cart</button>
					</div>
				</div>
			</div>
		</main>
	);
}
export default ProductDetails;
