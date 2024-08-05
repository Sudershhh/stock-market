// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Market - Home",
  description: "Created by Sri Sudersan",
  icons: {
    icon: "/dollar-sign.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/dollar-sign.svg" sizes="any" />
      </head>
      <body className={`${inter.className}  text-gray-100 relative`}>
        <NextUIProvider>
          <Header />
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            // pauseOnFocusLoss
            draggable
            // pauseOnHover
            theme="light"
          />
        </NextUIProvider>
      </body>
    </html>
  );
}
