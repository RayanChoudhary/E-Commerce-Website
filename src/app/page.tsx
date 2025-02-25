import React from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CategoryList from "app/Components/Category/Category";
import Slider from "app/Components/Slider/Crousel"
import { fetchFour} from "sanity/lib/fetch";
import { Product } from "app/models/models";

export default async function HomeView() {
    const productsData: Product[] = await fetchFour()

  return (
    <section className="w-full relative bg-gray-100">
      <Slider/>

      {/* Category Section */}
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
         Categories
        </h2>
        <CategoryList products={productsData} />
      </div>

      {/* Featured Section */}
      <div className="max-w-[1440px] mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Banner Image */}
        <div className="w-full lg:w-1/2">
          <img src="/banner2.png" alt="Handcrafted Furniture" className="rounded-lg shadow-lg w-full max-w-[350px]" />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Handcrafted Furniture for Your Dream Home
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            We offer stylish, durable, and affordable furniture to complement your home décor.
          </p>
          <Link href="/about">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
      
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  
  );
};
