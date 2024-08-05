"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useAuthStore } from "@/lib/authStore";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user, signOut } = useAuthStore();
  const router = useRouter();

  function handleRedirectToSignIn() {
    router.push("/sign-in");
  }

  return (
    <header className="w-full flex justify-center items-start absolute top-4 left-0 p-2 max-h-10 rounded-lg ">
      <nav className="flex space-x-4 h-full text-sm  bg-opacity-30 p-1 rounded-lg border border-gray-900 backdrop-filter backdrop-blur-md w-3/4 justify-between items-center">
        <Link href="/" className="">
          StockMarket
        </Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/stocks">Stocks</Link>
        <Link href="/news">News</Link>
        <Link href="/about">About</Link>
        <div className="relative">
          {user ? (
            <Popover className="relative inline-block text-left">
              <PopoverButton className="inline-flex justify-center w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                Profile
                <ChevronDown
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-white/5 rounded-xl bg-gray-900 text-sm shadow-lg"
              >
                <div className="p-3">
                  <Link
                    href="/profile"
                    className="block rounded-lg py-2 px-3 hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block rounded-lg py-2 px-3 hover:bg-gray-700"
                  >
                    Settings
                  </Link>
                  <Button onClick={signOut} color="secondary" size="sm">
                    Sign Out
                  </Button>
                </div>
              </PopoverPanel>
            </Popover>
          ) : (
            <Button
              size="sm"
              color="secondary"
              onClick={handleRedirectToSignIn}
            >
              Sign In
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
