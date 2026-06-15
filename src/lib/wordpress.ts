import { WordPressProduct } from "@/lib/wordpressTypes";
import { WordPressProductCategory } from "@/lib/wordpressTypes";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_WORDPRESS_API_URL is missing");
}

export async function getWordPressProducts(): Promise<WordPressProduct[]> {
  const res = await fetch(`${API_URL}/products?_embed&per_page=100`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch WordPress products");
  }

  return res.json() as Promise<WordPressProduct[]>;
}

export async function getWordPressProductBySlug(slug: string): Promise<WordPressProduct | null> {
  const res = await fetch(`${API_URL}/products?slug=${encodeURIComponent(slug)}&_embed`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch WordPress product");
  }

  const products = (await res.json()) as WordPressProduct[];

  return products[0] ?? null;
}

export async function getWordPressProductCategories(): Promise<WordPressProductCategory[]> {
  const res = await fetch(`${API_URL}/product_category?per_page=100`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch WordPress product categories");
  }

  return res.json() as Promise<WordPressProductCategory[]>;
}

export async function getWordPressMediaById(id: number): Promise<string> {
  const res = await fetch(`${API_URL}/media/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return "";
  }

  const media = (await res.json()) as { source_url?: string };

  return media.source_url || "";
}