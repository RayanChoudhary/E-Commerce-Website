"use client";

import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      // Simulate sending data (Replace with API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-6">
        Have a question? Reach out to us, and we'll be happy to help!
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Status Message */}
      {status && (
        <p className="mt-4 text-center font-semibold text-gray-700">{status}</p>
      )}

      {/* Contact Details */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Our Store</h3>
        <p className="text-gray-600">📍 Gulshan-e-Iqbal, Karachi, Pakistan</p>
        <p className="text-gray-600">📞 +92-3013696311</p>
        <p className="text-gray-600">📧 ryyanchoudhary9@gmail.com</p>
      </div>

        <div className="mt-6">
            <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.079598676155!2d67.06480427537494!3d24.846654946068284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9686acb70f%3A0x70c5c1e7eaf6a06d!2sBahadurabad%2C%20PECHS%20Trade%20Centre%20PECHS%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075400%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707249503486!5m2!1sen!2s"
            width="100%"
            height="250"
            allowFullScreen
            loading="lazy"
            className="rounded-lg border"
            >   
            </iframe>
        </div>
    </div>
  );
};

export default ContactUs;
