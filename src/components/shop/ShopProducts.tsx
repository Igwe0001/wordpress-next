import ProductCard from "@/components/products/ProductCard";
import { getWordPressProducts } from "@/lib/wordpress";
import { mapWordPressProduct } from "@/lib/mapWordPressProduct";

export default async function ShopProducts() {
  const wpProducts = await getWordPressProducts();
  const products = wpProducts.map(mapWordPressProduct).filter((product) => product.slug);

  return (
    <section className="bg-white px-5 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        {products.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-semibold text-[#3A3A3A]">No products found</h2>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
