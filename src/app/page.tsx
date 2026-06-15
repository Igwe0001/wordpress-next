import BrowseRange from "@/components/Home/BrowseRange";
import Hero from "@/components/Home/Hero";
import OurProducts from "@/components/Home/OurProducts";
import RoomInspiration from "@/components/Home/RoomInspiration";
import FurnitureGallery from "@/components/Home/FurnitureGallery";


export default function Home() {
  return (
    <main>
      <Hero />
      <BrowseRange />
      <OurProducts />
      <RoomInspiration />
      <FurnitureGallery />
    </main>
  );
}
