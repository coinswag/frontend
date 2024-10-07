// import { createOrder } from "@/actions/api/shop";
import useCartProducts from "@/lib/zustand/useCartProducts";
// import {
//   SolanaChain,
//   usePublicClient,
//   useWallets,
// } from "@particle-network/connectkit";
// import {
//   LAMPORTS_PER_SOL,
//   PublicKey,
//   SystemProgram,
//   Transaction,
// } from "@solana/web3.js";
import { useState, useEffect } from "react";
// import toast from "react-hot-toast";

// import {
// emptyCart,
// selectCartItems,
// selectCartTotalPrice,
// } from "../redux/cart/cart.slice";

import { useNavigate } from "react-router-dom";

// const sampleSuccess = {
//   message: "Approved",
//   redirecturl: "?trxref=T591177663955222&reference=T591177663955222",
//   reference: "T591177663955222",
//   status: "success",
//   trans: "3774539066",
//   transaction: "3774539066",
//   trxref: "T591177663955222",
// };

function CheckoutForm() {
	const navigate = useNavigate();
	const { cartItems } = useCartProducts();

	const [cartItemTotalPrice, setCartItemTotalPrice] = useState(0);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	// const [primaryWallet] = useWallets();
	// const solanaWallet = primaryWallet.getWalletClient<SolanaChain>();
	// const publicClient = usePublicClient<SolanaChain>();

	useEffect(() => {
		const total = cartItems.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		);
		setCartItemTotalPrice(total);
	}, [cartItems]);

	// const executeTx = async () => {
	//   const publicKey = solanaWallet.publicKey;
	//   // Prepare the transaction object
	//   const tx = new Transaction();
	//   tx.add(
	//     SystemProgram.transfer({
	//       fromPubkey: publicKey,
	//       toPubkey: new PublicKey("E5HmSiV9XjnGj6y9KogyHx3U7Q9GzcpRfRZrwosqEL8A"),
	//       lamports: LAMPORTS_PER_SOL * (cartItemTotalPrice / 1000),
	//     })
	//   );

	//   const { blockhash, lastValidBlockHeight } =
	//     await publicClient!.getLatestBlockhash({
	//       commitment: "finalized",
	//     });

	//   tx.recentBlockhash = blockhash;
	//   tx.lastValidBlockHeight = lastValidBlockHeight;
	//   tx.feePayer = publicKey;

	//   const transactionResponse = await solanaWallet.sendTransaction(tx);
	//   console.log("Transaction sent:", transactionResponse);
	// };

	// const handleDeposit = async () => {
	//   if (!solanaWallet) {
	//     toast.error("Please connect your wallet first");
	//     return;
	//   }

	//   try {
	//     executeTx();
	//     // Create order
	//     const orderData = {
	//       storeId: "your_store_id", // Replace with actual store ID
	//       totalAmount: cartItemTotalPrice,
	//       tokenId: "SOL",
	//       txhash: signature,
	//       customer: {
	//         customerId: solanaWallet.publicKey.toString(),
	//         firstName,
	//         lastName,
	//         email,
	//         phone: phoneNumber,
	//       },
	//       shippingInfo: {
	//         method: "standard",
	//         trackingNumber: "",
	//         address: {
	//           street: "", // Add a state for address
	//           city: "",
	//           state: "",
	//           postalCode: "",
	//           country: "",
	//         },
	//       },
	//       priceBreakdown: {
	//         subtotal: cartItemTotalPrice,
	//         tax: 0,
	//         shippingCost: 0,
	//         discount: 0,
	//         total: cartItemTotalPrice,
	//       },
	//       cart: JSON.stringify(cartItems),
	//       store: "your_store_id", // Replace with actual store ID
	//     };

	//     const orderResponse = await createOrder(orderData);

	//     if (orderResponse.status === 200) {
	//       toast.success("Payment successful and order created!");
	//       navigate("/order-confirmation");
	//     } else {
	//       toast.error("Failed to create order. Please contact support.");
	//     }
	//   } catch (error) {
	//     console.error("Transaction failed", error);
	//     toast.error("Transaction failed. Please try again.");
	//   }
	// };

	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className='md:w-[74%]'>
			<h2 className='mb-4 text-2xl font'>Enter Details</h2>
			<div className='grid grid-cols-2 gap-6'>
				<div className='mb-4 flex flex-col gap-2 text-gray-500'>
					<label htmlFor='email'>First Name</label>
					<input
						className='rounded border p-2'
						type='text'
						name='firstName'
						id='firstName'
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
						placeholder='John'
						required
					/>
				</div>

				<div className='mb-4 flex flex-col gap-2'>
					<label htmlFor='email'>Last Name</label>
					<input
						className='rounded border p-2'
						type='text'
						name='lastName'
						id='lastName'
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
						placeholder='Doe'
					/>
				</div>
			</div>
			<div className='grid  grid-cols-2 gap-4'>
				<div className='mb-4 flex w-full flex-col gap-2'>
					<label htmlFor='email'>Email address</label>
					<input
						className='rounded border p-2'
						type='email'
						name='email'
						id='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required
						placeholder='johndoe123@example.com'
					/>
				</div>

				<div className='mb-4 flex w-full flex-col gap-2'>
					<label htmlFor='email'>Phone number</label>
					<input
						className='rounded border p-2'
						type='tel'
						name='phone'
						id='phone'
						onChange={(e) => setPhoneNumber(e.target.value)}
						value={phoneNumber}
						maxLength={11}
						placeholder='08102345678'
					/>
				</div>
			</div>
			<div className='mb-4 flex w-full flex-col gap-2'>
				<label htmlFor='email'>Shipping address</label>
				<input
					className='rounded border p-2'
					type='text'
					name='address'
					id='address'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
					placeholder='johndoe123@example.com'
				/>
			</div>
			<div className='my-4 flex flex-col items-center gap-2 lg:flex-row'>
				{/* {!email ||
        !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ||
        !firstName ? (
          <button
           onClick={connectToMetaMask}
            className="w-full rounded border-2 border-blue-500 bg-blue-500 py-3 text-center font-bold text-white opacity-70"
          >
            Pay - <EthereumIcon />
            {amount}
          </button>
        ) : (
          <PaystackButton
            className="w-full rounded border-2 border-blue-500 bg-blue-500 py-3 text-center font-bold text-white"
            {...paymentButtonProps}
          />
        )} */}

				<button
					// onClick={() => handleDeposit()}
					className='w-full rounded border-2 border-blue-500 bg-blue-500 py-3 text-center font-bold text-white opacity-70'>
					Deposit -{cartItemTotalPrice} USDC
				</button>

				<button
					onClick={() => navigate("/")}
					type='button'
					className='w-full rounded border-2 border-blue-500 py-3 text-center font-semibold'>
					Continue Shopping
				</button>
			</div>
		</form>
	);
}
export default CheckoutForm;
