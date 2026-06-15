import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ShopHero() {
  return (
    <section
      className="flex h-[320px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-medium text-black">Shop</h1>

        <div className="mt-3 flex items-center justify-center gap-2 text-sm">
          <Link href="/" className="font-semibold text-black">
            Home
          </Link>
          <ChevronRight size={16} />
          <span>Shop</span>
        </div>
      </div>
    </section>
  );
}
