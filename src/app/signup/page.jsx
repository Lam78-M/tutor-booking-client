"use client";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">

      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl space-y-6">

        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Create Account
          </h1>
          <p className="text-sm text-gray-500">
            Join us and start your journey
          </p>
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

        {/* Image Upload */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 dark:text-gray-300">
            Profile Image
          </label>

          <div className="w-full p-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-center text-sm text-gray-500 cursor-pointer hover:border-[#67C090] transition">
            Click to upload image
          </div>
        </div>

        {/* Button */}
        <button className="w-full py-3 rounded-lg font-medium text-[#0f3d2e] bg-gradient-to-r from-[#AAFFC7] to-[#67C090] hover:opacity-90 transition-all duration-300 shadow-md">
          Sign Up
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-[#67C090] font-medium cursor-pointer">
            Login
          </span>
        </p>

      </div>
    </div>
  );
}