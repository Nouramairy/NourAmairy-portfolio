import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { SocialLinks, SocialLink } from '../../shared/social-links/social-links';

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [SectionTitle, SocialLinks],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  techStack = [
    'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS',
    'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs',
    'Git', 'Docker', 'Linux', 'Figma', 'VS Code',
  ];

  experience: Experience[] = [
    {
      period: '2023 – Present',
      role: 'Full Stack Developer',
      company: 'Company Name',
      description: 'Building scalable web applications with Angular and Node.js. Leading front-end architecture decisions and mentoring junior developers.',
    },
    {
      period: '2021 – 2023',
      role: 'Frontend Developer',
      company: 'Company Name',
      description: 'Developed responsive UI components, improved Core Web Vitals scores by 40%, and collaborated with design teams on new product features.',
    },
    {
      period: '2019 – 2021',
      role: 'Junior Developer',
      company: 'Company Name',
      description: 'Kicked off my career building web apps, writing REST APIs, and learning clean code principles in an agile environment.',
    },
  ];

  socials: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com', type: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', type: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', type: 'twitter' },
    { name: 'Email', url: 'mailto:your@email.com', type: 'email' },
  ];
}
