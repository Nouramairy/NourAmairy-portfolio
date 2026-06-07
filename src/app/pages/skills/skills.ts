import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { SkillCard, SkillGroup } from '../../shared/skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [SectionTitle, SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: 'frontend',
      color: '#00b4d8',
      skills: ['Angular', 'TypeScript', 'JavaScript (ES2023)', 'HTML5', 'CSS3 / SCSS', 'RxJS', 'NgRx'],
    },
    {
      category: 'backend',
      color: '#3fb950',
      skills: ['Node.js', 'Python', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets'],
    },
    {
      category: 'database',
      color: '#d29922',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'SQL / Query optimization'],
    },
    {
      category: 'devops',
      color: '#d2a8ff',
      skills: ['Git & GitHub', 'Docker', 'CI/CD Pipelines', 'Linux / Bash', 'Nginx', 'GitHub Actions'],
    },
    {
      category: 'design',
      color: '#f78166',
      skills: ['Figma', 'Responsive Design', 'Accessibility (a11y)', 'Component Systems', 'UI/UX Principles'],
    },
    {
      category: 'tools',
      color: '#8b949e',
      skills: ['VS Code', 'Postman', 'Jira / Trello', 'Webpack / Vite', 'Jest / Vitest'],
    },
  ];
}
