"use client";

import { useState, useMemo } from "react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuthStore } from "../lib/authStore";
import { Button, Input } from "@nextui-org/react";
import { MailIcon, VenetianMask } from "lucide-react";
import Image from "next/image";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { signIn, loading, error } = useAuthStore();

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const signedInPromise = await signIn(email, password);

      router.push("/");
      localStorage.setItem("isSignedIn", "true");
    } catch (errorMessage) {
      toast.error(error);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="p-8">
        <Image
          src={"/logo.png"}
          alt="Stock Market Logo"
          width={300}
          height={80}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex items-center justify-around mt-24">
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" p-8 rounded-lg w-full max-w-md"
          onSubmit={handleSignIn}
        >
          <h1 className="text-3xl font-extrabold mb-16 text-center text-secondary-300">
            Sign In
          </h1>
          <div className="mt-8">
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
              startContent={<MailIcon color="#cbacf9" />}
            />
          </div>
          <div className="my-8">
            <Input
              value={password}
              type="password"
              label="Password"
              variant="bordered"
              onValueChange={setPassword}
              className="w-full text-secondary-400"
              color="secondary"
              labelPlacement="outside"
              startContent={<VenetianMask color="#cbacf9" />}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <Button color="secondary" type="submit" isDisabled={loading}>
              Sign In
            </Button>

            <Link
              href="/sign-up"
              className="inline-block align-baseline font-medium text-sm text-secondary-300 hover:text-secondary-400 transition duration-300"
            >
              Don't have an account? Sign Up
            </Link>
          </div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={"/Signin.png"}
            alt="Stock Market Logo"
            width={700}
            className="rounded-xl skew-x-12 "
            height={200}
            objectFit="cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
