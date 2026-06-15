"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";

function SigninPage() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Login | Tutor App";
  }, []);

  const onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data) {
        toast.success("Login successful");
        window.location.href = "/tutor";
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  const handleGoogleSignin = async () => {
    try {
      
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/tutor" 
      });
    } catch (error) {
      console.error(error);
      toast.error("Google Sign In Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">
     
      <form
        onSubmit={onsubmit}
        className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl space-y-5"
      >
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Login</h1>
          <p className="text-sm text-gray-500">Login to get started</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm text-gray-600 dark:text-gray-300">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:border-[#67C090]"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-gray-600 dark:text-gray-300">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:border-[#67C090]"
          />
        </div>

        <div className="flex justify-end">
          <Link href="/signup" className="text-sm text-blue-600 hover:underline">
            Signup
          </Link>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-medium border border-green-600 text-[#0f3d2e] bg-[#abe1ab] hover:opacity-90 transition-all duration-300 shadow-md"
        >
          Login
        </button>

        <div className="flex items-center gap-3">
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-1"></div>
          <span className="text-xs text-gray-500">OR</span>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-1"></div>
        </div>

        <button
          onClick={handleGoogleSignin}
          type="button"
          className="w-full py-3 rounded-lg border border-green-600 dark:border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>
      </form>
    </div>
  );
}

export default SigninPage;