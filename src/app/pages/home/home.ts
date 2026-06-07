import { Component, OnInit, signal, computed, inject, DestroyRef } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TerminalLine {
  type: 'command' | 'output' | 'blank';
  text: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private timers: ReturnType<typeof setTimeout>[] = [];

  readonly lines: TerminalLine[] = [
    { type: 'command', text: 'whoami' },
    { type: 'output', text: 'Your Name Here' },
    { type: 'blank', text: '' },
    { type: 'command', text: 'cat role.txt' },
    { type: 'output', text: 'Full Stack Developer' },
    { type: 'blank', text: '' },
    { type: 'command', text: 'cat bio.txt' },
    { type: 'output', text: 'Passionate developer crafting modern web experiences.' },
    { type: 'output', text: 'Turning complex problems into elegant solutions.' },
    { type: 'blank', text: '' },
    { type: 'command', text: 'ls ./tech-stack' },
    { type: 'output', text: 'Angular  TypeScript  Node.js  Python  PostgreSQL' },
    { type: 'blank', text: '' },
    { type: 'command', text: 'cat status.txt' },
    { type: 'output', text: '✓ Available for new opportunities' },
  ];

  visibleCount = signal(0);

  visibleLines = computed(() => this.lines.slice(0, this.visibleCount()));
  isComplete = computed(() => this.visibleCount() >= this.lines.length);

  ngOnInit() {
    this.lines.forEach((_, i) => {
      const t = setTimeout(() => {
        this.visibleCount.update(v => v + 1);
      }, i * 280 + 400);
      this.timers.push(t);
    });

    this.destroyRef.onDestroy(() => {
      this.timers.forEach(t => clearTimeout(t));
    });
  }
}
