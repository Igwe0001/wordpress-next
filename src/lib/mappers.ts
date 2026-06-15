export function mapWordPressProduct(product: any) {
  return {
    id: product.id,
    name: product.title.rendered,
    slug: product.slug,
    description: product.acf?.short_description || "",
    longDescription: product.acf?.long_description || "",
    price: Number(product.acf?.price || 0),
    oldPrice: Number(product.acf?.old_price || 0),
    sku: product.acf?.sku || "",
    badge: product.acf?.badge || "",
    category: "Product",
    tags: [],
    images: [product._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""],
  };
}
