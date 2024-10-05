import { create } from "zustand";
import { MerchProductProps } from "@/lib/zustand/useMerchProduct";

type CartItemProps = MerchProductProps & {
	quantity: number;
};

const products = [
	{
		id: "1",
		src: ["/Images/shop/image-1.png", "/Images/shop/image-2.png"],
		name: "Crypto Mug",
		creator: { name: "Monster", image: "/Icons/brand-3.svg" },
		colors: ["#0000FF", "#FFFFFF", "#000000"],
		sizes: ["11oz", "15oz"],
		stock: 50,
		price: 23.0,
		isFavourite: true,
		description:
			"Elevate your coffee experience with our Crypto Mug. This sleek, ceramic mug features intricate cryptocurrency symbols and blockchain designs. Perfect for tech enthusiasts and crypto traders, it holds 12 oz of your favorite beverage. The mug's high-quality print is dishwasher and microwave safe, ensuring long-lasting durability. Start your day right with this conversation-starting mug that showcases your passion for digital currencies.",
		bgGradient: "bg-gray-400",
		quantity: 1,
	},
	{
		id: "2",
		src: ["/Images/shop/image-2.png", "/Images/shop/image-2-alt.png"],
		name: "Blockchain T-Shirt",
		creator: { name: "Monster", image: "/Icons/brand-3.svg" },
		colors: ["#FF0000", "#000000", "#FFFFFF"],
		sizes: ["S", "M", "L", "XL", "XXL"],
		stock: 100,
		price: 35.0,
		isFavourite: false,
		description:
			"Make a statement with our Blockchain T-Shirt. Crafted from 100% organic cotton, this comfortable tee features a unique, eye-catching design that visualizes the concept of blockchain technology. Available in sizes S to XXL, it's perfect for casual wear or tech meetups. ",
		bgGradient: "bg-gray-400",
		quantity: 3,
	},
	{
		id: "3",
		src: ["/Images/shop/image-3.png", "/Images/shop/image-2.png"],
		name: "Decentralized Cap",
		creator: { name: "Monster", image: "/Icons/brand-3.svg" },
		colors: ["#FFFF00", "#000000", "#FFFFFF"],
		sizes: ["One Size"],
		stock: 75,
		price: 15.0,
		isFavourite: true,
		description:
			"Top off your look with our Decentralized Cap. This adjustable, 100% cotton cap features embroidered symbols representing decentralization and blockchain technology. The cap's breathable fabric and structured design ensure comfort for all-day wear. Its curved brim provides excellent sun protection, making it perfect for outdoor events or casual outings.",
		bgGradient: "bg-gray-400",
		quantity: 2,
	},
];

interface CartProductState {
	cartItems: CartItemProps[];
	cartItemTotalPrice: number;
	addCartItem: (item: CartItemProps) => void;
	removeCartItem: (id: string) => void;
	updateCartItemQuantity: (id: string, quantity: number) => void;
	clearCart: () => void;
	getCartTotalPrice: () => number;
}

const useCartProducts = create<CartProductState>((set, get) => ({
	cartItems: products,
	cartItemTotalPrice: 0,

	addCartItem: (newItem) =>
		set((state) => {
			const existingItem = state.cartItems.find(
				(item) => item.id === newItem.id
			);
			if (existingItem) {
				return {
					cartItems: state.cartItems.map((item) =>
						item.id === newItem.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			}
			return {
				cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
			};
		}),

	removeCartItem: (id) =>
		set((state) => ({
			cartItems: state.cartItems.filter((item) => item.id !== id),
		})),

	updateCartItemQuantity: (id, quantity) =>
		set((state) => ({
			cartItems: state.cartItems.map((item) =>
				item.id === id ? { ...item, quantity } : item
			),
		})),

	clearCart: () => set({ cartItems: [] }),

	getCartTotalPrice: () => {
		const state = get();
		const total = state.cartItems.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		);
		set({ cartItemTotalPrice: total });
		return total;
	},
}));

export default useCartProducts;
