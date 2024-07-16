// components/SignUp.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";
import { motion } from "framer-motion";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      router.push("/sign-in");

      toast.success(
        "Signed up successfully! Please check your email for the confirmation link."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* <ToastContainer /> */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSignUp}
      >
        <h1 className="text-4xl font-bold mb-6 text-green-500">Sign Up</h1>
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
          >
            Sign Up
          </button>
          <Link
            href="/sign-in"
            className="inline-block align-baseline font-medium text-sm text-green-500 hover:text-green-700 transition duration-300"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </motion.form>
    </div>
  );
};

export default SignUp;
