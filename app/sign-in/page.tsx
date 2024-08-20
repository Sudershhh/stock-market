"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuthStore } from "@/lib/authStore";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import PasswordInput from "@/components/ui/PasswordInput";
import EmailInput from "@/components/ui/EmailInput";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { signIn, loading, error } = useAuthStore();

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
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
      <div className="flex flex-col md:flex-row items-center justify-around mt-8 md:mt-24 w-full max-w-screen-lg">
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
            <EmailInput email={email} onEmailChange={setEmail} />
          </div>

          <PasswordInput
            label="Password"
            value={password}
            onValueChange={setPassword}
          />
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
          className="relative mt-12 md:mt-0"
        >
          <Image
            src={"/stocketa-track.webp"}
            alt="Stock Market Logo"
            width={240}
            height={100}
            className="rounded-xl relative"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
