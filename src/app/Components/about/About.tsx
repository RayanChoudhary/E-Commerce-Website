// pages/about.tsx

import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion"; // For animation

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Your E-Commerce Store</title>
        <meta name="description" content="Learn more about our e-commerce platform and what we do." />
      </Head>

      <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-16">
        <div className="text-center text-white">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-lg font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We're more than just a store – we’re your online shopping partner!
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Mission Section */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-semibold text-blue-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Our Mission
            </motion.h3>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Our mission is to make online shopping accessible, enjoyable, and personalized for everyone. With a wide selection of
              products, a seamless user experience, and excellent customer support, we aim to be the go-to platform for all your
              shopping needs.
            </motion.p>
          </div>

          {/* Story Section */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-semibold text-blue-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Our Story
            </motion.h3>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Founded in 2023 by a team of passionate e-commerce professionals, our platform was created to provide a revolutionary
              shopping experience. We believe that technology can create better ways for people to shop, discover new products, and
              connect with brands they love.
            </motion.p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <motion.h3
            className="text-2xl font-semibold text-center text-blue-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Why Choose Us?
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="p-4 bg-white shadow-lg rounded-lg hover:bg-blue-100 transition-colors"
            >
              <i className="bi bi-collection text-4xl text-blue-500"></i>
              <h5 className="mt-4 text-xl font-medium text-blue-800">Wide Selection</h5>
              <p className="text-gray-600">Find everything you need in one place.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="p-4 bg-white shadow-lg rounded-lg hover:bg-blue-100 transition-colors"
            >
              <i className="bi bi-brightness-high text-4xl text-blue-500"></i>
              <h5 className="mt-4 text-xl font-medium text-blue-800">AI Recommendations</h5>
              <p className="text-gray-600">Personalized shopping experience based on your preferences.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="p-4 bg-white shadow-lg rounded-lg hover:bg-blue-100 transition-colors"
            >
              <i className="bi bi-truck text-4xl text-blue-500"></i>
              <h5 className="mt-4 text-xl font-medium text-blue-800">Fast Shipping</h5>
              <p className="text-gray-600">Secure and reliable delivery right to your doorstep.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="p-4 bg-white shadow-lg rounded-lg hover:bg-blue-100 transition-colors"
            >
              <i className="bi bi-headset text-4xl text-blue-500"></i>
              <h5 className="mt-4 text-xl font-medium text-blue-800">Customer Support</h5>
              <p className="text-gray-600">Our support team is always here to help.</p>
            </motion.div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="/Productlist"
              className="px-8 py-3 text-white font-semibold text-lg bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Shopping Now
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
