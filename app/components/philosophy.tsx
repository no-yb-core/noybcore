import { FadeIn } from './animations';

export function Philosophy() {
  return (
    <section id="about" className="py-24 scroll-mt-16">
      <FadeIn className="mx-auto max-w-5xl px-6">
        <h2 className="text-sm font-mono tracking-widest text-muted uppercase mb-12">
          05 // Philosophy
        </h2>
        
        <div className="max-w-2xl">
          <h3 className="mb-8 text-2xl font-medium text-foreground uppercase">
            WHY NOYBCORE?
          </h3>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            <p>
              Everything starts somewhere.
            </p>
            <p>
              A repository.<br/>
              A prototype.<br/>
              A strange idea.<br/>
              A problem worth solving.
            </p>
            <p>
              noybcore exists to turn those starting points into software that can actually be used. 
              The organization is focused on engineering, experimentation, and releasing things into the world.
            </p>
            
            <div className="my-12 border-l-2 border-accent pl-6">
              <p className="font-mono text-sm uppercase tracking-wider text-foreground">
                No One <span className="text-accent">-&gt;</span> Becoming Someone
              </p>
              <p className="mt-4 text-base">
                A small idea can become a library. A library can become a tool. A tool can become a product. A product can become something meaningful.
              </p>
            </div>
            
            <div className="rounded-lg border border-border bg-surface p-6 mt-12 transition-all hover:border-accent/30 hover:bg-surface-hover">
              <h4 className="text-sm font-medium text-foreground uppercase tracking-widest mb-2">Built independently</h4>
              <p className="text-sm text-muted">
                Developed under noybcore. The organization is built independently with the goal of growing through software, open source, and useful ideas.{' '}
                <a href="https://ybouali.dev" target="_blank" rel="noopener noreferrer" className="text-foreground transition-all underline underline-offset-4 decoration-border hover:decoration-accent hover:text-accent">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
