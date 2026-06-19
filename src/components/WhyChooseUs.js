export default function WhyChooseUs() {
  return (
    <section className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-black text-white">
          ทำไมต้องเลือกเรา
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {[
            "🚚 ส่งไว",
            "🥩 คุณภาพพรีเมียม",
            "⭐ รีวิว 5 ดาว",
            "💯 ปลอดภัย",
          ].map((item) => (
            <div
              key={item}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center text-white text-xl"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}