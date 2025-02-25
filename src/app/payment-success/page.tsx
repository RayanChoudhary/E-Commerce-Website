"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const PaymentSuccess = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get("session_id");

      if (!sessionId) return;

      try {
        const res = await fetch(`http://localhost:3000/api/get-session?session_id=${sessionId}`);
        const data = await res.json();
        setSession(data);
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading payment details...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-lg font-semibold text-red-500">Session not found!</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-8 max-w-lg mx-auto mt-16 bg-white shadow-2xl rounded-2xl text-center border-t-4 border-green-500"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-center"
      >
        <CheckCircleIcon className="h-16 w-16 text-green-500" />
      </motion.div>
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="text-3xl font-bold text-green-600 mt-4"
      >
        Payment Successful! 🎉
      </motion.h1>
      <p className="mt-4 text-gray-700">
        Thank you for your purchase, <span className="font-semibold">{session.customer_details.name}</span>!
      </p>
      <p className="mt-2 text-sm text-gray-500">Order ID: <span className="font-mono">{session.id}</span></p>
      <p className="mt-2 text-lg font-semibold text-gray-700">
        Total Paid: <span className="text-green-600">PKR {(session.amount_total / 100).toFixed(2)}</span>
      </p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
        className="mt-6"
      >
        <a
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Return to Home
        </a>
      </motion.div>
    </motion.div>
  );
};

export default PaymentSuccess;