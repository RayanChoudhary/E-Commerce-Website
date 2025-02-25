"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "app/Components/CartContext/CartContext";
import { motion } from "framer-motion";

const ShoppingCartPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <div className="relative">
      {/* Shopping Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center text-gray-700 hover:text-blue-600 transition-transform transform hover:scale-110"
      >
        <ShoppingCart size={30} />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full px-2 shadow-md animate-bounce">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Shopping Cart Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute right-0 mt-3 w-96 bg-white shadow-2xl rounded-xl p-5 z-50 border border-gray-300"
        >
          <h3 className="text-xl font-semibold mb-3 text-black border-b pb-2">Shopping Cart</h3>

          {/* If Cart is Empty */}
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-base text-center py-4">Your cart is empty.</p>
          ) : (
            <ul className="max-h-80 overflow-y-auto space-y-3">
              {cartItems.map((item) => (
                <li key={item._id} className="flex items-center border-b pb-3">
                  {/* Clicking Image or Name Navigates to Product Detail Page */}
                  <Link href={`/products/${item._id}`} className="flex items-center w-full">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 rounded-md object-cover cursor-pointer shadow-md hover:scale-105 transition-transform"
                    />
                    <div className="ml-4 flex-1">
                      <p className="text-base font-medium hover:text-blue-500 cursor-pointer text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-gray-700 text-sm">Rs. {item.price}</p>
                      <p className="text-gray-500 text-xs line-clamp-2 italic">{item.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Checkout Button */}
          {cartItems.length > 0 && (
            <Link href="/cart">
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full bg-blue-600 text-white text-lg py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
              >
                View Cart & Checkout
              </motion.button>
            </Link>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ShoppingCartPopup;