import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import { getWordPressProducts } from "@/lib/wordpress";
import { mapWordPressProduct } from "@/lib/mapWordPressProduct";

export default async function OurProducts() {
  const wpProducts = await getWordPressProducts();
  const products = wpProducts
    .map(mapWordPressProduct)
    .filter((product) => product.slug)
    .slice(0, 4);

  return (
    <section className="bg-white px-5 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-4xl font-bold text-[#3A3A3A]">Our Products</h2>

        {products.length === 0 ? (
          <div className="py-20 text-center">
            <h3 className="text-xl font-semibold text-[#3A3A3A]">No products available right now.</h3>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            href="/shop"
            className="border border-[#B88E2F] px-20 py-3 font-semibold text-[#B88E2F] transition hover:bg-[#B88E2F] hover:text-white"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
}
