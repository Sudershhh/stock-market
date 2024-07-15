// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [user, setUser] = useState(null);

  return (
    <header className="bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  Profile
                  <ChevronDown
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <MenuItems className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/profile"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Profile
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/settings"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Settings
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                        onClick={() => {
                          // Handle logout
                          setUser(null);
                        }}
                      >
                        Logout
                      </a>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          ) : (
            <Link href="/sign-in" className="hover:text-green-500">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
