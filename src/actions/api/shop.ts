// import { Shop } from "@/lib/zustand/useShop";
import { DEFAULT_HEADERS, handleResponse } from ".";
import { ApiResponse, Cart, Order, Product } from "./types";

interface CreateShopPayload {
  name: string;
  description: string;
  url: string;
  owner: string;
}

interface Shop extends CreateShopPayload {
  id: string;
}

export async function createShop(
  shopData: CreateShopPayload
): Promise<ApiResponse<Shop>> {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/shop`, {
    method: "POST",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(shopData),
  });
  return handleResponse<Shop>(response);
}
export async function getShopById(id: string): Promise<ApiResponse<Shop>> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/shop/${id}`,
    {
      method: "GET",
      headers: DEFAULT_HEADERS,
    }
  );
  return handleResponse<Shop>(response);
}

export async function getShopByName(name: string): Promise<ApiResponse<Shop>> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/shop/${name}`
  );
  return handleResponse<Shop>(response);
}
// export async function getStoreProducts(
//   storeId: string
// ): Promise<ApiResponse<Product[]>> {
//   const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/store/${storeId}/products`, {
//     method: "GET",
//     headers: DEFAULT_HEADERS,
//   });
//   return handleResponse<Product[]>(response);
// }

export async function getProducts(): Promise<ApiResponse<Product[]>> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/products`,
    {
      method: "GET",
      headers: DEFAULT_HEADERS,
    }
  );
  return handleResponse<Product[]>(response);
}

export async function getProduct(id: string): Promise<ApiResponse<Product>> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/products/${id}`,
    {
      method: "GET",
      headers: DEFAULT_HEADERS,
    }
  );
  return handleResponse<Product>(response);
}

export async function createProduct(
  product: Omit<Product, "id">
): Promise<ApiResponse<Product>> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/products`,
    {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(product),
    }
  );
  return handleResponse<Product>(response);
}

export async function updateProduct(
  id: string,
  product: Partial<Product>
): Promise<ApiResponse<Product>> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/products/${id}`,
    {
      method: "PUT",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(product),
    }
  );
  return handleResponse<Product>(response);
}

export async function deleteProduct(id: string): Promise<ApiResponse<void>> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/products/${id}`,
    {
      method: "DELETE",
      headers: DEFAULT_HEADERS,
    }
  );
  return handleResponse<void>(response);
}

// cart apis;
export async function addToCart(cartData: Cart): Promise<ApiResponse<Cart>> {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart`, {
    method: "POST",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(cartData),
  });
  return handleResponse<Cart>(response);
}

export async function getCart(
  walletAddress: string
): Promise<ApiResponse<Cart>> {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_BASE_URL
    }/cart/find?walletAddress=${walletAddress}`,
    {
      method: "GET",
      headers: DEFAULT_HEADERS,
    }
  );
  return handleResponse<Cart>(response);
}

export async function getStore(id: string): Promise<ApiResponse<unknown>> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/store/${id}`,
    {
      method: "GET",
      headers: DEFAULT_HEADERS,
    }
  );
  return handleResponse<unknown>(response);
}

export async function getStoreProducts(
  id: string
): Promise<ApiResponse<Product[]>> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/store/${id}/products`,
    {
      method: "GET",
      headers: DEFAULT_HEADERS,
    }
  );
  return handleResponse<Product[]>(response);
}

export async function createOrder(
  orderData: Order
): Promise<ApiResponse<Order>> {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/order`, {
    method: "POST",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(orderData),
  });
  return handleResponse<Order>(response);
}
