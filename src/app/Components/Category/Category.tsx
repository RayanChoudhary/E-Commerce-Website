"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "app/Components/CartContext/CartContext";
import { Product } from "app/models/models"; // Import correct Product type
import Link from "next/link";
interface CategoryProps {
  products: Product[];
}
const CategoryList: React.FC<CategoryProps> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="w-full">
      {/* 🔹 Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Clicking image or name takes you to product details */}
            <Link href={`/products/${item._id}`}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
              />
            </Link>
            <div className="p-4">
              <Link href={`/products/${item._id}`}>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-500 cursor-pointer">
                  {item.name}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-bold text-lg">Rs. {item.price}</span>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 If no products match the filter */}
      {products.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No products found.</p>
      )}

      {/* 🔹 "See All Products" Button */}
      <div className="text-center mt-6">
        <Link href="/Productlist">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
            See All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
