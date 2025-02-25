"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; // Importing menu icon

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close sidebar
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button onClick={() => setIsOpen(true)} className="p-2 lg:hidden fixed top-4 left-4 z-50">
        <Menu size={32} className="text-gray-800" />
      </button>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeSidebar}>
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
          >
            {/* Close Button */}
            <button onClick={closeSidebar} className="self-end text-gray-600 text-xl">
              ✖
            </button>

            {/* Navigation Links */}
            <nav className="mt-6 space-y-4">
              <Link href="/" className="block text-lg text-gray-700 hover:text-blue-500" onClick={closeSidebar}>
                Home
              </Link>
              <Link href="/Productlist" className="block text-lg text-gray-700 hover:text-blue-500" onClick={closeSidebar}>
                Product List
              </Link>
              <Link href="/about" className="block text-lg text-gray-700 hover:text-blue-500" onClick={closeSidebar}>
                About Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
