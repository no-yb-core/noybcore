import { FadeIn } from './animations';

export function OpenSource() {
  return (
    <section id="open-source" className="border-y border-border bg-surface/30 py-24 scroll-mt-16">
      <FadeIn className="mx-auto max-w-5xl px-6">
        <h2 className="text-sm font-mono tracking-widest text-muted uppercase mb-8">
          03 // Open Source
        </h2>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h3 className="mb-6 text-3xl font-medium tracking-tight text-foreground sm:text-4xl uppercase">
              BUILT IN PUBLIC
            </h3>
            <p className="text-lg leading-relaxed text-muted mb-8">
              Some things are meant to be shared.
            </p>
            <p className="text-base leading-relaxed text-muted mb-8">
              noybcore develops open-source libraries, tools, and experiments that anyone can inspect, use, improve, or build upon. Open source is a foundational part of how we build software.
            </p>
            <a
              href="https://github.com/no-yb-core"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-all hover:bg-muted active:scale-[0.98]"
            >
              Explore open source
            </a>
          </div>
          
          <div className="flex flex-col justify-center border-l border-border pl-8 font-mono text-sm text-muted">
            <div className="flex items-center gap-4 py-4 border-b border-border/50">
              <span className="text-foreground">github.com/no-yb-core</span>
            </div>
            <div className="flex flex-col gap-2 py-4">
              <span>&gt; _ Public repositories</span>
              <span>&gt; _ MIT Licensed libraries</span>
              <span>&gt; _ Developer tools</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
