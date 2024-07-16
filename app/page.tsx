// components/Home.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  useEffect(() => {
    const isSignedIn = localStorage.getItem("isSignedIn");
    if (isSignedIn) {
      console.log(isSignedIn);
      toast.success("Signed In Successfully!");
      localStorage.removeItem("isSignedIn");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-8">
          Welcome to the Stock Market App
        </h1>
        <div className="space-x-4">
          <Link href="/sign-in">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300">
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300">
              Sign Up
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
