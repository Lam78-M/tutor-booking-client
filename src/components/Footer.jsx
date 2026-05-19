'use client'
import Link from "next/link";
import { FaFacebook, FaInstagram,  FaMapMarkedAlt, FaPhone, FaPhoneAlt, FaTwitter } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
<footer
  className="bg-[#08223d]  text-white  min-h-[200px]"
  
>
      <div className="max-w-7xl mx-auto px-6 py-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-[#AAFFC7]">
            Medi<span className="text-[#67C090]">Queue</span>
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            Smart tutor booking & learning platform for students and educators.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-2xl font-semibold text-[#AAFFC7] mb-4 sm:pl-0  lg:pl-15">
            Services
          </h2>
          <ul className="space-y-3 text-gray-300 sm:pl-0  lg:pl-15">
            {["Find Tutors", "Book Sessions", "Learning Resources", "Support"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="inline-block transition-all duration-300 hover:text-[#67C090] hover:scale-105"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-2xl font-semibold text-[#AAFFC7] mb-4 sm:pl-0  lg:pl-10">
            Company
          </h2>
          <ul className="space-y-3 text-gray-300 sm:pl-0  lg:pl-10">
            {["About Us", "Privacy Policy", "Terms"].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="inline-block transition-all duration-300 hover:text-[#67C090] hover:scale-105"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h2 className="text-2xl font-semibold text-[#AAFFC7] mb-4">
            Contact
          </h2>

          <div className="space-y-2 text-gray-300 text-sm">
            <p className="hover:text-[#67C090] transition-all duration-300 flex items-center gap-2 ">
              <FaMapMarkedAlt/> Khilkhet, Dhaka, Bangladesh
            </p>

            <a
              href="mailto:support@mediqueue.com"
              className=" hover:text-[#67C090] transition-all duration-300 flex items-center gap-2 "
            >
              <MdEmail/> ayatlam@gmail.com
            </a>

            <a
              href="tel:+8801XXXXXXXXX"
              className=" hover:text-[#67C090] transition-all duration-300 flex items-center gap-2"
            >
              <FaPhoneAlt/> +880 1602514628
            </a>
          </div>

          {/* Social */}
          <h2 className="text-lg font-semibold text-[#AAFFC7] mt-15 mb-3">
            Social
          </h2>

          <div className="flex gap-5  text-gray-300">
            <a
              href="#"
              className="transition-all duration-300 hover:text-[#67C090] hover:scale-125"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="#"
              className="transition-all duration-300 hover:text-[#67C090] hover:scale-125"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href="#"
              className="transition-all duration-300 hover:text-[#67C090] hover:scale-125"
            >
              <FaInstagram size={20} />
            </a>
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