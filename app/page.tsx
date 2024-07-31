// components/Home.tsx
"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen flex flex-col text-white font-aeonik">
      <main className="flex-grow flex flex-col items-center justify-center text-center px-8">
        <section className="w-full flex flex-col justify-start align-middle ">
          <motion.h1
            className="text-6xl font-bold mb-4 text-emerald-600 text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Master Your Investments with Confidence
          </motion.h1>

          <motion.p
            className="text-3xl my-4 text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Real-time data, Advanced analytics, and Personalized insights.
          </motion.p>
          <motion.p
            className="text-3xl mb-8 text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Track your investments, identify market trends, and optimize your
            financial portfolio.
          </motion.p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
