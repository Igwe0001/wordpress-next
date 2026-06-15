import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="mb-10 text-xl font-bold text-black">Furniro.</h2>
            <p className="max-w-xs text-sm leading-6 text-gray-400">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div>
            <h3 className="mb-10 text-sm text-gray-400">Links</h3>
            <ul className="space-y-8 text-sm font-medium text-black">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-10 text-sm text-gray-400">Help</h3>
            <ul className="space-y-8 text-sm font-medium text-black">
              <li>
                <Link href="/payment-options">Payment Options</Link>
              </li>
              <li>
                <Link href="/returns">Returns</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policies</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-10 text-sm text-gray-400">Newsletter</h3>
            <form className="flex items-end gap-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full border-b border-black pb-1 text-xs outline-none placeholder:text-gray-400"
              />
              <button type="submit" className="border-b border-black pb-1 text-xs font-semibold uppercase">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-black">2023 furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
