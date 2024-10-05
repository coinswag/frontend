export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface Order {
  id: string;
  userId: string;
  products: { productId: string; quantity: number }[];
  totalAmount: number;
  status: "pending" | "completed" | "cancelled";
}

export interface User {
  id: string;
  username: string;
  email: string;
}

// cart

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
}

export interface Cart {
  walletAddress: string;
  store: string;
  items: CartItem[];
}

export interface Customer {
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface ShippingInfo {
  method: string;
  trackingNumber: string;
  address: ShippingAddress;
}

export interface PriceBreakdown {
  subtotal: number;
  tax: number;
  shippingCost: number;
  discount: number;
  total: number;
}

export interface Order {
  storeId: string;
  totalAmount: number;
  tokenId: string;
  txhash: string;
  customer: Customer;
  shippingInfo: ShippingInfo;
  priceBreakdown: PriceBreakdown;
  cart: string;
  store: string;
}
