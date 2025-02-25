import React, { useState } from "react";
import axios from "axios";

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      setErrorMessage("Feedback cannot be empty.");
      setSuccessMessage(null);
      return;
    }

    try {
      await axios.post("https://api.hackathon.com/feedback", { feedback });
      setSuccessMessage("Thank you for your feedback!");
      setErrorMessage(null);
      setFeedback("");
    } catch (error) {
      setErrorMessage("Failed to submit feedback. Please try again.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submit Feedback</h2>

      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Your feedback..."
        aria-label="Feedback"
      />

      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {successMessage && <p className="mt-3 text-green-600">{successMessage}</p>}
      {errorMessage && <p className="mt-3 text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default Feedback;
