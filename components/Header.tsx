// components/Header.tsx
"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useAuthStore } from "@/lib/authStore";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const Header = () => {
  const { user, signOut } = useAuthStore();

  return (
    <header className="w-full flex justify-center items-start absolute top-4 left-0 p-2 max-h-10 rounded-lg">
      {/* <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="text-green-500 hover:text-green-700">
            StockMarket
          </Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/dashboard" className="hover:text-green-500">
            Dashboard
          </Link>
          <Link href="/stocks" className="hover:text-green-500">
            Stocks
          </Link>
          <Link href="/news" className="hover:text-green-500">
            News
          </Link>
          <Link href="/about" className="hover:text-green-500">
            About
          </Link>
        </nav>
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
                  <a
                    href="#"
                    className="block rounded-lg py-2 px-3 hover:bg-gray-700"
                    onClick={signOut}
                  >
                    Logout
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
          ) : (
            <Link href="/sign-in" className="hover:text-green-500">
              Sign In
            </Link>
          )}
        </div>
      </div> */}

      <nav className="flex space-x-4 bg-black bg-opacity-30 p-2 rounded-lg border border-gray-900 backdrop-filter backdrop-blur-md w-3/4 justify-between">
        <Link href="/" className="text-green-500 hover:text-green-700">
          StockMarket
        </Link>
        <Link href="/dashboard" className="hover:text-green-500">
          Dashboard
        </Link>
        <Link href="/stocks" className="hover:text-green-500">
          Stocks
        </Link>
        <Link href="/news" className="hover:text-green-500">
          News
        </Link>
        <Link href="/about" className="hover:text-green-500">
          About
        </Link>
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
            // <Link href="/sign-in" className="hover:text-green-500">
            //   Sign In
            // </Link>

            <Button size="sm" color="primary">
              Sign In
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
