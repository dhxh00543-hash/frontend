"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Service", path: "/service" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              GUGU
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {menus.map((menu) => (
              <Link
                key={menu.path}
                href={menu.path}
                className="relative text-gray-700 font-medium transition-all duration-300 hover:text-blue-600 group"
              >
                {menu.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Button */}
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {menus.map((menu) => (
              <Link
                key={menu.path}
                href={menu.path}
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {menu.name}
              </Link>
            ))}

            <button className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
