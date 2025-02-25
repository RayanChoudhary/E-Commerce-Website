
import React, { useState } from 'react';

const Subscription: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const toggleSubscription = () => {
    setIsSubscribed((prev) => !prev);
  };

  return (
    <div className="subscription p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Subscription</h2>
      <p className="text-lg mb-4 text-center">
        {isSubscribed ? 'You are subscribed to our newsletter' : 'You are not subscribed'}
      </p>
      <div className="flex justify-center">
        <button
          onClick={toggleSubscription}
          className={`px-6 py-2 rounded-lg text-white font-semibold transition duration-200 ${
            isSubscribed ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>
      </div>
    </div>
  );
};

export default Subscription;
