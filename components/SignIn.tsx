// components/SignIn.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuthStore } from "../lib/authStore";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { signIn, loading, error } = useAuthStore();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const signedInPromise = await signIn(email, password);

      router.push("/");
      localStorage.setItem("isSignedIn", "true");
    } catch (errorMessage) {
      toast.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSignIn}
      >
        <h1 className="text-4xl font-bold mb-6 text-green-500">Sign In</h1>
        <div className="mb-4">
          <label
            className="block text-gray-400 text-sm font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-400 text-sm font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
          <Link
            href="/sign-up"
            className="inline-block align-baseline font-medium text-sm text-green-500 hover:text-green-700 transition duration-300"
          >
            Don't have an account? Sign Up
          </Link>
        </div>
      </motion.form>
    </div>
  );
};

export default SignIn;
