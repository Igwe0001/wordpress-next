type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-10">
      <h1 className="text-4xl font-bold capitalize text-[#333333]">{slug}</h1>

      <p className="mt-4 text-[#666666]">Products for this category will appear here.</p>
    </main>
  );
}
