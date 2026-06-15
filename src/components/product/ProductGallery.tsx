"use client";

import { useState } from "react";
import { Product } from "@/data/products";

export default function ProductGallery({ product }: { product: Product }) {
  const images = product.images.filter(Boolean);
  const [activeImage, setActiveImage] = useState(images[0] || "");

  return (
    <div className="grid gap-6 md:grid-cols-[80px_1fr]">
      <div className="flex gap-4 md:flex-col">
        {images.length > 0 ? (
          images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(image)}
              className={`h-20 w-20 overflow-hidden rounded-lg bg-[#F9F1E7] ${activeImage === image ? "ring-2 ring-[#B88E2F]" : ""}`}
            >
              <img src={image} alt={product.name} className="h-full w-full object-cover" />
            </button>
          ))
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#F9F1E7] text-[#9F9F9F]">No Image</div>
        )}
      </div>

      <div className="h-[500px] overflow-hidden rounded-xl bg-[#F9F1E7]">
        {activeImage ? (
          <img src={activeImage} alt={product.name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-[#9F9F9F]">No Image Available</div>
        )}
      </div>
    </div>
  );
}
