"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const { theme, setTheme } = useTheme();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Tutors", path: "/tutor" },
    { name: "Add Tutor", path: "/add-tutor" },
    { name: "My Tutors", path: "/my-tutors" },
    { name: "My Booked Sessions", path: "/mybookedsessions" },
  ];

  return (
    <nav className="bg-[#08223d] p-5 px-4 md:px-6  sticky top-0 z-50">
      <div className="px-10 flex items-center justify-between">
        
        {/* Logo */}
       <h1 className="text-2xl font-bold text-[#AAFFC7]">
            Medi<span className="text-[#67C090]">Queue</span>
          </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center w-full ml-20  gap-8">
          
          {/* Nav Links */}
          <ul className="flex items-center justify-center w-full gap-2">
            {menu.map((item) => (
              <li key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={`
                    px-4 py-2 rounded-full font-medium transition-all duration-300
                    ${
                      pathname === item.path
                        ? "text-[#53ef92] bg-white/10"
                        : "text-gray-200 hover:text-[#53ef92] hover:bg-white/5"
                    }
                  `}
                >
                  {item.name}
                </Link>

                {/* Active Underline */}
                {pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="h-[2px] bg-[#53ef92] absolute left-2 right-2 -bottom-1 rounded-full shadow-[0_0_10px_#53ef92]"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Buttons + Theme */}
          <div className="flex items-center gap-4">
            
            {/* Login */}
         <Link href={'/login'}>
            <Button
              className="
                bg-[#48d07e]
                hover:bg-[#42d67d]
                text-[#08223d]
                font-semibold
                px-4
                py-2
                rounded-md
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Log In
            </Button>
         </Link>

            {/* Signup */}
       <Link href={'/signup'}>
            <Button
              variant="bordered"
              className="
                border-2
                border-[#48d07e]
                text-[#53ef92]
                hover:bg-[#48d07e]
                hover:text-[#08223d]
                font-semibold
                px-4
                py-2
                rounded-md
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Sign Up
            </Button>
       </Link>

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="
                p-2
                rounded-full
                bg-white/10
                hover:bg-white/20
                transition-all
              "
            >
              {theme === "dark" ? (
                <Sun className="text-yellow-400" size={20} />
              ) : (
                <Moon className="text-white" size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-3 lg:hidden">

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="
              p-2
              rounded-full
              bg-white/10
              hover:bg-white/20
              transition-all
            "
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-white" size={20} />
            )}
          </button>

          {/* Hamburger */}
          <button
            className="text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <HiX size={28} />
            ) : (
              <HiOutlineMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
              className="
                fixed
                top-0
                left-0
                h-full
                w-72
                bg-[#124170]
                p-6
                z-50
                flex
                flex-col
              "
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-[#53ef92]">
                  Medi<span className="text-[#33a25c]">Queue</span>
                </h1>

                <button
                  onClick={() => setOpen(false)}
                  className="text-white"
                >
                  <HiX size={28} />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-3">
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className={`
                        block
                        px-4
                        py-3
                        rounded-xl
                        font-medium
                        transition-all
                        duration-300
                        ${
                          pathname === item.path
                            ? "bg-[#53ef92] text-[#08223d]"
                            : "text-white hover:bg-white/10 hover:text-[#53ef92]"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Bottom Buttons */}
              <div className="mt-auto flex flex-col gap-3 pt-6">
                
            <Link href={'/login'}>
                <Button
                  className="
                    w-full
                    bg-[#48d07e]
                    text-[#08223d]
                    font-semibold
                    py-3
                      hover:bg-[#51e48b]
                  "
                >
                  Log In
                </Button>
            </Link>

              
              <Link href={'/signup'}>
                <Button
                  variant="bordered"
                  className="
                    w-full
                    border-2
                    border-[#48d07e]
                    text-[#53ef92]
                    hover:bg-[#48d07e]
                    hover:text-[#08223d]
                  "
                >
                  Sign Up
                </Button>
              </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}