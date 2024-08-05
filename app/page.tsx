// components/Home.tsx
"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      <Header />
      <main className="dark flex-grow flex flex-col mt-32 text-center">
        <section className="w-full flex flex-col justify-start">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            THE PATH TO
          </motion.h1>
          <motion.h1
            className="text-6xl font-bold mt-4 text-secondary-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            FINANCIAL EXCELLENCE
          </motion.h1>

          <motion.p
            className="text-md my-4 text-center text-gray-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Real-time data, Advanced analytics, and Personalized insights.
          </motion.p>
          <motion.p
            className="text-md mb-8 text-center text-gray-400"
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
