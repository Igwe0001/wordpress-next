import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProductBreadcrumb({ name }: { name: string }) {
  return (
    <section className="bg-[#F9F1E7] px-5 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center gap-3 text-sm">
        <Link href="/" className="text-[#9F9F9F]">
          Home
        </Link>
        <ChevronRight size={16} />
        <Link href="/shop" className="text-[#9F9F9F]">
          Shop
        </Link>
        <ChevronRight size={16} />
        <span className="border-l border-[#9F9F9F] pl-6 text-black">{name}</span>
      </div>
    </section>
  );
}
