"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "app/Components/context/UserContext";
import Link from "next/link";
import { motion } from "framer-motion"; // For animation

const UserProfile = () => {
  const router = useRouter();
  const { users, logout } = useUser();

  if (!users) {
    return <p className="text-center py-4">Redirecting to login...</p>;
  }

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen flex items-center justify-center">
      <motion.div
        className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="text-center">
          <motion.h1
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome, {users.name}!
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <strong>Email:</strong> {users.email}
          </motion.p>

          <motion.button
            onClick={() => logout(users.email)}
            className="mt-4 px-6 py-3 bg-red-600 text-white font-medium rounded-full shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Logout
          </motion.button>
        </div>

        <div className="text-center mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link
              href="/Productlist"
              className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-200 underline"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
