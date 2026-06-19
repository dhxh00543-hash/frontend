export default function FooterSection() {
  return (
    <footer className="bg-black border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <h3 className="text-white font-bold text-2xl">
            GUGU
          </h3>

          <div className="flex gap-6 text-slate-400">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
          </div>

        </div>

        <p className="text-center text-slate-500 mt-8">
          © 2026 GUGU. All rights reserved.
        </p>

      </div>

    </footer>
  );
}