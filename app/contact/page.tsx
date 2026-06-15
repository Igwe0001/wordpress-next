import Link from "next/link";
import { ChevronRight, MapPin, Phone, Clock3, MessageCircle, Headphones, ShieldCheck, Trophy, Truck } from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "High Quality",
    text: "Crafted from top materials",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Protection",
    text: "Reliable product support",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Delivery support available",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "Dedicated customer help",
  },
];

export default function ContactPage() {
  const whatsappNumber = "2348012345678"; // CHANGE THIS

  return (
    <main className="bg-white text-black">
      {/* Hero */}

      <section
        className="flex h-[320px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.75), rgba(255,255,255,.75)), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-medium text-black">Contact</h1>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="font-semibold text-black">
              Home
            </Link>

            <ChevronRight size={16} />

            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact */}

      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-black">Get In Touch With Us</h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#9F9F9F]">
              For more information about our products and services, feel free to contact us through any of the channels below.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-[350px_1fr]">
            {/* Left Side */}

            <div className="space-y-10">
              <div className="flex gap-5">
                <MapPin className="mt-1" />

                <div>
                  <h3 className="text-2xl font-medium">Address</h3>

                  <p className="mt-2 text-[#666]">
                    236 5th SE Avenue,
                    <br />
                    New York NY10000,
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="mt-1" />

                <div>
                  <h3 className="text-2xl font-medium">Phone</h3>

                  <p className="mt-2 text-[#666]">
                    Mobile: +234 801 234 5678
                    <br />
                    Office: +234 801 234 5678
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <MessageCircle className="mt-1" />

                <div>
                  <h3 className="text-2xl font-medium">WhatsApp</h3>

                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="mt-2 block text-[#25D366]">
                    Chat With Us
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock3 className="mt-1" />

                <div>
                  <h3 className="text-2xl font-medium">Working Time</h3>

                  <p className="mt-2 text-[#666]">
                    Monday – Friday: 9:00 – 22:00
                    <br />
                    Saturday – Sunday: 9:00 – 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}

            <form action={`https://wa.me/${whatsappNumber}`} className="space-y-8">
              <div>
                <label className="mb-3 block font-medium">Your Name</label>

                <input type="text" placeholder="Abc" className="h-16 w-full rounded-lg border border-[#D9D9D9] px-6 outline-none" />
              </div>

              <div>
                <label className="mb-3 block font-medium">Email Address</label>

                <input type="email" placeholder="Abc@def.com" className="h-16 w-full rounded-lg border border-[#D9D9D9] px-6 outline-none" />
              </div>

              <div>
                <label className="mb-3 block font-medium">Subject</label>

                <input type="text" placeholder="This is optional" className="h-16 w-full rounded-lg border border-[#D9D9D9] px-6 outline-none" />
              </div>

              <div>
                <label className="mb-3 block font-medium">Message</label>

                <textarea
                  rows={5}
                  placeholder="Hi! I'd like to ask about..."
                  className="w-full rounded-lg border border-[#D9D9D9] p-6 outline-none"
                />
              </div>

              <button type="submit" className="rounded-md bg-[#B88E2F] px-16 py-4 font-medium text-white transition hover:bg-[#9a7625]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits */}

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
    </main>
  );
}
