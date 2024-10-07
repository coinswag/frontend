import { create } from "zustand";

export interface Variant {
  size: string;
  quantity: number;
  _id: string;
}

export interface Merch {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  colors: string[];
  merchandiseType: string;
  variants: Variant[];
}

export interface Shop {
  _id: string;
  name: string;
  displayName: string;
  description: string;
  url: string;
  logo: string;
  owner: string;
  merches: Merch[];
  createdAt: string;
  updatedAt: string;
}

const initialShopState: Shop = {
  _id: "67010cc91b18848317ce2d8c",
  name: "degods",
  displayName: "DeGods NFT Merch Store",
  description: "This is the official store for the DeGods NFT Collection",
  url: "degods.coinswag.shop",
  logo: "https://res.cloudinary.com/dbuaprzc0/image/upload/v1728122057/ideubn3v9y1kvlxolraz.png",
  owner: "6700eeaf5b33b51f12e3781d",
  merches: [
    {
      _id: "67010e0a2ad31d4983bf2ac5",
      name: "DeGod #4167",
      description:
        "A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe.",
      price: 20,
      images: [
        "https://res.cloudinary.com/dbuaprzc0/image/upload/v1728122377/w5zdfmoarep9lb7k8sws.png",
      ],
      colors: ["#2355S", "#3534B"],
      merchandiseType: "shirt",
      variants: [
        {
          size: "S",
          quantity: 10,
          _id: "67010e0a2ad31d4983bf2ac6",
        },
        {
          size: "M",
          quantity: 20,
          _id: "67010e0a2ad31d4983bf2ac7",
        },
        {
          size: "L",
          quantity: 30,
          _id: "67010e0a2ad31d4983bf2ac8",
        },
        {
          size: "XL",
          quantity: 40,
          _id: "67010e0a2ad31d4983bf2ac9",
        },
      ],
    },
    {
      _id: "6701115a2ad31d4983bf2acd",
      name: "DeGod #4167 Shirt",
      description:
        "A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe.",
      price: 20,
      images: [
        "https://res.cloudinary.com/dbuaprzc0/image/upload/v1728123225/ipnscuynf8d4hqp4gyai.png",
      ],
      colors: ["#2355S", "#3534B"],
      merchandiseType: "shirt",
      variants: [
        {
          size: "S",
          quantity: 10,
          _id: "6701115a2ad31d4983bf2ace",
        },
        {
          size: "M",
          quantity: 20,
          _id: "6701115a2ad31d4983bf2acf",
        },
        {
          size: "L",
          quantity: 30,
          _id: "6701115a2ad31d4983bf2ad0",
        },
        {
          size: "XL",
          quantity: 40,
          _id: "6701115a2ad31d4983bf2ad1",
        },
      ],
    },
    {
      _id: "670111cc2ad31d4983bf2ad5",
      name: "DeGod #4167 Shirt",
      description:
        "A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe.",
      price: 20,
      images: [
        "https://res.cloudinary.com/dbuaprzc0/image/upload/v1728123339/j0thxfkmqhriyzx7xnko.png",
      ],
      colors: ["#2355S", "#3534B"],
      merchandiseType: "shirt",
      variants: [
        {
          size: "S",
          quantity: 10,
          _id: "670111cc2ad31d4983bf2ad6",
        },
        {
          size: "M",
          quantity: 20,
          _id: "670111cc2ad31d4983bf2ad7",
        },
        {
          size: "L",
          quantity: 30,
          _id: "670111cc2ad31d4983bf2ad8",
        },
        {
          size: "XL",
          quantity: 40,
          _id: "670111cc2ad31d4983bf2ad9",
        },
      ],
    },
    {
      _id: "670112202ad31d4983bf2adf",
      name: "DeGod #4167 Shirt",
      description:
        "A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe.",
      price: 20,
      images: [
        "https://res.cloudinary.com/dbuaprzc0/image/upload/v1728123423/vxuvj3hlobwafr1ljvbw.png",
      ],
      colors: ["#2355S", "#3534B"],
      merchandiseType: "shirt",
      variants: [
        {
          size: "S",
          quantity: 10,
          _id: "670112202ad31d4983bf2ae0",
        },
        {
          size: "M",
          quantity: 20,
          _id: "670112202ad31d4983bf2ae1",
        },
        {
          size: "L",
          quantity: 30,
          _id: "670112202ad31d4983bf2ae2",
        },
        {
          size: "XL",
          quantity: 40,
          _id: "670112202ad31d4983bf2ae3",
        },
      ],
    },
    {
      _id: "670112502ad31d4983bf2ae7",
      name: "DeGod #4167 Shirt",
      description:
        "A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe.",
      price: 20,
      images: [
        "https://res.cloudinary.com/dbuaprzc0/image/upload/v1728123472/fkuvd1a7dkrq9uvaote4.png",
      ],
      colors: ["#2355S", "#3534B"],
      merchandiseType: "shirt",
      variants: [
        {
          size: "S",
          quantity: 10,
          _id: "670112502ad31d4983bf2ae8",
        },
        {
          size: "M",
          quantity: 20,
          _id: "670112502ad31d4983bf2ae9",
        },
        {
          size: "L",
          quantity: 30,
          _id: "670112502ad31d4983bf2aea",
        },
        {
          size: "XL",
          quantity: 40,
          _id: "670112502ad31d4983bf2aeb",
        },
      ],
    },
    {
      _id: "670112802ad31d4983bf2aef",
      name: "DeGod #4167 Shirt",
      description:
        "A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe.",
      price: 20,
      images: [
        "https://res.cloudinary.com/dbuaprzc0/image/upload/v1728123519/tc5xhg4o5ssefmlwbyhd.png",
      ],
      colors: ["#2355S", "#3534B"],
      merchandiseType: "shirt",
      variants: [
        {
          size: "S",
          quantity: 10,
          _id: "670112802ad31d4983bf2af0",
        },
        {
          size: "M",
          quantity: 20,
          _id: "670112802ad31d4983bf2af1",
        },
        {
          size: "L",
          quantity: 30,
          _id: "670112802ad31d4983bf2af2",
        },
        {
          size: "XL",
          quantity: 40,
          _id: "670112802ad31d4983bf2af3",
        },
      ],
    },
    {
      _id: "670114c684c358cfae5cf52c",
      name: "DeGod #4167 Shirt",
      description:
        "A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe.",
      price: 20,
      images: [
        "https://res.cloudinary.com/dbuaprzc0/image/upload/v1728124101/ix1cf8eojm73leoxqpvb.png",
      ],
      colors: ["#2355S", "#3534B"],
      merchandiseType: "shirt",
      variants: [
        {
          size: "S",
          quantity: 10,
          _id: "670114c684c358cfae5cf52d",
        },
        {
          size: "M",
          quantity: 20,
          _id: "670114c684c358cfae5cf52e",
        },
        {
          size: "L",
          quantity: 30,
          _id: "670114c684c358cfae5cf52f",
        },
        {
          size: "XL",
          quantity: 40,
          _id: "670114c684c358cfae5cf530",
        },
      ],
    },
    {
      _id: "6701157e84c358cfae5cf534",
      name: "DeGod #4167 Shirt",
      description:
        "A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe.",
      price: 20,
      images: [
        "https://res.cloudinary.com/dbuaprzc0/image/upload/v1728124286/o60eim9r2eja2s53qpkj.png",
      ],
      colors: ["#2355S", "#3534B"],
      merchandiseType: "shirt",
      variants: [
        {
          size: "S",
          quantity: 10,
          _id: "6701157e84c358cfae5cf535",
        },
        {
          size: "M",
          quantity: 20,
          _id: "6701157e84c358cfae5cf536",
        },
        {
          size: "L",
          quantity: 30,
          _id: "6701157e84c358cfae5cf537",
        },
        {
          size: "XL",
          quantity: 40,
          _id: "6701157e84c358cfae5cf538",
        },
      ],
    },
  ],
  createdAt: "2024-10-05T09:54:17.947Z",
  updatedAt: "2024-10-05T10:31:26.947Z",
};

export interface ShopState {
  shop: Shop | null;
  currentMerch: Merch | null;
  setShop: (shop: Shop) => void;
  setCurrentMerch: (merch: Merch) => void;
  clearShop: () => void;
}

const useShop = create<ShopState>((set) => ({
  shop: initialShopState,
  currentMerch: null,
  setShop: (shop) => set({ shop }),
  setCurrentMerch: (merch) => set({ currentMerch: merch }),
  clearShop: () => set({ shop: initialShopState, currentMerch: null }),
}));

export default useShop;
