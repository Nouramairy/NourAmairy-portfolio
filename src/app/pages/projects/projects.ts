import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { ProjectCard, Project } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [SectionTitle, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'project-alpha',
      description: 'A full-stack web application with real-time collaboration, built with Angular and Node.js. Features JWT auth, WebSockets, and a responsive design system.',
      tech: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      name: 'project-beta',
      description: 'E-commerce platform with product management, cart functionality, payment integration, and an admin dashboard.',
      tech: ['Angular', 'Firebase', 'Stripe', 'SCSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      name: 'project-gamma',
      description: 'CLI tool that automates repetitive development tasks — scaffolding, code generation, and deployment workflows.',
      tech: ['Python', 'Click', 'Docker', 'Shell'],
      github: 'https://github.com',
    },
    {
      name: 'project-delta',
      description: 'Data visualization dashboard with real-time charts, filtering, and analytics for business metrics tracking.',
      tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      name: 'project-epsilon',
      description: 'REST API with authentication, role-based authorization, rate limiting, caching, and OpenAPI documentation.',
      tech: ['Node.js', 'Express', 'JWT', 'Redis', 'PostgreSQL'],
      github: 'https://github.com',
    },
    {
      name: 'project-zeta',
      description: 'Mobile-first progressive web app with offline capabilities, push notifications, and installable experience.',
      tech: ['Angular', 'PWA', 'IndexedDB', 'Service Workers'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];
}
