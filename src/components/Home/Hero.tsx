import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-[620px] bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="mx-auto flex min-h-[620px] max-w-7xl items-center justify-end px-5 md:px-10">
        <div className="max-w-xl rounded-md bg-[#FFF3E3] px-8 py-10 md:px-12 md:py-14">
          <p className="mb-2 text-sm font-semibold tracking-[3px] text-[#333333]">New Arrival</p>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-[#B88E2F] md:text-5xl">
            Discover Our <br /> New Collection
          </h1>

          <p className="mb-8 text-base leading-7 text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

          <Link href="/shop" className="inline-flex bg-[#B88E2F] px-16 py-5 text-sm font-bold uppercase text-white transition hover:bg-[#9c7625]">
            Buy Now
          </Link>
        </div>
      </div>
    </section>
  );
}
