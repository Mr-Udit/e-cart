"use client";
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [cartCount, setCartCount] = useState(3);
  const navItems = [
    {name : "all",link:"/products"},
    {name : "all",link:"/products"},
    {name : "all",link:"/products"},
    {name : "all",link:"/products"},
    {name : "all",link:"/products"},
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-white shadow-md w-full relative">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo & Location */}
                <div className="flex items-center gap-3">
                <Link href="/"><h1 className="text-3xl">Logo</h1></Link>
                <div className="hidden md:flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm ml-4">
                  <svg
                  className="w-5 h-5 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 11a4 4 0 110-8 4 4 0 010 8z"
                  />
                  </svg>
                  <span className="font-medium text-gray-700">Your Location</span>
                </div>
                </div>

                {/* Search Box */}
                <div className="flex-1 w-full md:w-auto mt-2 md:mt-0 ml-4">
                <SearchBox />
                </div>

                {/* Login, Cart & Menu */}
          <div className="flex gap-4 mt-2 md:mt-0 items-center relative">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Login
            </button>

            <button
              className="relative flex items-center bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              onClick={() => router.push("/cart")}
            >
              <ShoppingCart size={20} className="mr-2" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Secondary Menu Button */}
            <div className="md:hidden relative">
              <button
                className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2 z-10">
                  {navItems.map((item, index) => (
                    <a
                      key={index.name}
                      href={item.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Secondary Menu */}
        <div className="hidden md:flex gap-4 mt-4 justify-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-gray-700 hover:text-blue-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;