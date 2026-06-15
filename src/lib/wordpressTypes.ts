export type WordPressRenderedField = {
  rendered: string;
};

export type WordPressFeaturedMedia = {
  source_url?: string;
};

export type WordPressTerm = {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
};

export type WordPressProductACF = {
  price?: number | string;
  old_price?: number | string;
  sku?: string;
  short_description?: string;
  long_description?: string;
  badge?: string;
  product_gallery?: string | number | number[] | null;
  whatsapp_message?: string;
};

export type WordPressProduct = {
  id: number;
  slug: string;
  title?: WordPressRenderedField;
  content?: WordPressRenderedField;
  excerpt?: WordPressRenderedField;
  featured_media?: number;
  product_category?: number[];
  acf?: WordPressProductACF | [];
  _embedded?: {
    "wp:featuredmedia"?: WordPressFeaturedMedia[];
    "wp:term"?: WordPressTerm[][];
  };
};

export type WordPressProductCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
  description?: string;
  acf?:
    | {
        category_image?: string | number;
      }
    | [];
};
