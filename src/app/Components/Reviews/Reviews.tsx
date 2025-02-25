import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Review = {
  id: number;
  user: string;
  rating: number;
  comment: string;
};

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const productId = 123; // Replace with dynamic product ID

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://api.hackathon.com/products/${productId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading reviews...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="reviews p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews yet.</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="review-card bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-800">{review.user}</span>
                <span className="ml-2 text-yellow-500">{'★'.repeat(review.rating)}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
