export const dynamic = "force-dynamic";

import ShopBenefits from "@/components/shop/ShopBenefits";
import ShopHero from "@/components/shop/ShopHero";
import ShopProducts from "@/components/shop/ShopProducts";
import ShopToolbar from "@/components/shop/ShopToolbar";

export default function ShopPage() {
  return (
    <main>
      <ShopHero />
      <ShopToolbar />
      <ShopProducts />
      <ShopBenefits />
    </main>
  );
}
