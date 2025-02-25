import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "sanity/lib/client"; // Ensure you've configured your Sanity client
import { v4 as uuidv4 } from "uuid";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { billingInfo, cartItems, totalPrice } = req.body;

    if (!billingInfo || !cartItems || !totalPrice) {
      return res.status(400).json({ message: "Incomplete order data." });
    }

    try {
      const orderId = uuidv4(); // Generate a unique order ID

      // Sanity document structure for the "order" schema
      const newOrder = {
        _type: "order",
        _id: orderId, // Optional: You can let Sanity auto-generate `_id` if you want
        firstName: billingInfo.name.split(" ")[0] || "",
        lastName: billingInfo.name.split(" ")[1] || "",
        address: billingInfo.address,
        city: billingInfo.city,
        phone: billingInfo.phone,
        cartItems: cartItems.map((item: any) => ({
          _type: "reference",
          _ref: item._id,
        })),
        total: totalPrice,
        status: "pending", // Default status
      };

      // Save the order in Sanity
      await sanityClient.create(newOrder);

      res.status(200).json({ message: "Order saved successfully!" });
    } catch (error) {
      console.error("Error saving order:", error);
      res.status(500).json({ message: "Failed to save order." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
