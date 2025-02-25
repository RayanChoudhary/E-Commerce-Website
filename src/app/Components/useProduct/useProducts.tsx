

import { fetchAllProducts } from "sanity/lib/fetch";
import { Product } from "app/models/models";

// Fetch products directly (can be used in Server Components)
export async function getProducts(): Promise<Product[]> {
  try {
    return await fetchAllProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array in case of error
  }
}
