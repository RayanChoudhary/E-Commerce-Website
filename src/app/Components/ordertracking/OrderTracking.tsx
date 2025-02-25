// export function OrderTracking({ orders }: { orders: { _id: string; status: string }[] }) {
//     return (
//       <div className="p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-xl font-bold mb-4">Order Tracking</h2>
//         {orders.map((order) => (
//           <div key={order._id} className="border-b py-2">
//             <p><strong>Order ID:</strong> {order._id}</p>
//             <p><strong>Status:</strong> {order.status}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }


import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Order = {
  id: number;
  status: string;
  estimatedDelivery: string;
};

const OrderTracking: React.FC = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const orderId = 123; // Replace with dynamic order ID based on user context

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const response = await axios.get(`https://api.hackathon.com/orders/${orderId}`);
        setOrder(response.data);
      } catch (err) {
        setError('Failed to track order');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderStatus();
  }, [orderId]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!order) {
    return <div className="text-center text-gray-500">Order not found</div>;
  }

  return (
    <div className="order-tracking max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Order Status</h2>
      <div className="mb-4">
        <p className="text-gray-600">Order ID: <span className="font-semibold">{order.id}</span></p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">Status: <span className={`font-semibold ${order.status === 'Delivered' ? 'text-green-500' : 'text-yellow-500'}`}>{order.status}</span></p>
      </div>
      <div>
        <p className="text-gray-600">Estimated Delivery: <span className="font-semibold">{order.estimatedDelivery}</span></p>
      </div>
    </div>
  );
};

export default OrderTracking;
