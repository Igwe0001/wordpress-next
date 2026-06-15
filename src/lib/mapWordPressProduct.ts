import { Product } from "@/data/products";

function stripHtml(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]+>/g, "").trim();
}

function normalizeTags(value: unknown): string[] {
  if (typeof value === "string") {
    return value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  return [];
}

function getFeaturedImage(wpProduct: any): string {
  const featured = wpProduct._embedded?.["wp:featuredmedia"]?.[0];
  return (
    featured?.source_url ||
    featured?.media_details?.sizes?.full?.source_url ||
    featured?.media_details?.sizes?.large?.source_url ||
    ""
  );
}

function getCategoryInfo(wpProduct: any) {
  const termGroups = wpProduct._embedded?.["wp:term"];
  const firstTerm = Array.isArray(termGroups) ? termGroups.flat(1)[0] : null;

  return {
    name: firstTerm?.name || wpProduct.acf?.category || "Product",
    slug: firstTerm?.slug || wpProduct.acf?.category_slug,
  };
}

export function mapWordPressProduct(wpProduct: any): Product {
  const rawDescription = wpProduct.acf?.short_description || wpProduct.excerpt?.rendered || "";
  const rawLongDescription = wpProduct.acf?.long_description || wpProduct.content?.rendered || rawDescription;
  const featuredImage = getFeaturedImage(wpProduct);
  const galleryImages = Array.isArray(wpProduct.acf?.gallery)
    ? wpProduct.acf.gallery
        .map((item: any) => {
          if (typeof item === "string") return item;
          if (item?.url) return item.url;
          return null;
        })
        .filter(Boolean)
    : [];
  const images = [featuredImage, ...galleryImages].filter(Boolean);
  const categoryInfo = getCategoryInfo(wpProduct);
  const acfTags = normalizeTags(wpProduct.acf?.tags);
  const embeddedTagNames = Array.isArray(wpProduct._embedded?.["wp:term"])
    ? wpProduct._embedded["wp:term"].flat(1).map((term: any) => String(term?.name || "").trim()).filter(Boolean)
    : [];

  return {
    id: Number(wpProduct.id || 0),
    name: stripHtml(wpProduct.title?.rendered) || stripHtml(wpProduct.title) || "Untitled Product",
    slug: String(wpProduct.slug || ""),
    category: categoryInfo.name,
    categorySlug: categoryInfo.slug,
    description: rawDescription,
    longDescription: stripHtml(rawLongDescription) || "No description available.",
    price: Number(wpProduct.acf?.price || wpProduct.price || 0),
    oldPrice: wpProduct.acf?.old_price ? Number(wpProduct.acf.old_price) : undefined,
    badge: wpProduct.acf?.badge || undefined,
    sku: String(wpProduct.acf?.sku || wpProduct.sku || "").trim(),
    tags: acfTags.length > 0 ? acfTags : embeddedTagNames,
    images: images.length > 0 ? images : [],
  };
}
