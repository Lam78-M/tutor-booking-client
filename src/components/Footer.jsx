import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
   <footer className="bg-[#124170] text-white mt-10">
  <div className="max-w-7xl mx-auto px-6 py-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

    {/* Brand */}
    <div>
      <h1 className="text-2xl font-bold text-[#AAFFC7]">
        Medi<span className="text-[#67C090]">Queue</span>
      </h1>
      <p className="mt-3 text-sm  text-gray-300">
        Smart tutor booking & learning platform for students and educators.
      </p>
    </div>

    {/* Services */}
    <div>
      <h2 className="text-lg font-semibold text-[#AAFFC7] mb-4  pl:0 lg:pl-20">
        Services
      </h2>
      <ul className="space-y-2  text-gray-300  pl:0 lg:pl-20">
        <li className="hover:text-[#67C090] cursor-pointer">Find Tutors</li>
        <li className="hover:text-[#67C090] cursor-pointer">Book Sessions</li>
        <li className="hover:text-[#67C090] cursor-pointer">Learning Resources</li>
        <li className="hover:text-[#67C090] cursor-pointer">Support</li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h2 className="text-lg font-semibold text-[#AAFFC7] mb-4 pl:0 lg:pl-20">
        Company
      </h2>
      <ul className="space-y-2  text-gray-300 pl:0 lg:pl-20">
        <li className="hover:text-[#67C090] cursor-pointer">About Us</li>
        <li className="hover:text-[#67C090] cursor-pointer">Privacy Policy</li>
        <li className="hover:text-[#67C090] cursor-pointer">Terms</li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h2 className="text-lg font-semibold text-[#AAFFC7] mb-4 pl:0 lg:pl-30">
        Social
      </h2>
      <div className="flex gap-4 text-gray-300 pl:0 lg:pl-30">
        <span className="hover:text-[#67C090] cursor-pointer"><FaFacebook/></span>
        <span className="hover:text-[#67C090] cursor-pointer"><FaTwitter/></span>
        <span className="hover:text-[#67C090] cursor-pointer"><FaInstagram/></span>
      </div>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-[#ffffff4b] text-center py-4 text-sm text-[#AAFFC7]">
    © {new Date().getFullYear()} MediQueue. All rights reserved.
  </div>
</footer>
  );
}