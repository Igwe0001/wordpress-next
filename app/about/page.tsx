import Link from "next/link";
import { ChevronRight, Headphones, ShieldCheck, Trophy, Truck } from "lucide-react";

const values = [
  {
    title: "Quality Products",
    text: "We focus on beautiful, durable, and practical furniture pieces for modern homes.",
  },
  {
    title: "Easy Ordering",
    text: "Customers can browse products and contact us directly through WhatsApp or phone calls.",
  },
  {
    title: "Customer Support",
    text: "We make product inquiries, order confirmation, and follow-up simple and personal.",
  },
];

const benefits = [
  { icon: Trophy, title: "High Quality", text: "Crafted from top materials" },
  { icon: ShieldCheck, title: "Warranty Protection", text: "Reliable product support" },
  { icon: Truck, title: "Fast Delivery", text: "Delivery support available" },
  { icon: Headphones, title: "24/7 Support", text: "Dedicated customer help" },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section
        className="flex h-[320px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-medium text-black">About</h1>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="font-semibold text-black">
              Home
            </Link>
            <ChevronRight size={16} />
            <span>About</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#B88E2F]">Who We Are</p>

            <h2 className="text-4xl font-bold leading-tight text-[#3A3A3A]">We help customers discover beautiful furniture for better living.</h2>

            <p className="mt-6 leading-8 text-[#666666]">
              Furniro is a modern furniture catalog platform designed to make product discovery simple. Customers can browse products, view details,
              and contact the business directly through WhatsApp or phone calls to make inquiries and place orders.
            </p>

            <p className="mt-4 leading-8 text-[#666666]">
              The platform is built to start simple as a catalog website and later grow into a complete business system with online payments, CRM,
              automation, analytics, and order management.
            </p>
          </div>

          <div className="h-[480px] overflow-hidden rounded-xl bg-[#F9F1E7]">
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000&auto=format&fit=crop"
              alt="Modern furniture showroom"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F3] px-5 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-[#3A3A3A]">Our Promise</h2>
            <p className="mt-3 text-[#666666]">Simple shopping, quality products, and direct communication.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#3A3A3A]">{value.title}</h3>
                <p className="mt-4 leading-7 text-[#666666]">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div key={benefit.title} className="flex items-center gap-4">
                <Icon size={48} strokeWidth={2.2} className="text-[#242424]" />

                <div>
                  <h3 className="text-xl font-semibold text-[#242424]">{benefit.title}</h3>
                  <p className="mt-1 text-base font-medium text-[#898989]">{benefit.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
