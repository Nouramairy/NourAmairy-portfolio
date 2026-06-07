import { Component, input } from '@angular/core';

export interface SocialLink {
  name: string;
  url: string;
  type: 'github' | 'linkedin' | 'twitter' | 'email' | 'other';
}

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  links = input<SocialLink[]>([]);
  size = input<'sm' | 'md'>('md');
}
