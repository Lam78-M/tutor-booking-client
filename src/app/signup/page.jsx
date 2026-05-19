"use client";

import Link from "next/link";


import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">

      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl space-y-5">

        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Create Account
          </h1>
          <p className="text-sm text-gray-500">
            Sign up to get started
          </p>
        </div>

        {/* Name */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:border-[#67C090]"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:border-[#67C090]"
          />
        </div>

        {/* Photo URL */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 dark:text-gray-300">
            Photo URL
          </label>
          <input
            type="text"
            placeholder="Paste your photo URL"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:border-[#67C090]"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:border-[#67C090]"
          />
        </div>

        {/* Register Button */}
        <button className="w-full py-3 rounded-lg font-medium  border border-green-600 text-[#0f3d2e] bg-[#a4e2a4] hover:opacity-90 transition-all duration-300 shadow-md">
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-1"></div>
          <span className="text-xs text-gray-500">OR</span>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-1"></div>
        </div>

        {/* Google Button */}
    <button className="w-full py-3 rounded-lg border border-green-600 dark:border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
  <FcGoogle className="text-xl" />
  Continue with Google
</button>
        {/* Login Link */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-[#67C090] font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}