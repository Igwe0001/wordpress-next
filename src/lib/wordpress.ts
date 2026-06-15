const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.replace(/\/$/, "");

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_WORDPRESS_API_URL is missing");
}

export async function getWordPressProducts(): Promise<any[]> {
  const res = await fetch(`${API_URL}/products?_embed&per_page=100`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch WordPress products");
  }

  return res.json();
}

export async function getWordPressProductBySlug(slug: string): Promise<any | null> {
  const res = await fetch(`${API_URL}/products?slug=${encodeURIComponent(slug)}&_embed`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch WordPress product");
  }

  const products = await res.json();
  return Array.isArray(products) ? products[0] || null : null;
}
