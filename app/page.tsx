"use client";

import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const isSignedIn = localStorage.getItem("isSignedIn");
    if (isSignedIn) {
      toast.success("Signed In Successfully!");
      localStorage.removeItem("isSignedIn");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-white font-aeonik">
      <Header />
      <main className="dark flex-grow flex flex-col mt-32 text-center">
        <section className="w-full flex flex-col justify-start">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            THE PATH TO
          </motion.h1>
          <motion.h1
            className="text-6xl font-bold mt-4 text-secondary-600"
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          >
            FINANCIAL EXCELLENCE
          </motion.h1>

          <motion.p
            className="text-md my-4 text-center text-gray-400"
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
          >
            Real-time data, Advanced analytics, and Personalized insights.
          </motion.p>
          <motion.p
            className="text-md mb-8 text-center text-gray-400"
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
          >
            Track your investments, identify market trends, and optimize your
            financial portfolio.
          </motion.p>
          <motion.div
            className="flex space-x-4 self-center"
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
          >
            <Button color="secondary" size="md">
              Get Started
            </Button>
            <Button
              size="md"
              className="bg-black hover:bg-zinc-800 relative overflow-hidden"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Learn More
              </span>
              <ChevronRight className="text-white" />
            </Button>
          </motion.div>
        </section>

        <motion.section className="w-full min-h-screen flex justify-between my-20">
          <motion.div
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col w-2/5  items-center justify-center"
          >
            <motion.h1
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              Checking your stocks & crypto should be easy.
            </motion.h1>
            <motion.div className="w-3/4">
              <Accordion variant="splitted">
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Investment Insights"
                >
                  Unlock in-depth insights into your portfolio with real-time
                  data and personalized recommendations.
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Market Trends"
                >
                  Our platform tracks key movements and alerts you to
                  opportunities that matter to your investments.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Portfolio Optimization"
                >
                  Adjust your asset allocation to align with your financial
                  goals, balancing risk and reward.
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-3/5 overflow-hidden flex justify-end max-h-full"
            initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={"/investments.webp"}
              alt="Mock Investments dashboard"
              width={1600}
              height={900}
              className="object-cover max-h-full w-full translate-x-1/4 -translate-y-20 relative"
            />
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black via-transparent to-transparent rounded-xl"></div>
          </motion.div>
        </motion.section>

        <motion.section className="w-full flex flex-col justify-center align-middle bg-white h-screen">
          <motion.div>
            <video ref={videoRef} muted loop>
              <source src="/3DLandingStocks.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
