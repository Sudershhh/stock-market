"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Input } from "@nextui-org/react";
import { MailIcon } from "lucide-react";
import Image from "next/image";
import PasswordInput from "./ui/PasswordInput";
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
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full md:w-1/3 p-8 bg-black text-white">
        <Image
          src={"/logo.png"}
          alt="Stock Market Logo"
          width={300}
          height={80}
          className="cursor-pointer mb-8"
          onClick={() => router.push("/")}
        />
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-lg w-full max-w-md bg-opacity-80 "
          onSubmit={handleSignUp}
        >
          <h1 className="text-3xl font-extrabold mb-12 text-center text-secondary-300">
            Sign Up
          </h1>
          <div className="my-10">
            <Input
              value={email}
              type="email"
              label="Email"
              variant="bordered"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "secondary"}
              errorMessage="Please enter a valid email"
              onValueChange={setEmail}
              labelPlacement="outside"
              className="w-full text-secondary-400"
              placeholder="example@email.com"
              startContent={<MailIcon color="#cbacf9" />}
            />
          </div>
          <PasswordInput
            label="Password"
            value={password}
            onValueChange={setPassword}
          />
          <PasswordInput
            label="Confirm Password"
            value={confirmPassword}
            onValueChange={setConfirmPassword}
          />
          <div className="flex items-center justify-between mb-4">
            <Button color="secondary" type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
          <div className="text-center">
            <Link
              href="/sign-in"
              className="inline-block align-baseline font-medium text-sm text-secondary-300 hover:text-secondary-400 transition duration-300"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </motion.form>
      </div>

      <div className="flex flex-col w-full md:w-2/3">
        <div className="relative w-full h-full">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ filter: "blur(4px)" }}
          >
            <source src="/Sign-Up.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
