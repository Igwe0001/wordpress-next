"use client";

import { useState } from "react";
import { Product } from "@/data/products";

const tabs = ["Description", "Additional Information", "Reviews"] as const;

export default function ProductTabs({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Description");

  return (
    <section className="border-t border-[#D9D9D9] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap justify-center gap-8 text-lg md:text-2xl">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? "font-medium text-black" : "text-[#9F9F9F]"}>
              {tab === "Reviews" ? "Reviews [5]" : tab}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-5xl space-y-6 text-[#9F9F9F]">
          {activeTab === "Description" && (
            <>
              <p>{product.longDescription || "No description available."}</p>
              <p>This item is designed for modern interiors and can be displayed as part of your catalog before connecting WordPress later.</p>
            </>
          )}

          {activeTab === "Additional Information" && (
            <>
              <p>Category: {product.category || "Product"}</p>
              <p>SKU: {product.sku || "N/A"}</p>
              <p>Tags: {product.tags.length > 0 ? product.tags.join(", ") : "None"}</p>
            </>
          )}

          {activeTab === "Reviews" && (
            <>
              <p>No real reviews yet. This section is ready for customer reviews later.</p>
              <p>Average rating: 5 stars</p>
            </>
          )}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {product.images.length > 0 ? (
            product.images.slice(0, 2).map((image, index) => (
              <div key={index} className="h-[350px] overflow-hidden rounded-xl bg-[#F9F1E7]">
                <img src={image} alt={product.name} className="h-full w-full object-cover" />
              </div>
            ))
          ) : (
            <div className="h-[350px] overflow-hidden rounded-xl bg-[#F9F1E7] flex items-center justify-center text-[#9F9F9F]">
              No Images Available
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
