import { useSendSol } from "@/actions/solana/sendSol";
import useCartProducts from "@/lib/zustand/useCartProducts";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const { sendSol, isLoading, error } = useSendSol();

  const navigate = useNavigate();

  const { cartItems } = useCartProducts();

  const [cartItemTotalPrice, setCartItemTotalPrice] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCartItemTotalPrice(total);
  }, [cartItems]);

  const handleDirectSolTransfer = async () => {
    const sig = await sendSol(
      "D9iqMouX8SxW8LaxA9PPoKHn87R33b6yvSnRtBAVJeys",
      cartItemTotalPrice
    );
    console.log(sig);

    if (error) console.log(error);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="md:w-[74%]">
      <h2 className="mb-4 text-2xl font">Enter Details</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="mb-4 flex flex-col gap-2 text-gray-500">
          <label htmlFor="email">First Name</label>
          <input
            className="rounded border p-2"
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            placeholder="John"
            required
          />
        </div>
        {isLoading}
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="email">Last Name</label>
          <input
            className="rounded border p-2"
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="grid  grid-cols-2 gap-4">
        <div className="mb-4 flex w-full flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <input
            className="rounded border p-2"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder="johndoe123@example.com"
          />
        </div>

        <div className="mb-4 flex w-full flex-col gap-2">
          <label htmlFor="email">Phone number</label>
          <input
            className="rounded border p-2"
            type="tel"
            name="phone"
            id="phone"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            maxLength={11}
            placeholder="08102345678"
          />
        </div>
      </div>
      <div className="mb-4 flex w-full flex-col gap-2">
        <label htmlFor="email">Shipping address</label>
        <input
          className="rounded border p-2"
          type="text"
          name="address"
          id="address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          placeholder="johndoe123@example.com"
        />
      </div>
      <div className="my-4 flex flex-col items-center gap-2 lg:flex-row">
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
          onClick={handleDirectSolTransfer}
          className="w-full rounded border-2 border-blue-500 bg-blue-500 py-3 text-center font-bold text-white opacity-70"
        >
          Deposit -{cartItemTotalPrice} USDC
        </button>

        <button
          onClick={() => navigate("/")}
          type="button"
          className="w-full rounded border-2 border-blue-500 py-3 text-center font-semibold"
        >
          Continue Shopping
        </button>
      </div>
    </form>
  );
}
export default CheckoutForm;
