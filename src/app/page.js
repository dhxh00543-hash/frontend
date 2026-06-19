import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950">
      
      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-300 border border-blue-400 rounded-full">
              🚀 Welcome to GUGU
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Build Amazing
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              สร้างเว็บไซต์สมัยใหม่ด้วย Next.js และ Tailwind CSS
              ที่รวดเร็ว สวยงาม และรองรับทุกอุปกรณ์
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/about"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl border border-gray-500 text-white hover:bg-white hover:text-black transition"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-white">100+</h3>
                <p className="text-gray-400">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">50+</h3>
                <p className="text-gray-400">Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">5★</h3>
                <p className="text-gray-400">Rating</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Hero"
                className="relative rounded-3xl shadow-2xl w-full max-w-lg object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}