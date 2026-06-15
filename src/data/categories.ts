export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Dining",
    slug: "dining",
    image: "https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Living",
    slug: "living",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Bedroom",
    slug: "bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=900&auto=format&fit=crop",
  },
];
