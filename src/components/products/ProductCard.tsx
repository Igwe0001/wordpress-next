import Link from "next/link";
import { Product } from "@/data/products";
import { formatCurrency } from "@/lib/formatCurrency";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const productImage = product.images[0];

  return (
    <Link href={`/product/${product.slug}`} className="group block overflow-hidden bg-[#F4F5F7]">
      <div className="relative h-[300px] overflow-hidden bg-[#F9F1E7]">
        {productImage ? (
          <img src={productImage} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full items-center justify-center text-[#9F9F9F]">No Image</div>
        )}

        {product.badge && (
          <div
            className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full text-xs font-semibold text-white ${
              product.badge === "New" ? "bg-[#2EC1AC]" : "bg-[#E97171]"
            }`}
          >
            {product.badge}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-semibold text-[#3A3A3A]">{product.name}</h3>

        <p className="mt-2 line-clamp-2 text-[#898989]">{product.description}</p>

        <div className="mt-3 flex items-center gap-4">
          <span className="font-semibold text-[#3A3A3A]">{product.price > 0 ? formatCurrency(product.price) : "Price unavailable"}</span>

          {product.oldPrice && product.oldPrice > 0 && (
            <span className="text-sm text-[#B0B0B0] line-through">{formatCurrency(product.oldPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
