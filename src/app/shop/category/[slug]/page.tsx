export const dynamic = "force-dynamic";

import ProductCard from "@/components/products/ProductCard";
import ShopBenefits from "@/components/shop/ShopBenefits";
import ShopHero from "@/components/shop/ShopHero";
import { mapWordPressProduct } from "@/lib/mapWordPressProduct";
import { getWordPressProductCategories, getWordPressProducts } from "@/lib/wordpress";
import { notFound } from "next/navigation";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const wpCategories = await getWordPressProductCategories();
  const category = wpCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const wpProducts = await getWordPressProducts();

  const products = wpProducts.filter((product) => product.product_category?.includes(category.id)).map(mapWordPressProduct);

  return (
    <main>
      <ShopHero />

      <section className="bg-white px-5 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-10 text-4xl font-bold capitalize text-[#3A3A3A]">{category.name}</h1>

          {products.length === 0 ? (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-semibold text-[#3A3A3A]">No products found in this category</h2>
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

      <ShopBenefits />
    </main>
  );
}
