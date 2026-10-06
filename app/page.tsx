import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { WhatWeBuild } from "./components/what-we-build";
import { Projects } from "./components/projects";
import { OpenSource } from "./components/open-source";
import { Products } from "./components/products";
import { Philosophy } from "./components/philosophy";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1 w-full">
        <Hero />
        <WhatWeBuild />
        <Projects />
        <OpenSource />
        <Products />
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}
