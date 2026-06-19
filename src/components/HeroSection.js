"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// จุดที่ชิ้นไก่ทอดจะกระเด็นออกไป (ทิศทาง/มุม/ระยะ ปรับได้ตามต้องการ)
const SCATTER_PIECES = [
  { tx: "-85px", ty: "-15px", rot: "-35deg", delay: "0s" },
  { tx: "-45px", ty: "-55px", rot: "-70deg", delay: "0.03s" },
  { tx: "0px", ty: "-70px", rot: "15deg", delay: "0.01s" },
  { tx: "45px", ty: "-55px", rot: "70deg", delay: "0.04s" },
  { tx: "85px", ty: "-15px", rot: "35deg", delay: "0.02s" },
  { tx: "20px", ty: "20px", rot: "100deg", delay: "0.05s" },
];

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#f9731630,transparent_40%),radial-gradient(circle_at_bottom_right,#eab30830,transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">
              🔥 Premium Chicken Store
            </span>

            <h1 className="mt-6 text-6xl lg:text-8xl font-black text-white">
              Fresh
              <span className="block text-orange-400">Chicken</span>
            </h1>

            <p className="mt-6 text-slate-300 text-xl">
              ไก่คุณภาพพรีเมียม สดใหม่ทุกวัน
              พร้อมจัดส่งถึงบ้าน
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="/products"
                className="px-8 py-4 rounded-2xl bg-orange-500 text-white font-bold flex items-center gap-2 hover:scale-105 transition"
              >
                สั่งซื้อ
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 rounded-2xl border border-white/10 text-white"
              >
                เกี่ยวกับเรา
              </Link>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? "/ไก่ทอด.png" : "/ไก่เด้ง.png"}
              alt="Chicken"
              className="relative z-10 w-full max-w-xl mx-auto animate-bounce"
            />

            {/* จุดกำเนิดของชิ้นไก่ทอดที่กระเด็น อยู่ตรงประมาณขาไก่/จุดกระทบพื้น */}
            <div className="absolute bottom-10 left-1/2 w-0 h-0">
              {SCATTER_PIECES.map((p, i) => (
                <span
                  key={i}
                  className={`chicken-piece ${isHovered ? "chicken-piece-active" : ""}`}
                  style={{
                    "--tx": p.tx,
                    "--ty": p.ty,
                    "--rot": p.rot,
                    animationDelay: p.delay,
                  }}
                >
                  
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chicken-piece {
          position: absolute;
          left: 0;
          top: 0;
          font-size: 1.6rem;
          visibility: hidden;
          pointer-events: none;
          /* ทำงานวนตลอดเวลา (1s เท่ากับ animate-bounce ของ Tailwind) เพื่อให้จังหวะ
             ตรงกับตอนไก่ลงกระทบพื้นเสมอ ส่วน visibility เป็นตัวสั่งเปิด/ปิดตอน hover */
          animation: scatterPiece 1s linear infinite;
        }
        .chicken-piece-active {
          visibility: visible;
        }
        @keyframes scatterPiece {
          0%,
          40% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.4) rotate(0deg);
          }
          46% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          /* 50% = จังหวะที่ animate-bounce ของ Tailwind ลงถึงพื้นพอดี */
          52% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          80% {
            opacity: 0.9;
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty)))
              scale(1) rotate(var(--rot));
          }
          100% {
            opacity: 0;
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty)))
              scale(0.7) rotate(var(--rot));
          }
        }
      `}</style>
    </section>
  );
}