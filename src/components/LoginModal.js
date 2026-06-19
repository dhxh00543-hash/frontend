'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LoginModal({ isOpen, onClose }) {
  // 1. State ควบคุมโหมด (True = Login, False = Register)
  const [isLoginMode, setIsLoginMode] = useState(true)

  // 2. State สำหรับเก็บข้อมูลฟอร์ม
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // 3. รีเซ็ตฟอร์มกลับเป็นหน้า Login เสมอ เมื่อเปิด Modal ขึ้นมาใหม่
  useEffect(() => {
    if (isOpen) {
      setIsLoginMode(true)
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
    }
  }, [isOpen])

  if (!isOpen) return null

  // 4. ฟังก์ชันจัดการเมื่อกดปุ่ม Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLoginMode) {
      console.log('เข้าสู่ระบบด้วย:', { email, password })
      // Logic เข้าสู่ระบบ
    } else {
      console.log('สมัครสมาชิกด้วย:', { firstName, lastName, email, password })
      // Logic สมัครสมาชิก
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-orange-950/40 backdrop-blur-sm p-4">

      {/* กล่อง Modal */}
      <div className="relative w-full max-w-md rounded-[2rem] shadow-2xl shadow-orange-950/30 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">

        {/* แถบ "ฝากล่อง" ด้านบน — ลายเซ็นของดีไซน์ ชวนให้นึกถึงฝากล่องไก่ทอดที่เพิ่งเปิด */}
        <div className="h-3 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400" />
        <svg viewBox="0 0 400 16" preserveAspectRatio="none" className="block w-full h-4 -mt-px">
          <path
            d="M0,0 Q16.6,16 33.3,0 T66.6,0 T100,0 T133.3,0 T166.6,0 T200,0 T233.3,0 T266.6,0 T300,0 T333.3,0 T366.6,0 T400,0 L400,16 L0,16 Z"
            fill="#FFF8EE"
          />
        </svg>

        <div className="bg-[#FFF8EE] px-8 pb-8 pt-1">

          {/* ปุ่มปิด Modal */}
          <button
            onClick={onClose}
            className="absolute top-7 right-5 p-2 text-stone-400 hover:text-orange-600 hover:bg-orange-100/70 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* ส่วนหัว (Header & Logo) เปลี่ยนข้อความตามโหมด */}
          <div className="text-center mb-8 mt-5">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400 text-white font-black text-2xl shadow-lg shadow-orange-500/30 mb-4">
              G
            </div>
            <h2 className="text-2xl font-black tracking-tight text-stone-900">
              {isLoginMode ? 'ยินดีต้อนรับกลับมา' : 'สมัครสมาชิก GUGU'}
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              {isLoginMode
                ? 'เข้าสู่ระบบเพื่อสั่งไก่ทอดสุดกรอบ และสะสมแต้มรับสิทธิพิเศษ'
                : 'สร้างบัญชีวันนี้ รับส่วนลดสำหรับออเดอร์แรกทันที'}
            </p>
          </div>

          {/* ฟอร์ม */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* ================= ส่วนที่เพิ่มมาเฉพาะหน้า Register ================= */}
            {!isLoginMode && (
              <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-orange-200/70 bg-orange-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-500 transition-colors"
                    placeholder="ชื่อจริง"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-orange-200/70 bg-orange-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-500 transition-colors"
                    placeholder="นามสกุล"
                  />
                </div>
              </div>
            )}
            {/* ================================================================= */}

            {/* อีเมล (ใช้ร่วมกันทั้ง Login และ Register) */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                อีเมล
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-orange-200/70 bg-orange-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-500 transition-colors"
                placeholder="name@example.com"
              />
            </div>

            {/* รหัสผ่าน (ใช้ร่วมกันทั้ง Login และ Register) */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-stone-700">
                  รหัสผ่าน
                </label>
                {isLoginMode && (
                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-amber-600 hover:text-amber-700 transition-colors"
                    onClick={onClose}
                  >
                    ลืมรหัสผ่าน?
                  </Link>
                )}
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-orange-200/70 bg-orange-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            {/* ปุ่ม Submit เปลี่ยนข้อความตามโหมด */}
            <button
              type="submit"
              className="w-full flex justify-center py-3.5 px-4 mt-2 rounded-xl shadow-md shadow-orange-500/25 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              {isLoginMode ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
            </button>
          </form>

          {/* ตัวคั่น (Divider) */}
          <div className="mt-6 mb-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-orange-200/70" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#FFF8EE] text-stone-400">หรือ</span>
              </div>
            </div>
          </div>

          {/* ส่วนปุ่มสลับโหมด (Toggle) */}
          <div className="text-center">
            <p className="text-sm text-stone-500">
              {isLoginMode ? 'ยังไม่มีบัญชีใช่ไหม? ' : 'มีบัญชีอยู่แล้วใช่ไหม? '}
              <button
                type="button"
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="font-medium text-amber-600 hover:text-amber-700 transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-0 after:bg-amber-600 after:transition-all hover:after:w-full"
              >
                {isLoginMode ? 'สมัครสมาชิกเลย' : 'เข้าสู่ระบบ'}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

