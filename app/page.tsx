import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { WhatWeBuild } from "./components/what-we-build";
import { Projects } from "./components/projects";
import { OpenSource } from "./components/open-source";
import { Products } from "./components/products";
import { Philosophy } from "./components/philosophy";
import { Footer } from "./components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noybcore — Software Engineering, Open Source, and Practical Technology",
  description:
    "Noybcore is an independent software organization building reliable software, open-source libraries, developer tools, infrastructure, automation, and AI systems.",
  alternates: {
    canonical: "https://noybcore.com/",
  },
};

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
