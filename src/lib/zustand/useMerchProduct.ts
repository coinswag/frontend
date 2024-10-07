import { create } from "zustand";
import { Merch } from "./useShop";

export type MerchProductProps = Merch;

// {
//   id: string;
//   src: string[];
//   name: string;
//   creator: {
//     name: string;
//     image: string;
//   };
//   colors: string[];
//   sizes: string[];
//   stock: number;
//   price: number;
//   isFavourite: boolean;
//   description: string;
//   bgGradient: string;
// };

// const products = [
//   {
//     id: "1",
//     src: ["/Images/shop/image-1.png", "/Images/shop/image-2.png"],
//     name: "Crypto Mug",
//     creator: { name: "Monster", image: "/Icons/brand-3.svg" },
//     colors: ["#0000FF", "#FFFFFF", "#000000"],
//     sizes: ["11oz", "15oz"],
//     stock: 50,
//     price: 23.0,
//     isFavourite: true,
//     description:
//       "Elevate your coffee experience with our Crypto Mug. This sleek, ceramic mug features intricate cryptocurrency symbols and blockchain designs. Perfect for tech enthusiasts and crypto traders, it holds 12 oz of your favorite beverage. The mug's high-quality print is dishwasher and microwave safe, ensuring long-lasting durability. Start your day right with this conversation-starting mug that showcases your passion for digital currencies.",
//     bgGradient: "bg-gray-400",
//   },
//   {
//     id: "2",
//     src: ["/Images/shop/image-2.png", "/Images/shop/image-2-alt.png"],
//     name: "Blockchain T-Shirt",
//     creator: { name: "Monster", image: "/Icons/brand-3.svg" },
//     colors: ["#FF0000", "#000000", "#FFFFFF"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     stock: 100,
//     price: 35.0,
//     isFavourite: false,
//     description:
//       "Make a statement with our Blockchain T-Shirt. Crafted from 100% organic cotton, this comfortable tee features a unique, eye-catching design that visualizes the concept of blockchain technology. Available in sizes S to XXL, it's perfect for casual wear or tech meetups. ",
//     bgGradient: "bg-gray-400",
//   },
//   {
//     id: "3",
//     src: ["/Images/shop/image-3.png", "/Images/shop/image-2.png"],
//     name: "Decentralized Cap",
//     creator: { name: "Monster", image: "/Icons/brand-3.svg" },
//     colors: ["#FFFF00", "#000000", "#FFFFFF"],
//     sizes: ["One Size"],
//     stock: 75,
//     price: 15.0,
//     isFavourite: true,
//     description:
//       "Top off your look with our Decentralized Cap. This adjustable, 100% cotton cap features embroidered symbols representing decentralization and blockchain technology. The cap's breathable fabric and structured design ensure comfort for all-day wear. Its curved brim provides excellent sun protection, making it perfect for outdoor events or casual outings.",
//     bgGradient: "bg-gray-400",
//   },
//   {
//     id: "4",
//     src: ["/Images/shop/image-4.png", "/Images/shop/image-4-alt.png"],
//     name: "Crypto Water Bottle",
//     creator: { name: "Monster", image: "/Icons/brand-3.svg" },
//     colors: ["#00FF00", "#C0C0C0", "#000000"],
//     sizes: ["20oz", "32oz"],
//     stock: 120,
//     price: 12.0,
//     isFavourite: false,
//     description:
//       "Stay hydrated and eco-friendly with our Crypto Water Bottle. This 20 oz stainless steel bottle features a sleek design adorned with popular cryptocurrency logos. Its double-wall vacuum insulation keeps your drinks cold for up to 24 hours or hot for up to 12 hours. The leak-proof cap ensures your bag stays dry, while the wide mouth makes it easy to add ice cubes.",
//     bgGradient: "bg-gray-400",
//   },
//   {
//     id: "5",
//     src: ["/Images/shop/image-5.png", "/Images/shop/image-5-alt.png"],
//     name: "Blockchain Sticker",
//     creator: { name: "Monster", image: "/Icons/brand-3.svg" },
//     colors: ["#FF0000", "#0000FF", "#00FF00"],
//     sizes: ["3 inch", "5 inch"],
//     stock: 200,
//     price: 5.0,
//     isFavourite: true,
//     description:
//       "Decorate your world with our Blockchain Sticker. This high-quality vinyl sticker measures 3 inches in diameter and features a detailed, colorful representation of blockchain technology. Weather-resistant and durable, it's perfect for laptops, water bottles, cars, or any smooth surface.",
//     bgGradient: "bg-gray-400",
//   },
//   {
//     id: "6",
//     src: ["/Images/shop/image-6.png", "/Images/shop/image-6-alt.png"],
//     name: "Crypto Notebook",
//     creator: { name: "Monster", image: "/Icons/brand-3.svg" },
//     colors: ["#800080", "#000000", "#FFFFFF"],
//     sizes: ["A5", "A4"],
//     stock: 80,
//     price: 10.0,
//     isFavourite: false,
//     description:
//       "Capture your blockchain brainstorms in our Crypto Notebook. This sleek, A5-sized notebook features 120 pages of high-quality, acid-free paper that's perfect for both pen and pencil. The cover showcases a stylish, embossed design of cryptocurrency symbols and blockchain patterns. With a built-in bookmark and an elastic closure, your ideas stay organized and secure.",
//     bgGradient: "bg-gray-400",
//   },
//   {
//     id: "7",
//     src: ["/Images/shop/image-7.png", "/Images/shop/image-7-alt.png"],
//     name: "Blockchain Keychain",
//     creator: { name: "Monster", image: "/Icons/brand-3.svg" },
//     colors: ["#C0C0C0", "#FFD700", "#CD7F32"],
//     sizes: ["1.5 inch"],
//     stock: 150,
//     price: 8.0,
//     isFavourite: true,
//     description:
//       "Keep your keys organized with our Blockchain Keychain. Crafted from durable zinc alloy, this keychain features a detailed 3D representation of a blockchain network. The split ring design allows for easy attachment and detachment of keys. Its compact size (1.5 inches in diameter) makes it perfect for pockets or bags without adding bulk.",
//     bgGradient: "bg-gray-400",
//   },
// ];

interface MerchProductState {
  merches: MerchProductProps[];
  currentMerch: MerchProductProps | null;
  setCurrentMerch: (merch: MerchProductProps) => void;
}

// const initialState = {
//   merches: products,
//   currentMerch: null,
// };

const useMerchProduct = create<MerchProductState>()((set) => ({
  //   ...initialState,
  currentMerch: null,
  merches: [],
  setCurrentMerch: (merch) => set({ currentMerch: merch }),
}));

export default useMerchProduct;
