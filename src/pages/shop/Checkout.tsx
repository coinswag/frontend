import CheckoutForm from "@/components/shop/CheckOutForm";
import CheckoutReceipt from "@/components/shop/CheckoutReceipt";

function Checkout() {
	return (
		<div className='mt-4 justify-between gap-7 px-4 pb-7 md:grid md:grid-cols-checkout_container md:px-12'>
			<CheckoutForm />
			<CheckoutReceipt />
		</div>
	);
}
export default Checkout;
