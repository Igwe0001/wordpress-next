import Link from "next/link";

export default function RoomInspiration() {
  return (
    <section className="bg-[#FCF8F3] px-5 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.4fr]">
        <div>
          <h2 className="text-4xl font-bold leading-tight text-[#3A3A3A]">50+ Beautiful rooms inspiration</h2>

          <p className="mt-4 max-w-md text-base leading-7 text-[#616161]">
            Our designer already made a lot of beautiful prototype rooms that inspire you.
          </p>

          <Link href="/shop" className="mt-8 inline-flex bg-[#B88E2F] px-9 py-3 font-semibold text-white transition hover:bg-[#9c7625]">
            Explore More
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative h-[520px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=900&auto=format&fit=crop"
              alt="Bedroom inspiration"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white/80 p-6 backdrop-blur-sm">
              <p className="text-sm text-[#616161]">01 — Bed Room</p>
              <h3 className="mt-2 text-2xl font-semibold text-[#3A3A3A]">Inner Peace</h3>
            </div>
          </div>

          <div className="hidden h-[440px] overflow-hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=900&auto=format&fit=crop"
              alt="Living room inspiration"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
