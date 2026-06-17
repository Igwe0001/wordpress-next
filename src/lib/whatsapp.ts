import type { Product } from '@/data/products'

type WhatsAppProduct = Pick<Product, "name" | "price" | "category" | "sku" | "slug" | "whatsappMessage">;

const DEFAULT_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER ?? "";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://elitestore.com.ng").replace(/\/$/, "");

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
}

export function createWhatsAppOrderMessage(product: WhatsAppProduct) {
  const productUrl = `${SITE_URL}/product/${product.slug}`;

  if (product.whatsappMessage?.trim()) {
    return `${product.whatsappMessage.trim()}

Product: ${product.name}
Price: ${formatPrice(product.price)}
Category: ${product.category}
SKU: ${product.sku}
Product link: ${productUrl}`;
  }

  return `Hello, I want to order this product:

Product: ${product.name}
Price: ${formatPrice(product.price)}
Category: ${product.category}
SKU: ${product.sku}
Product link: ${productUrl}

Please confirm availability and delivery details.`;
}

export function createWhatsAppOrderLink(product: WhatsAppProduct, phoneNumber = DEFAULT_WHATSAPP_NUMBER) {
  const cleanPhoneNumber = phoneNumber.replace(/[^\d]/g, "");
  const message = createWhatsAppOrderMessage(product);

  return `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;
}
