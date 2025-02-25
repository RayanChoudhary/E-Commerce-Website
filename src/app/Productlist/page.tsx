// import React, { useEffect, useState } from 'react';
import ProductList from "app/Components/ProductList/ProductList";
import { getProducts } from "app/Components/useProduct/useProducts";

export default async function ProductView() {
  const productsData = await getProducts(); // Fetch products before rendering
  return (
    <div className="bg-gray-100 min-h-screen p-6">
    <ProductList products={productsData} /> {/* Pass fetched products */}
    </div>
  );
}
