// components/SignIn.tsx
"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuthStore } from "../lib/authStore";
import { Button, Input } from "@nextui-org/react";
import { MailIcon, VenetianMask } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-black">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSignIn}
      >
        <h1 className="text-2xl font-bold text-green-400 mb-16">
          Sign in to your account
        </h1>
        <div className="mt-8">
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
        <div className="my-8">
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
        <div className="flex items-center justify-between mb-4">
          <Button color="success" type="submit" isDisabled={loading}>
            Sign In
          </Button>

          <Link
            href="/sign-up"
            className="inline-block align-baseline font-medium text-sm text-green-500 hover:text-green-700 transition duration-300"
          >
            Don't have an account? Sign Up
          </Link>
        </div>
      </motion.form>
    </div>
  );
};

export default SignIn;
