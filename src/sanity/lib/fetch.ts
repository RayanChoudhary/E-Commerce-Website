import { createClient } from "next-sanity";
import { Adapter, AdapterUser } from "next-auth/adapters";
import { fourProduct, allProductsQuery, categoriesQuery, userByIdQuery, userByEmailQuery, userByAccountQuery, SearchBarquery} from "sanity/lib/queries";

const client = createClient({
    projectId: "04j6d47x", // ✅ Ensure this is correct
    dataset: "production",
    useCdn: false, // ❌ Disable CDN for fresh data
    apiVersion: "2023-10-10",
  });
  
  export async function fetchFour() {
    try {
      return await client.fetch(fourProduct);
    } catch (error) {
      console.error("Sanity Fetch Error:", error);
      throw error;
    }
  }
  
  export async function fetchAllProducts() {
    try {
      return await client.fetch(allProductsQuery);
    } catch (error) {
      console.error("Sanity Fetch Error:", error);
      throw error;
    }
  }

  export async function categoryQuery() {
    try {
      return await client.fetch(categoriesQuery);
    } catch (error) {
      console.error("Sanity Fetch Error:", error);
      throw error;
    }
  }

  // Function to fetch products based on a search term
export const searchProducts = async (searchTerm: string) => {
  try {
    const results = await client.fetch(SearchBarquery, {
      searchTerm: `${searchTerm}*`, // Add wildcard for partial matches
    });
    return results;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};


  // Fetch user by ID
export async function fetchUserById(id: string) {
  try {
    return await client.fetch(userByIdQuery, { id });
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
}

// Fetch user by email
export async function fetchUserByEmail(email: string) {
  try {
    return await client.fetch(userByEmailQuery, { email });
  } catch (error) {
    console.error("Error fetching user by Email:", error);
    throw error;
  }
}

// Fetch user by account
export async function fetchUserByAccount(provider: string, providerAccountId: string) {
  try {
    return await client.fetch(userByAccountQuery, { provider, providerAccountId });
  } catch (error) {
    console.error("Error fetching user by Account:", error);
    throw error;
  }
}