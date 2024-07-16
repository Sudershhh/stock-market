// components/Home.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { ArrowRightIcon, TrendingUpIcon, UserPlusIcon } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const isSignedIn = localStorage.getItem("isSignedIn");
    if (isSignedIn) {
      toast.success("Signed In Successfully!");
      localStorage.removeItem("isSignedIn");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-aeonik">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the Stock Market App
        </motion.h1>
        <motion.p
          className="text-lg mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Track your stock market investments, analyze market trends, and make
          informed financial decisions with ease. Our app provides comprehensive
          tools and insights to help you navigate the stock market effectively.
        </motion.p>
        <div className="space-x-4">
          <Link href="/sign-in">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300">
              <ArrowRightIcon className="w-5 h-5" />
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300">
              <UserPlusIcon className="w-5 h-5" />
              Sign Up
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
