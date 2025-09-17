
"use client";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { RiGalleryFill } from "react-icons/ri";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks} from "@/Data";
import { NavLink } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full border-b border-gray-200/40 backdrop-blur-md dark:border-white/5 fixed top-0 z-30 bg-white dark:bg-black/90">
      <div className="w-full md:w-[95%] mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div>
          {/* <Link
            href="/"
            className="text-3xl font-bold text-black dark:text-white font-PlayfairDisplay"
          >
            K
          </Link> */}

          <Link
            href="/"
            className="text-3xl font-bold text-black dark:text-white"
          >
            <svg 
              aria-label="Krea Logo" 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21" />
              <path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793" />
            </svg>
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="bg-gray-100 dark:bg-white rounded-2xl px-2 py-1 hidden xl:flex items-center gap-x-5">
          {navLinks.map(({ id, icon: Icon, path, label }: NavLink) => (
            <li key={id} className="relative group">
              <Link
                href={path}
                className={`p-2 rounded-xl transition-colors duration-300 flex items-center justify-center group-hover:shadow-sm ${
                  isActive(path)
                    ? "bg-white shadow-sm text-black dark:bg-black dark:text-white"
                    : "group-hover:bg-white dark:group-hover:bg-black"
                }`}
              >
                <Icon
                  className={`text-xl transition ${
                    isActive(path)
                      ? "text-black dark:text-white"
                      : "text-black group-hover:text-black dark:group-hover:text-white"
                  }`}
                />
              </Link>

              {/* Tooltip */}
              <span className="font-suisse font-normal absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-2xl bg-black/90 text-white dark:bg-white dark:text-black opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </li>
          ))}
        </ul>


        {/* Right Section */}
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-x-1 cursor-pointer">
            <RiGalleryFill />
            <p className="font-normal font-suisse text-base text-text-color dark:text-white">Gallery</p>
          </div>

          <div className="hidden xl:flex items-center gap-x-1 cursor-pointer">
            <BiSupport />
            <p className="font-normal font-suisse text-base text-text-color dark:text-white">Support</p>
          </div>

          <IoIosNotifications className="cursor-pointer text-xl" />
          <ThemeToggle />

          <div className="">
            <Image
              src="/svgs/user.svg"
              alt="Logo"
              width={32}
              height={32}
              priority
            />
          </div>

          {/* Mobile Hamburger */}
          <div className="xl:hidden">
            <button type="button" className="cursor-pointer transition duration-300" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <RxCross2 className="text-black dark:text-white cursor-pointer text-xl" />
              ) : (
                <RxHamburgerMenu className="text-black dark:text-white text-xl cursor-pointer"  />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-16 left-0 w-full z-30 bg-gray-100 dark:bg-black backdrop-blur-md px-6 py-4"
          >
            <ul className="flex flex-col items-center gap-3">
              {navLinks.map(({ id, icon: Icon, path, label }: NavLink) => (
                <li key={id} className="">
                  <Link
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center font-montserrat font-semibold gap-2 px-3 py-2 rounded-lg transition-colors ${
                      isActive(path)
                        ? "bg-blue-500 text-white dark:bg-white dark:text-text-color"
                        : "hover:bg-blue-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Icon size={20}  className={`text-xl transition ${
                        isActive(path)
                            ? "text-white dark:text-black"
                            : "dark:text-white"
                        }`} />

                    <span className={`font-montserrat font-semibold ${isActive(path) ? 'text-white dark:text-black' : 'text-text-color dark:text-white'}`}>
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
