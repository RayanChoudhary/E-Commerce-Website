// export function FAQ({ faqs }: { faqs: { question: string; answer: string }[] }) {
//     return (
//       <div className="p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
//         {faqs.map((faq, index) => (
//           <div key={index} className="border-b py-2">
//             <p><strong>{faq.question}</strong></p>
//             <p>{faq.answer}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
import React, { useState, useEffect } from "react";
import axios from "axios";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get("https://api.hackathon.com/faq");
        setFaqs(response.data);
      } catch (err) {
        setError("Failed to load FAQs");
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading FAQs...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>

      {faqs.length === 0 ? (
        <p className="text-gray-600">No FAQs available</p>
      ) : (
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b pb-4">
              <button
                className="w-full text-left font-medium text-lg text-blue-700 hover:text-blue-900 focus:outline-none flex justify-between"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && <p className="text-gray-700 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQ;
