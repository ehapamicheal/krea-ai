import { HeroCarousel, Generate, Gallery } from "@/sections/home";

export default function Home() {
  return (
    <main className="mt-13 pt-7 dark:bg-black/90">
      <HeroCarousel />
      <Generate />
      <Gallery />
    </main>
  );
}
