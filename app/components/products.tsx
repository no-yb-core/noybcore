import { FadeIn } from './animations';

export function Products() {
  return (
    <section id="products" className="py-24 scroll-mt-16">
      <FadeIn className="mx-auto max-w-5xl px-6">
        <h2 className="text-sm font-mono tracking-widest text-muted uppercase mb-8">
          04 // Products
        </h2>
        
        <div className="max-w-2xl">
          <h3 className="mb-6 text-3xl font-medium tracking-tight text-foreground sm:text-4xl uppercase">
            NOT EVERYTHING STARTS OPEN SOURCE
          </h3>
          <p className="text-lg leading-relaxed text-muted mb-8">
            Some projects are developed privately while they become products.
          </p>
          <p className="text-base leading-relaxed text-muted">
            noybcore builds software products and SaaS applications that run independently. While our foundational tools and libraries are shared publicly, products like <span className="text-foreground font-medium">GMAO SaaS</span> are developed as complete, closed systems.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
