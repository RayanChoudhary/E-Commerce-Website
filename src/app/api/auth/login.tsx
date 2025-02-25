"use client";

import { signIn } from "next-auth/react";

export default function Login() {
    return (
      <div>
        <h1>Sign In</h1>
        <p>Use your Google account to log in and continue.</p>
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    );
  }
  