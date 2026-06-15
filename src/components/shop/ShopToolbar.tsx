import { LayoutGrid, SlidersHorizontal } from "lucide-react";

export default function ShopToolbar() {
  return (
    <section className="bg-[#F9F1E7] px-5 py-6 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-5">
          <button className="flex items-center gap-2 text-lg text-black">
            <SlidersHorizontal size={22} />
            Filter
          </button>

          <LayoutGrid size={22} />

          <div className="hidden h-8 w-px bg-[#9F9F9F] md:block" />

          <p className="text-sm text-black">Showing 1–8 of 32 results</p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <label className="flex items-center gap-3 text-lg text-black">
            Show
            <input type="number" defaultValue={8} className="h-12 w-14 bg-white text-center text-[#9F9F9F] outline-none" />
          </label>

          <label className="flex items-center gap-3 text-lg text-black">
            Sort by
            <select className="h-12 w-44 bg-white px-4 text-[#9F9F9F] outline-none">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}
