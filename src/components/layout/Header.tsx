import Link from "next/link";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl text-[#B88E2F]">⌂</span>
          <span className="text-2xl font-bold text-black">Furniro</span>
        </Link>

        <nav className="hidden items-center gap-16 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium text-black transition hover:text-[#B88E2F]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-8 md:flex">
          <Search size={22} className="text-black" />
          <ShoppingCart size={22} className="text-black" />
        </div>

        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}
