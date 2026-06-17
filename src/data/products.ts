export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  categorySlug?: string;
  description: string;
  longDescription: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  sku: string;
  tags: string[];
  images: string[];
  whatsappMessage?: string;
};
