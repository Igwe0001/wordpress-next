const galleryImages = [
  "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=700&auto=format&fit=crop",
];

export default function FurnitureGallery() {
  return (
    <section className="bg-white px-5 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-lg font-semibold text-[#616161]">Share your setup with</p>
          <h2 className="text-4xl font-bold text-[#3A3A3A]">#FuniroFurniture</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {galleryImages.map((image, index) => (
            <div key={image} className={`overflow-hidden ${index === 0 || index === 4 ? "h-[300px] md:h-[380px]" : "h-[300px]"}`}>
              <img
                src={image}
                alt={`Furniture gallery ${index + 1}`}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
