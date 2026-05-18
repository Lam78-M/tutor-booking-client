"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Add Tutor", path: "/add-tutor" },
    { name: "My Tutors", path: "/my-tutors" },
    { name: "Sessions", path: "/sessions" },
  ];

  return (
    <nav className="bg-[#124170] text-white px-6 py-4 relative z-50">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#AAFFC7]">
          Medi<span className="text-[#67C090]">Queue</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {menu.map((item) => (
            <li key={item.path} className="relative">
              <Link
                href={item.path}
                className="px-2 py-1 transition-all duration-200"
              >
                {item.name}
              </Link>

              {/* Animated underline */}
              {pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="h-[2px] bg-[#67C090] absolute left-0 right-0 -bottom-1"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <HiX size={26} /> : <HiOutlineMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <>
            {/* background blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* slide menu */}
            <motion.ul
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 left-0 h-full w-72 bg-[#124170] p-6 flex flex-col gap-6 z-50"
            >
              {menu.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`block px-2 py-2 rounded transition-all ${
                      pathname === item.path
                        ? "bg-[#67C090] text-[#124170]"
                        : "hover:text-[#67C090]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}