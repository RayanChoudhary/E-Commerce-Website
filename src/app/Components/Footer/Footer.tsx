
import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Menu Section
          <div>
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/new-arrivals">New Arrivals</Link></li>
              <li><Link href="/best-sellers">Best Sellers</Link></li>
              <li><Link href="/recently-viewed">Recently Viewed</Link></li>
              <li><Link href="/popular">Popular This Week</Link></li>
              <li><Link href="/products">All Products</Link></li>
            </ul>
          </div> */}


          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy-policy">Privacy & Return Policy</Link></li>
            </ul>
          </div>

          {/* Mailing List Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Join Our Mailing List</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="you@example.com"
                className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-4 lg:space-y-0">
          {/* Copyright */}
          <p className="text-sm">© {new Date().getFullYear()} Avion LTD. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Rayansanghera" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-rayan-063815218" target="_blank" rel="noopener noreferrer" aria-label="Linkedinn" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/ryyanchouudhary" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
