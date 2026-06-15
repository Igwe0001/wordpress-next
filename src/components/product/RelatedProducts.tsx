import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import { getWordPressProducts } from "@/lib/wordpress";
import { mapWordPressProduct } from "@/lib/mapWordPressProduct";

type RelatedProductsProps = {
  currentProductSlug: string;
};

export default async function RelatedProducts({ currentProductSlug }: RelatedProductsProps) {
  const wpProducts = await getWordPressProducts();

  const relatedProducts = wpProducts
    .map(mapWordPressProduct)
    .filter((product) => product.slug && product.slug !== currentProductSlug)
    .slice(0, 4);

  return (
    <section className="px-5 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-4xl font-medium text-black">Related Products</h2>

        {relatedProducts.length === 0 ? (
          <p className="text-center text-[#9F9F9F]">No related products found.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link href="/shop" className="border border-[#B88E2F] px-20 py-3 font-semibold text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white">
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
}
