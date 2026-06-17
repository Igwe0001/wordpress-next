"use client";

import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { formatCurrency } from "@/lib/formatCurrency";
import { createWhatsAppOrderLink } from "@/lib/whatsapp";


type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({ product }: ProductInfoProps) {

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to order this product:

Product: ${product.name}
Price: ${formatCurrency(product.price)}
Category: ${product.category}
SKU: ${product.sku}

Please provide more information.`,
  );

const whatsappLink = createWhatsAppOrderLink(product);

  const displaySku = product.sku || "N/A";
  const displayTags = product.tags.length > 0 ? product.tags.join(", ") : "None";

  return (
    <div>
      <h1 className="text-4xl font-normal text-black">{product.name}</h1>

      <p className="mt-3 text-2xl font-medium text-[#9F9F9F]">{formatCurrency(product.price)}</p>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex text-[#FFC700]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={18} fill="currentColor" />
          ))}
        </div>

        <span className="border-l border-[#9F9F9F] pl-4 text-sm text-[#9F9F9F]">5 Customer Reviews</span>
      </div>

      <p className="mt-5 max-w-md text-sm leading-7 text-black">
        {product.longDescription || product.description || "No long description available."}
      </p>

      {/* WhatsApp Order Button */}

      <div className="mt-10 border-b border-[#D9D9D9] pb-10">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-16 items-center justify-center rounded-xl bg-[#25D366] px-12 text-lg font-medium text-white transition hover:bg-[#1EBE5D]"
        >
          Order Now on WhatsApp
        </a>
      </div>

      {/* Product Meta */}

      <div className="mt-10 space-y-3 text-sm text-[#9F9F9F]">
        <div className="flex gap-3">
          <span className="min-w-[80px]">SKU</span>
          <span>: {displaySku}</span>
        </div>

        <div className="flex gap-3">
          <span className="min-w-[80px]">Category</span>
          <span>: {product.category || "Product"}</span>
        </div>

        <div className="flex gap-3">
          <span className="min-w-[80px]">Tags</span>
          <span>: {displayTags}</span>
        </div>

        <div className="flex gap-3">
          <span className="min-w-[80px]">Share</span>
          <span>: Facebook, Twitter, LinkedIn</span>
        </div>
      </div>
    </div>
  );
}
