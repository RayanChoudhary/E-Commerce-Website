"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";
import ShoppingCartPopup from "../cartpopup/ShoppingCartPopup";
import { useUser } from "app/Components/context/UserContext";
import SearchBar from "../Searchbar/Searchbar";
import { searchProducts } from "sanity/lib/fetch";
import { Product } from "app/models/models";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("/login");
  const { users } = useUser();
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (users) {
      setUrl("/profile");
    }
  }, [users]);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const results = await searchProducts(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="max-w-[1440px] mx-auto bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center px-6 lg:px-10 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-500 to-gray-800 text-white">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-300">
          <Menu size={28} />
        </button>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Avion Store</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="flex items-center gap-6">
          <ShoppingCartPopup />
          <Link href={url} className="text-white hover:text-gray-300">
            <User size={24} />
          </Link>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg z-50 text-white transform transition-transform ease-in-out duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 flex flex-col gap-6 text-lg">
          <button onClick={() => setIsOpen(false)} className="self-end text-white hover:text-red-500">
            <X size={28} />
          </button>
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/Productlist" className="hover:underline">Product List</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-40 z-40" onClick={() => setIsOpen(false)}></div>}

      {loading && <p className="text-center py-2 text-gray-500">Loading search results...</p>}

      {searchResults.length > 0 && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
          <ul>
            {searchResults.map((product) => (
              <li key={product._id || Math.random()} className="py-2 border-b last:border-none">
                <Link href={`/products/${product._id}`} className="hover:underline text-blue-600">
                  {product.name || "Unnamed Product"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
