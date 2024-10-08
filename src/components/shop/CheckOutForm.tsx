import { useSendSol } from "@/actions/solana/sendSol";
import useCartProducts from "@/lib/zustand/useCartProducts";
import crypto from "crypto";
import { useNavigate } from "react-router-dom";

import React, { useState, ChangeEvent, useEffect } from "react";
import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import showToast from "@/lib/utils";
import CircleLoader from "../dashboard/common/circle-loader/CircleLoader";
import { Wallet } from "lucide-react";

interface Customer {
	firstName: string;
	lastName: string;
	email: string;
	walletAddress: string;
}

interface Address {
	street: string;
	city: string;
	state: string;
	postalCode: string;
	country: string;
	apartment?: string;
}

interface ShippingInfo {
	address: Address;
	method: string;
	trackingNumber: string;
}

interface PriceBreakdown {
	subtotal: number;
	tax: number;
	shippingCost: number;
	discount: number;
	total: number;
}

interface FormData {
	customer: Customer;
	shippingInfo: ShippingInfo;
	priceBreakdown: PriceBreakdown;
	emailNewsOffers: boolean;
	saveInformation: boolean;
	sameAsBillingAddress: boolean;
}

const CheckoutForm = () => {
	const [formData, setFormData] = useState<FormData>({
		customer: {
			firstName: "",
			lastName: "",
			email: "",
			walletAddress: "",
		},
		shippingInfo: {
			address: {
				street: "",
				city: "",
				state: "",
				postalCode: "",
				country: "Nigeria",
			},
			method: "Standard Shipping",
			trackingNumber: "",
		},
		priceBreakdown: {
			subtotal: 0,
			tax: 0,
			shippingCost: 0,
			discount: 0,
			total: 0,
		},
		emailNewsOffers: false,
		saveInformation: false,
		sameAsBillingAddress: true,
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			customer: {
				...prevState.customer,
				[name]: value,
			},
		}));
	};

	const [loading] = useState(false);

	const { sendSol, error } = useSendSol();

	const navigate = useNavigate();

	const { cartItems } = useCartProducts();

	const [cartItemTotalPrice, setCartItemTotalPrice] = useState(0);

	useEffect(() => {
		const getCartItemTotalPrice = () => {
			const total = cartItems.reduce(
				(acc, item) => acc + item.price * item.quantity,
				0
			);
			setCartItemTotalPrice(total);
		};
		getCartItemTotalPrice();
	}, [cartItems]);

	const handleDirectSolTransfer = async () => {
		try {
			const sig = await sendSol(
				"D9iqMouX8SxW8LaxA9PPoKHn87R33b6yvSnRtBAVJeys",
				cartItemTotalPrice
			);
			console.log(sig);
			if (error) {
				showToast.error(error);
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleMercuryoPayment = () => {
		// e.preventDefault();
		const address = "5hJhb6imnnW5aZiGdsQuph8LaRji9WqfFXJiSU2iDKRJ";
		const secret = "secret";

		// Generate the signature using sha512
		const signatureInput = `${address}${secret}`;
		const signature = crypto
			.createHash("sha512")
			.update(signatureInput)
			.digest("hex");

		const baseUrl = "https://exchange.mercuryo.io/";
		const widgetId = "fb8715db-4c0c-444c-adb3-50acdc1f3ab2";

		// Defining query parameters
		const params = {
			widget_id: widgetId,
			type: "buy",
			currency: "USDC",
			network: "SOLANA",
			amount: cartItemTotalPrice.toString(), // Convert amount to string
			fiat_currency: "EUR",
			address: address,
			signature: signature,
		};

		// Function to serialize the parameters as query string
		const queryString = new URLSearchParams(params).toString();
		const finalUrl = `${baseUrl}?${queryString}`;
		console.log(finalUrl);

		// Redirect to the generated URL
		window.location.href = finalUrl;
	};

	const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			shippingInfo: {
				...prevState.shippingInfo,
				address: {
					...prevState.shippingInfo.address,
					[name]: value,
				},
			},
		}));
	};

	const handleCheckboxChange = (
		name: keyof Pick<
			FormData,
			"emailNewsOffers" | "saveInformation" | "sameAsBillingAddress"
		>
	) => {
		setFormData((prevState) => ({
			...prevState,
			[name]: !prevState[name],
		}));
	};

	const handleCountryChange = (value: string) => {
		setFormData((prevState) => ({
			...prevState,
			shippingInfo: {
				...prevState.shippingInfo,
				address: {
					...prevState.shippingInfo.address,
					country: value,
				},
			},
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			await handleDirectSolTransfer();
			// Here you would typically send the formData to your API
			console.log(formData);
		} catch (error) {
			if (error instanceof Error) {
				showToast.error(error.message);
			}
			console.log(error);
		}
	};

	console.log(handleSubmit);

	return (
		<form className='space-y-6 w-full mx-auto p-6 bg-secondary rounded-[.9rem]'>
			<h2 className='text-xl font-semibold text-gray-400'>
				Enter your details
			</h2>
			<div className='space-y-4'>
				<Input
					type='text'
					placeholder='Email or mobile phone number'
					name='email'
					required
					value={formData.customer.email}
					onChange={handleInputChange}
					className='border border-borderColor rounded-[.6rem] h-[3rem]'
				/>
				<div className='flex items-center space-x-2'>
					<Checkbox
						id='emailNewsOffers'
						checked={formData.emailNewsOffers}
						onCheckedChange={() =>
							handleCheckboxChange("emailNewsOffers")
						}
						className='border border-borderColor rounded-[.6rem]'
					/>
					<Label
						htmlFor='emailNewsOffers'
						className='text-gray-500'>
						Email me with news and offers
					</Label>
				</div>
			</div>

			<div className='space-y-4'>
				<Select
					onValueChange={handleCountryChange}
					defaultValue='Nigeria'>
					<SelectTrigger className='border border-borderColor rounded-[.6rem] bg-secondary h-[3.1rem]'>
						<SelectValue placeholder='Select a country' />
					</SelectTrigger>
					<SelectContent className='border border-borderColor rounded-[.6rem] bg-secondary'>
						<SelectItem value='Nigeria'>Nigeria</SelectItem>
						{/* Add more countries as needed */}
					</SelectContent>
				</Select>
				<div className='grid grid-cols-2 gap-4'>
					<Input
						type='text'
						placeholder='First name'
						name='firstName'
						required
						value={formData.customer.firstName}
						onChange={handleInputChange}
						className='border border-borderColor rounded-[.6rem] bg-secondary h-[3.1rem]'
					/>
					<Input
						type='text'
						placeholder='Last name'
						required
						name='lastName'
						value={formData.customer.lastName}
						onChange={handleInputChange}
						className='border border-borderColor rounded-[.6rem] bg-secondary h-[3.1rem]'
					/>
				</div>
				<Input
					type='text'
					placeholder='Address'
					required
					name='street'
					value={formData.shippingInfo.address.street}
					onChange={handleAddressChange}
					className='border border-borderColor rounded-[.6rem] bg-secondary h-[3.1rem] '
				/>
				<Input
					type='text'
					placeholder='Apartment, suit, etc (optional)'
					required
					name='apartment'
					value={formData.shippingInfo.address.apartment}
					onChange={handleAddressChange}
					className='border border-borderColor rounded-[.6rem] bg-secondary h-[3.1rem]'
				/>
				<div className='grid grid-cols-2 gap-4'>
					<Input
						type='text'
						placeholder='Postal code'
						required
						name='postalCode'
						value={formData.shippingInfo.address.postalCode}
						onChange={handleAddressChange}
						className='border border-borderColor rounded-[.6rem] bg-secondary h-[3.1rem]'
					/>
					<Input
						type='text'
						placeholder='City'
						required
						name='city'
						value={formData.shippingInfo.address.city}
						onChange={handleAddressChange}
						className='border border-borderColor rounded-[.6rem] bg-secondary h-[3.1rem]'
					/>
				</div>
				<div className='flex items-center space-x-2'>
					<Checkbox
						id='saveInformation'
						checked={formData.saveInformation}
						required
						onCheckedChange={() =>
							handleCheckboxChange("saveInformation")
						}
					/>
					<Label
						htmlFor='saveInformation'
						className='text-gray-600'>
						Save this information for later
					</Label>
				</div>
			</div>

			<div className='space-y-4'>
				<h2 className='text-xl font-semibold text-gray-400'>
					Shipping address
				</h2>
				<div className='flex items-center space-x-2'>
					<Checkbox
						id='sameAsBillingAddress'
						disabled
						checked={formData.sameAsBillingAddress}
						required
						onCheckedChange={() =>
							handleCheckboxChange("sameAsBillingAddress")
						}
					/>
					<Label
						htmlFor='sameAsBillingAddress'
						className='text-gray-400'>
						Same as billing address
					</Label>
				</div>
				{!formData.sameAsBillingAddress && (
					<Button
						variant='outline'
						type='button'
						className='w-full bg-secondary'>
						Use a different shipping address
					</Button>
				)}
			</div>

			<div className='my-4 flex flex-col items-center gap-2 lg:flex-row h-12'>
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
					type='button'
					className='w-full h-full rounded border-2 border-none bg-violet-500 py-3 text-sm text-center font-bold text-white relative flex justify-center items-center'
					onClick={handleMercuryoPayment}>
					{loading ? (
						<CircleLoader className='w-12 top-1/2 left-1/2' />
					) : (
						<div className='flex gap-2 items-center justify-center'>
							<Wallet />
							<p>Pay</p>
						</div>
					)}
				</button>

				<button
					onClick={() => navigate("/")}
					type='button'
					className='w-full h-full rounded border-2 border-violet-500 text-gray-400 py-3 text-center font-semibold text-sm'>
					Continue Shopping
				</button>
			</div>
		</form>
	);
};

export default CheckoutForm;
