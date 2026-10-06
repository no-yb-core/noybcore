import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">

        <div className="flex flex-col gap-2">
          <span className="flex items-center">
            <Image src="/brand/noybcore.png" alt="noybcore" width={120} height={24} className="h-5 w-auto" />
          </span>
          <span className="text-sm text-muted">
            An independent software organization.
          </span>
        </div>

        <div className="flex gap-8 text-sm font-medium text-muted">
          <div className="flex flex-col gap-3">
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#open-source" className="hover:text-foreground transition-colors">Open Source</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="https://github.com/no-yb-core" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#about" className="hover:text-foreground transition-colors">Philosophy</a>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-12 flex max-w-5xl items-center justify-between px-6 pt-8 border-t border-border/50 text-xs text-muted font-mono">
        <span>© {new Date().getFullYear()} noybcore.</span>
        <span className="hidden sm:inline-block uppercase tracking-wider text-accent/80">No One -&gt; Becoming Someone.</span>
      </div>
    </footer>
  );
}
