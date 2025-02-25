import React from 'react';

const SocialShare: React.FC = () => {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out this awesome product!";
    
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    }
    // Add other platforms as necessary
  };

  return (
    <div className="social-share text-center p-4">
      <h2 className="text-xl font-semibold mb-4">Share this product</h2>
      <div className="space-x-4">
        <button
          onClick={() => handleShare('facebook')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Share on Facebook
        </button>
        <button
          onClick={() => handleShare('twitter')}
          className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Share on Twitter
        </button>
        {/* Add other buttons for different social media platforms */}
      </div>
    </div>
  );
};

export default SocialShare;
