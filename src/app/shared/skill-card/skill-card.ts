import { Component, input } from '@angular/core';

export interface SkillGroup {
  category: string;
  skills: string[];
  color: string;
}

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss',
})
export class SkillCard {
  group = input.required<SkillGroup>();
}
