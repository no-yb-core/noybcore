export function WhatWeBuild() {
  const categories = [
    {
      title: "Open Source",
      description: "Libraries and developer tools released publicly for anyone to use.",
    },
    {
      title: "Products",
      description: "Software products and SaaS projects being developed.",
    },
    {
      title: "Experiments",
      description: "Technical ideas, prototypes, research, and things worth exploring.",
    },
    {
      title: "Systems",
      description: "Infrastructure and engineering work that supports larger projects.",
    },
  ];

  return (
    <section className="border-t border-border bg-surface/30 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-sm font-mono tracking-widest text-muted uppercase mb-12">
          01 // What we build
        </h2>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className="flex flex-col gap-3">
              <h3 className="text-lg font-medium text-foreground">{category.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
