"use client"
import React from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider: React.FC = () => {
    const carouselItems = [
      {
        imgUrl:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Modern Furniture for Contemporary Living",
      },
      {
        imgUrl:
          "https://plus.unsplash.com/premium_photo-1683134681760-531bbc8eddb8?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Comfort & Style in Every Piece",
      },
      {
        imgUrl:
          "https://plus.unsplash.com/premium_photo-1683141537564-a87e06beb330?q=80&w=1722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Luxury Meets Functionality",
      },
    ];
  
    return (
      <section className="w-full relative bg-gray-100">
        {/* Banner Carousel */}
         <div className="max-w-[1440px] mx-auto px-6 py-6">
          <Carousel
            showArrows
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
            renderArrowPrev={(clickHandler, hasPrev, label) => (
              <button
                onClick={clickHandler}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2"
              >
                &#8249;
              </button>
            )}
            renderArrowNext={(clickHandler, hasNext, label) => (
              <button
                onClick={clickHandler}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2"
              >
                &#8250;
              </button>
            )}
          >
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="h-[450px] bg-cover bg-center flex flex-col items-center justify-center p-6"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              >
                {/* Text Container below the image */}
                 <div className="text-white text-lg sm:text-xl md:text-2xl font-bold bg-black/50 p-4 rounded-lg w-3/4 sm:w-1/2 md:w-1/3 mt-6 text-center">
                  <h2>{item.title}</h2>
                  <Link href="/Productlist">
                    <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div> 
          </section>
    )
}

export default Slider