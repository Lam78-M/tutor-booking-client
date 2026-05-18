"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme} = useTheme()

  const menu = [
    { name: "Home", path: "/" },
    { name: "Add Tutor", path: "/add-tutor" },
    { name: "My Tutors", path: "/my-tutors" },
    { name: "Sessions", path: "/sessions" },
  ];

  return (
    <nav className="bg-[#08223d]  px-6 py-4 p-2  ">
      <div className="flex items-center justify-between container mx-auto ">

        {/* Logo */}
      <h1 className="text-2xl font-bold text-[#53ef92]">
  Medi<span className="text-[#33a25c]">Queue</span>
</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {menu.map((item) => (
            <li key={item.path} className="relative">
              <Link
                href={item.path}
                className="px-2 py-1 transition-all duration-200 text-white font-semibold"
              >
                {item.name}
              </Link>

              {/* Animated underline */}
              {pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="h-[2px] bg-[#52b37f] absolute left-0 right-0 -bottom-1"
                />
              )}
            </li>
          ))}
        </ul>

         <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 ml-55 lg:ml-0 transition-all"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400 " size={20} />
      ) : (
        <Moon className="text-blue-500" size={20} />
      )}
    </button>

        {/* Hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
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