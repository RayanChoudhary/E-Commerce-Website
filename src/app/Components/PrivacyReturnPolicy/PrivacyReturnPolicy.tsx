// pages/privacy-return-policy.tsx

import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion"; // For animation

const PrivacyReturnPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy & Return Policy | Your E-Commerce Store</title>
        <meta
          name="description"
          content="Learn about our privacy policy and return policy to understand how we protect your data and what to do in case of returns."
        />
      </Head>

      <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-16">
        <div className="text-center text-white">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Privacy & Return Policy
          </motion.h1>
          <motion.p
            className="mt-4 text-lg font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Your privacy and shopping experience matter to us. Here’s what you need to know.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {/* Privacy Policy Section */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-semibold text-blue-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Privacy Policy
          </motion.h3>
          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            At [ Our Avion E-Commerce Store], we take your privacy seriously. This Privacy Policy outlines the personal information
            we collect, how we use it, and the measures we take to protect it.
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <li>We collect personal information to process your orders and improve your shopping experience.</li>
            <li>Your information is stored securely and will not be shared with third parties without your consent.</li>
            <li>We use encryption technology to protect sensitive data during transactions.</li>
            <li>You have the right to access, modify, or delete your personal data at any time.</li>
          </motion.ul>
        </div>

        {/* Return Policy Section */}
        <div>
          <motion.h3
            className="text-2xl font-semibold text-blue-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Return Policy
          </motion.h3>
          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order,
            we offer a hassle-free return process.
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <li>You can return items within 30 days of receiving your order.</li>
            <li>Items must be in unused, original condition with tags attached.</li>
            <li>Refunds will be processed once the returned item is received and inspected.</li>
            <li>For exchanges, please contact our customer support team for assistance.</li>
          </motion.ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a
            href="/Productlist"
            className="inline-block px-8 py-3 text-white font-semibold text-lg bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Shopping Now
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyReturnPolicy;
