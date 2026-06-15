import { notFound } from "next/navigation";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";
import { getWordPressProductBySlug } from "@/lib/wordpress";
import { mapWordPressProduct } from "@/lib/mapWordPressProduct";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const wpProduct = await getWordPressProductBySlug(slug);

  if (!wpProduct) {
    notFound();
  }

  const product = mapWordPressProduct(wpProduct);

  return (
    <main>
      <ProductBreadcrumb name={product.name} />

      <section className="px-5 py-10 md:px-10 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </section>

      <ProductTabs product={product} />
      <RelatedProducts currentProductSlug={product.slug} />
    </main>
  );
}
