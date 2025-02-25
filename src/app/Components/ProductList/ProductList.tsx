"use client"; // Ensure it runs on the client side
import React, { useState } from "react";
import { Product } from "app/models/models";
import { useCart } from "app/Components/CartContext/CartContext";
import { useUser } from "app/Components/context/UserContext"; // Import UserContext for authentication
import FilterPanel from "app/Components/Filtepanel/Filterpanel";
import Link from "next/link";
import { useRouter } from "next/navigation"; // For redirection

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { addToCart } = useCart();
  const { users } = useUser(); // Access the user state
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const router = useRouter();

  // 🔹 Handle filtering by category
  const handleFilter = (category: string | null) => {
    if (category) {
      setFilteredProducts(products.filter((product) => product.category?.name === category));
    } else {
      setFilteredProducts(products); // Show all if no category is selected
    }
  };

  // 🔹 Handle adding to cart with login enforcement
  const handleAddToCart = (item: Product) => {
    if (!users) {
      // Redirect to login if user is not authenticated
      router.push("/login");
      return;
    }
    addToCart(item); // Add to cart if authenticated
  };

  return (
    <div className="w-full p-6 bg-gray-100 min-h-screen">
      {/* 🔹 Filter Panel to select category */}
      <FilterPanel onFilter={handleFilter} />

      {/* 🔹 Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredProducts.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            {/* Clicking image or name takes you to product details */}
            <Link href={`/products/${item._id}`}>
              <img
                src={item.imageUrl} // ✅ Ensure imageUrl is correct
                alt={item.name}
                className="w-full h-56 object-cover rounded-t-xl cursor-pointer"
              />
            </Link>
            <div className="p-5">
              <Link href={`/products/${item._id}`}>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 hover:text-blue-500 cursor-pointer">
                  {item.name}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-bold text-lg">Rs. {item.price}</span>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition-transform transform hover:scale-105"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 If no products match the filter */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8 text-lg font-medium">No products found for this category.</p>
      )}
    </div>
  );
};

export default ProductList;