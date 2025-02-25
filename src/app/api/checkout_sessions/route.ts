import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// ✅ Initialize Stripe WITHOUT apiVersion
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { cartItems } = await req.json();

    const lineItems = cartItems.map((item: { name: string; quantity: number; price: number }) => ({
      price_data: {
        currency: "pkr",
        product_data: { name: item.name },
        unit_amount: item.price * 100, // Stripe requires amount in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
      
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (error) {
    console.error("Checkout Session Error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
