"use client";

import React, { useState } from "react";
import { useCart } from "app/Components/CartContext/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { BeatLoader } from "react-spinners";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleCheckout = async () => {
    if (Object.values(billingInfo).some((field) => !field)) {
      alert("Please fill in all billing information fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems, billingInfo, total: totalPrice }),
      });

      const session = await response.json();
      const stripe = await stripePromise;
      setLoading(false);
      await stripe?.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      setLoading(false);
      console.error("Checkout error:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
      {/* Cart Items Section */}
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-lg text-center text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between border-b pb-4 hover:bg-gray-100 transition p-4 rounded-lg shadow-sm">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-grow ml-4">
                  <p className="text-lg font-semibold text-gray-700">{item.name}</p>
                  <p className="text-sm text-gray-500">Rs. {item.price}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-l hover:bg-gray-300">-</button>
                    <span className="px-4 py-1 bg-gray-100 text-gray-900">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-r hover:bg-gray-300">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item._id)} className="ml-4 text-red-500 hover:text-red-700">Remove</button>
              </div>
            ))}
            <div className="mt-4 text-center">
              <p className="text-xl font-semibold text-gray-800">Total: Rs. {totalPrice}</p>
            </div>
          </div>
        )}
      </div>

      {/* Billing Information Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Billing Information</h2>
        <form className="space-y-4">
          {["firstName", "lastName", "address", "email", "city", "zip", "phone"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
              value={(billingInfo as any)[field]}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          ))}
        </form>

        {cartItems.length > 0 && (
          <div className="mt-6">
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white text-lg py-3 rounded-md hover:bg-blue-700 transition-all ease-in-out duration-200 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? <BeatLoader color="#fff" size={8} /> : "Proceed to Checkout"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
