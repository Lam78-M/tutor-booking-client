"use client";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

  function SigninPage() {

  const onsubmit=async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user)
    // এখানে API call দিবি future e
    const{ data, error} = await authClient.signIn.email({
      email : user.email,
      password: user.password,        
    })
    console.log({data, error})
  if (error) {
  toast.error(error.message);
  return;
}

if (data) {
  toast.success("Account created successfully");
}
if(data){
  redirect('/')
}
  };
 
    const handleGoogleSignin = async ()=>{
    await authClient.signIn.social({
      provider: "google"
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">

      <form
        onSubmit={onsubmit}
        className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl space-y-5"
      >

        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
     Login
          </h1>
          <p className="text-sm text-gray-500">
            Login to get started
          </p>
        </div>

        {/* Name */}
      

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:border-[#67C090]"
          />
        </div>

        {/* Photo URL */}
      

        {/* Password */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600 dark:text-gray-300">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:border-[#67C090]"
          />
        </div>
        <div className="flex justify-end">
  <Link
    href="/forgot-password"
   className="text-sm text-blue-600 hover:underline"
  >
    Forgot Password?
  </Link>
</div>
    

        {/* Register Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg font-medium border border-green-600 text-[#0f3d2e] bg-[#abe1ab] hover:opacity-90 transition-all duration-300 shadow-md"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-1"></div>
          <span className="text-xs text-gray-500">OR</span>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-1"></div>
        </div>

        {/* Google Button */}
        <button 
        onClick={handleGoogleSignin}
          type="button"
          className="w-full py-3 rounded-lg border border-green-600 dark:border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Login Link */}
     

      </form>
    </div>
  );
}
export default SigninPage;