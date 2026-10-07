import { projects } from '../data/projects';
import { ProjectCard } from './project-card';
import { FadeInStagger, FadeInStaggerItem } from './animations';

export function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-16">
      <FadeInStagger className="mx-auto max-w-5xl px-6">
        <FadeInStaggerItem>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-sm font-mono tracking-widest text-muted uppercase mb-4">
                02 // Projects
              </h2>
              <p className="text-2xl font-medium text-foreground sm:text-3xl">
                Selected Work
              </p>
            </div>
          </div>
        </FadeInStaggerItem>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <FadeInStaggerItem key={project.id}>
              <ProjectCard project={project} />
            </FadeInStaggerItem>
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}
