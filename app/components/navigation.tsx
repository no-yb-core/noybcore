import Link from 'next/link';
import Image from 'next/image';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Image src="/brand/noybcore.png" alt="noybcore" width={150} height={32} className="h-5 w-auto" priority />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted">
          <Link href="#projects" className="relative transition-colors hover:text-foreground after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
            Projects
          </Link>
          <Link href="#open-source" className="relative transition-colors hover:text-foreground after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
            Open Source
          </Link>
          <Link href="#about" className="relative transition-colors hover:text-foreground after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
            About
          </Link>
          <a href="https://github.com/no-yb-core" target="_blank" rel="noopener noreferrer" className="relative transition-colors hover:text-foreground after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
