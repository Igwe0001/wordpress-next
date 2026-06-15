import { WordPressProductCategory } from "@/lib/wordpressTypes";

export type ProductCategory = {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageId?: number;
  image: string;
  count: number;
};

export function mapWordPressCategory(category: WordPressProductCategory): ProductCategory {
  const acf = Array.isArray(category.acf) || !category.acf ? {} : category.acf;

  const categoryImage = acf.category_image;

  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description || "",
    imageId: typeof categoryImage === "number" ? categoryImage : undefined,
    image: typeof categoryImage === "string" ? categoryImage : "",
    count: category.count,
  };
}
