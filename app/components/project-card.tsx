import { Project } from '../data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface-hover hover:shadow-[0_4px_24px_-8px_rgba(56,189,248,0.1)]">
      <div>
        <div className="mb-4 flex items-center justify-between text-xs font-mono text-muted uppercase">
          <div className="flex gap-2">
            <span>{project.category}</span>
            <span className="text-border px-1">•</span>
            <span>{project.visibility}</span>
          </div>
          <span className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${project.status === 'Active' ? 'bg-accent' : project.status === 'In Development' ? 'bg-primary' : 'bg-muted'}`}></span>
            {project.status}
          </span>
        </div>
        
        <h3 className="mb-2 text-xl font-medium text-foreground group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        
        <p className="mb-6 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
      
      <div className="mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies?.map(tech => (
            <span key={tech} className="rounded bg-surface px-2 py-1 text-xs text-muted">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 text-sm font-medium">
          {project.websiteUrl && (
            <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
              View project
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
              GitHub
            </a>
          )}
          {project.docsUrl && (
            <a href={project.docsUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
              Docs
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
