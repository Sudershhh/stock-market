// components/SignUp.tsx
"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Input } from "@nextui-org/react";
import { MailIcon, VenetianMask } from "lucide-react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        throw new Error("Passwords do not match!");
      }

      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        throw new Error(error.message);
      } else {
        router.push("/sign-in");

        toast.success(
          "Signed up successfully! Please check your email for the confirmation link."
        );
      }
    } catch (errorObject) {
      toast.error("Failed. Please try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {/* <ToastContainer /> */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSignUp}
      >
        <h1 className="text-4xl font-bold mb-6 text-green-500">Sign Up</h1>
        <div className="my-10">
          <Input
            value={email}
            type="email"
            label="Email"
            variant="bordered"
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "success"}
            errorMessage="Please enter a valid email"
            onValueChange={setEmail}
            labelPlacement="outside"
            className=" w-full"
            startContent={<MailIcon />}
          />
        </div>
        <div className="mb-14">
          <Input
            value={password}
            type="password"
            label="Password"
            variant="bordered"
            onValueChange={setPassword}
            className="w-full "
            color="success"
            labelPlacement="outside"
            startContent={<VenetianMask color="white" />}
          />
        </div>
        <div className="my-6">
          <Input
            value={confirmPassword}
            type="password"
            label="Confirm Password"
            variant="bordered"
            onValueChange={setConfirmPassword}
            className="w-full "
            color="success"
            labelPlacement="outside"
            startContent={<VenetianMask color="white" />}
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Sign Up
          </button>
          <Link
            href="/sign-in"
            className="inline-block align-baseline font-medium text-sm text-green-500 hover:text-green-700 transition duration-300"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </motion.form>
    </div>
  );
};

export default SignUp;
