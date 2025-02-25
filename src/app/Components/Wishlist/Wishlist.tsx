import React, { useState } from 'react';

type WishlistProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistProduct[]>([]);

  const addToWishlist = (product: WishlistProduct) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="wishlist p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mb-4 rounded-lg" />
              <p className="font-semibold text-lg mb-2">{item.name}</p>
              <p className="text-gray-500 mb-4">${item.price}</p>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
