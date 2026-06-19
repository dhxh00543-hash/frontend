"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LoginModal from "@/components/LoginModal";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false); // เมนูมือถือของ navbar หลัก
  const [isMiniOpen, setIsMiniOpen] = useState(false); // เมนูมือถือของ mini bar
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // โผล่ mini bar ขึ้นมาแทน หลังจากเลื่อนผ่าน navbar หลัก (สูงประมาณ 80px) ไปแล้ว
  const [showMiniBar, setShowMiniBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMiniBar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    { name: "หน้าแรก", path: "/" },
    { name: "เกี่ยวกับเรา", path: "/about" },
    { name: "สินค้า", path: "/products" },
    { name: "บริการ", path: "/service" },
    { name: "ติดต่อ", path: "/contact" },
  ];

  return (
    <div>
      {/* Navbar หลัก - อยู่ใน flow ปกติของหน้า เลื่อนหายไปกับเนื้อหาตามปกติ */}
      <nav className="bg-black/70 backdrop-blur-xl border-b border-orange-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/">
              <h1 className="text-3xl font-black bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                GUGU
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menus.map((menu) => (
                <Link
                  key={menu.path}
                  href={menu.path}
                  className="relative text-slate-300 font-medium hover:text-orange-400 transition group"
                >
                  {menu.name}
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <div className="hidden md:block">
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 bg-white text-gray-900 hover:bg-gray-100 shadow-sm"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-4 pt-4">
              {menus.map((menu) => (
                <Link
                  key={menu.path}
                  href={menu.path}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-orange-400 transition"
                >
                  {menu.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="mt-2 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mini bar - ติดบนจอ โผล่ขึ้นมาแทนหลังจากเลื่อนผ่าน navbar หลักไปแล้ว */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-orange-500/10 transition-all duration-300 ${
          showMiniBar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-14">
            {/* Logo เล็กลง */}
            <Link href="/">
              <h1 className="text-xl font-black bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                GUGU
              </h1>
            </Link>

            {/* Desktop Menu แบบย่อ */}
            <div className="hidden md:flex items-center gap-6">
              {menus.map((menu) => (
                <Link
                  key={menu.path}
                  href={menu.path}
                  className="text-sm text-slate-300 font-medium hover:text-orange-400 transition"
                >
                  {menu.name}
                </Link>
              ))}

              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-900 hover:bg-gray-100 transition"
              >
                เข้าสู่ระบบ
              </button>
            </div>

            {/* Mobile Button ของ mini bar */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMiniOpen(!isMiniOpen)}
            >
              {isMiniOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu ของ mini bar */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMiniOpen ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-3 pt-2">
              {menus.map((menu) => (
                <Link
                  key={menu.path}
                  href={menu.path}
                  onClick={() => setIsMiniOpen(false)}
                  className="text-sm text-slate-300 hover:text-orange-400 transition"
                >
                  {menu.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setIsMiniOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="mt-1 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}