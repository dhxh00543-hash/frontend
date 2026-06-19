import Image from "next/image";

const products = [
  {
    id: 1,
    name: "ไก่ทอดกรอบ",
    image: "/ไก่ทอด.png",
    price: "฿599",
  },
  {
    id: 2,
    name: "ไก่นึ่งสมุนไพร",
    image: "/ไก่นึ่ง.png",
    price: "฿699",
  },
  {
    id: 3,
    name: "ไก่ย่างพรีเมียม",
    image: "/ไก่ย่าง.png",
    price: "฿799",
  },
];

export default function ProductSection() {
  return (
    <section className="bg-[#0A0A0A] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-black text-white">
          สินค้าแนะนำ
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:-translate-y-3 transition duration-500"
            >

              <div className="relative h-64">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {product.name}
                </h3>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-orange-400 text-3xl font-bold">
                    {product.price}
                  </span>

                  <button className="px-5 py-3 rounded-xl bg-orange-500 text-white hover:scale-105 transition">
                    สั่งซื้อ
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
