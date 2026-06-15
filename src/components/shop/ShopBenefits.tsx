import { Headphones, ShieldCheck, Trophy, Truck } from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "High Quality",
    text: "crafted from top materials",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Protection",
    text: "Over 2 years",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    text: "Order over 150 $",
  },
  {
    icon: Headphones,
    title: "24 / 7 Support",
    text: "Dedicated support",
  },
];

export default function ShopBenefits() {
  return (
    <section className="bg-[#FAF3EA] px-5 py-16 md:px-10">
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
  );
}
