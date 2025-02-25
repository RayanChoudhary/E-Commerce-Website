"use client";

import CheckoutPage from "app/Components/CheckoutPage/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation"; // Use useSearchParams instead of useRouter

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function Payment() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("sessionId"); // Access query params using get()

  if (!sessionId) {
    return <div>Session ID is missing!</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-slate-400 to-zinc-900">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Payment Page</h1>
        <h2 className="text-2xl">Proceed with your payment</h2>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutPage sessionId={sessionId} />
      </Elements>
    </main>
  );
}
