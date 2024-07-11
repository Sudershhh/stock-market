// components/Home.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
// } from "@shadcn/ui/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* <Navbar className="bg-gray-800">
        <NavbarBrand className="text-lg font-bold text-blue-500">
          Stock Market App
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <Link
              href="/"
              className="hover:text-blue-300 transition duration-300"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/about"
              className="hover:text-blue-300 transition duration-300"
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/contact"
              className="hover:text-blue-300 transition duration-300"
            >
              Contact
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/sign-in">
              <Button
                variant="ghost"
                className="text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
              >
                Sign In
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/sign-up">
              <Button
                variant="ghost"
                className="text-white bg-green-600 hover:bg-green-700 transition duration-300"
              >
                Sign Up
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar> */}
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
