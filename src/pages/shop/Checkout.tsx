import CheckoutForm from "./CheckOutForm";
import CheckoutReceipt from "./CheckoutReceipt";

function Checkout() {
	return (
		<div className='mt-4 justify-between gap-7 px-4 pb-7 md:flex md:px-12'>
			<CheckoutForm />
			<CheckoutReceipt />
		</div>
	);
}
export default Checkout;
