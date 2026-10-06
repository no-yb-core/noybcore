export type ProjectStatus = 'Active' | 'In Development' | 'Experimental' | 'Archived';
export type ProjectCategory = 'Open Source' | 'Product' | 'Tool' | 'Experiment';
export type ProjectVisibility = 'public' | 'private';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  visibility: ProjectVisibility;
  description: string;
  technologies?: string[];
  githubUrl?: string;
  websiteUrl?: string;
  docsUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'yb-observability',
    name: 'yb-observability',
    category: 'Open Source',
    status: 'Active',
    visibility: 'public',
    description: 'A lightweight Python observability and logging library.',
    technologies: ['Python', 'Observability', 'Logging'],
    githubUrl: 'https://github.com/no-yb-core/yb-observability',
  },
  {
    id: 'api-docs-template',
    name: 'api-docs-template',
    category: 'Tool',
    status: 'Active',
    visibility: 'public',
    description: 'A foundation for building professional API documentation.',
    technologies: ['TypeScript', 'Next.js', 'Documentation'],
    githubUrl: 'https://github.com/no-yb-core/api-docs-template',
  },
  {
    id: 'gmao-saas',
    name: 'GMAO SaaS',
    category: 'Product',
    status: 'In Development',
    visibility: 'private',
    description: 'A software platform being developed under the noybcore organization.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
  }
];
