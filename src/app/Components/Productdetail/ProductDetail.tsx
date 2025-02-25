"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "app/Components/CartContext/CartContext";
import { fetchAllProducts } from "sanity/lib/fetch";
import { allProductsQuery } from "sanity/lib/queries";
import { CartItem, Product } from "app/models/models";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const params = useParams();
  const id = params?.id as string; // Extract ID

  const { cartItems, addToCart, removeFromCart } = useCart();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [onCart, setOnCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        const data: Product[] = await fetchAllProducts();
        const filteredProduct = data.find((item) => item._id === id);
        setProduct(filteredProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      const isAdded = cartItems.some((item) => item._id === product._id);
      setOnCart(isAdded);
    }
  }, [cartItems, product]);

  if (loading) 
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <p className="ml-4 text-lg font-semibold text-gray-700">Loading product details...</p>
      </div>
    );

  if (!product) 
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg font-semibold text-red-500">Product not found</p>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto p-6 border-l-orange-200 shadow-xl rounded-lg mt-10"
    >
      <motion.img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-96 object-cover rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <h1 className="text-3xl font-bold mt-4 text-gray-900">{product.name}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-gray-700 mt-2">Category: {product.category.name}</p>
      <p className="text-gray-700 mt-2">Tags: {product.tags.join(", ")}</p>
      <p className="text-gray-700 mt-2">Width: {product.dimensions.width}</p>
      <p className="text-gray-700 mt-2">Height: {product.dimensions.height}</p>
      <p className="text-gray-700 mt-2">Depth: {product.dimensions.depth}</p>
      <p className="text-gray-700 mt-2">Type: {product.dimensions._type}</p>
      <p className="text-gray-700 mt-2">Features:</p>
      <ul className="list-disc pl-6 text-gray-700">
        {product.features.map((feature, index) => (
          <li key={index} className="mt-1">✅ {feature}</li>
        ))}
      </ul>
      <p className="text-green-600 font-bold text-xl mt-4">Rs. {product.price}</p>

      {onCart ? (
        <motion.button
          onClick={() => removeFromCart(product._id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 shadow-lg transition-transform"
        >
          Remove From Cart
        </motion.button>
      ) : (
        <motion.button
          onClick={() => addToCart({ ...product, quantity: 1 })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 shadow-lg transition-transform"
        >
          Add To Cart
        </motion.button>
      )}
    </motion.div>
  );
};

export default ProductDetail;