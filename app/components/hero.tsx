import Image from 'next/image';
import { FadeInStagger, FadeInStaggerItem } from './animations';

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-start justify-center overflow-hidden py-24 sm:py-32">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 motion-safe:animate-pulse" style={{ animationDuration: '8s' }}></div>

      <FadeInStagger className="mx-auto w-full max-w-5xl px-6">
        <FadeInStaggerItem>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted mb-8">
            <span className="flex h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse"></span>
            <span>SYSTEM.ONLINE</span>
          </div>
        </FadeInStaggerItem>

        <FadeInStaggerItem>
          <h1 className="max-w-2xl flex items-center">
            <Image src="/brand/noybcore.png" alt="noybcore" width={400} height={100} className="h-12 sm:h-20 w-auto" priority />
          </h1>
        </FadeInStaggerItem>

        <FadeInStaggerItem>
          <div className="mt-8 flex flex-col gap-2 text-2xl font-medium tracking-tight text-muted sm:text-4xl uppercase">
            <span>NO ONE</span>
            <span className="text-foreground">BECOMING</span>
            <span>SOMEONE.</span>
          </div>
        </FadeInStaggerItem>

        <FadeInStaggerItem>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Software, systems, libraries, and ideas worth building.
          </p>
        </FadeInStaggerItem>

        <FadeInStaggerItem>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex h-10 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-all hover:bg-muted active:scale-[0.98]"
            >
              Explore projects
            </a>
            <a
              href="https://github.com/no-yb-core"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 items-center justify-center rounded-md border border-border bg-surface px-6 text-sm font-medium text-foreground transition-all hover:bg-surface-hover hover:text-accent active:scale-[0.98]"
            >
              GitHub
            </a>
          </div>
        </FadeInStaggerItem>
      </FadeInStagger>
    </section>
  );
}
