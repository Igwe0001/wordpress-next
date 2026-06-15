import Link from "next/link";
import { getWordPressMediaById, getWordPressProductCategories } from "@/lib/wordpress";
import { mapWordPressCategory } from "@/lib/mapWordPressCategory";

export default async function BrowseRange() {
  const wpCategories = await getWordPressProductCategories();

  const categories = await Promise.all(
    wpCategories
      .map(mapWordPressCategory)
      .filter((category) => category.count > 0)
      .slice(0, 3)
      .map(async (category) => {
        if (category.imageId && !category.image) {
          const image = await getWordPressMediaById(category.imageId);
          return { ...category, image };
        }

        return category;
      }),
  );

  return (
    <section className="bg-white px-5 py-14 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#333333]">Browse The Range</h2>

          <p className="mt-2 text-base text-[#666666]">Explore product categories available in our catalog.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={`/shop/category/${category.slug}`} className="group block text-center">
              <div className="h-[420px] overflow-hidden rounded-xl bg-[#F4F5F7]">
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[#9F9F9F]">No Category Image</div>
                )}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#333333]">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
