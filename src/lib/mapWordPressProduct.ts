import { Product } from "@/data/products";
import { WordPressProduct, WordPressProductACF } from "@/lib/wordpressTypes";

function cleanHTML(value?: string) {
  return value?.replace(/<[^>]*>/g, "").trim() || "";
}

function getACF(acf: WordPressProduct["acf"]): WordPressProductACF {
  if (!acf || Array.isArray(acf)) {
    return {};
  }

  return acf;
}

function toNumber(value?: number | string) {
  if (value === undefined || value === null || value === "") {
    return 0;
  }

  return Number(value);
}

function getGalleryImages(gallery: WordPressProductACF["product_gallery"]): string[] {
  if (!gallery) {
    return [];
  }

  if (typeof gallery === "string") {
    return gallery ? [gallery] : [];
  }

  return [];
}

export function mapWordPressProduct(wpProduct: WordPressProduct): Product {
  const acf = getACF(wpProduct.acf);

  const featuredImage = wpProduct._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

  const galleryImages = getGalleryImages(acf.product_gallery);

  const categoryData = wpProduct._embedded?.["wp:term"]?.[0]?.[0];

  const images = [featuredImage, ...galleryImages].filter(Boolean);

  return {
    id: wpProduct.id,
    name: cleanHTML(wpProduct.title?.rendered) || "Untitled Product",
    slug: wpProduct.slug,
    category: categoryData?.name || "Uncategorized",
    categorySlug: categoryData?.slug || "",
    description: acf.short_description || cleanHTML(wpProduct.excerpt?.rendered) || "No short description available.",
    longDescription: acf.long_description || cleanHTML(wpProduct.content?.rendered) || "No product description available.",
    price: toNumber(acf.price),
    oldPrice: acf.old_price ? toNumber(acf.old_price) : undefined,
    badge: acf.badge || "",
    sku: acf.sku || `PRODUCT-${wpProduct.id}`,
    tags: categoryData?.name ? [categoryData.name] : [],
    images,
    whatsappMessage: acf.whatsapp_message ?? "",
  };
}
