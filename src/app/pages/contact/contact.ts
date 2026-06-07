import { Component, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectionTitle } from '../../shared/section-title/section-title';
import { SocialLinks, SocialLink } from '../../shared/social-links/social-links';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, SectionTitle, SocialLinks],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  submitted = signal(false);
  sending = signal(false);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  socials: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com', type: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', type: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', type: 'twitter' },
    { name: 'Email', url: 'mailto:your@email.com', type: 'email' },
  ];

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending.set(true);
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.form.reset();
    }, 1200);
  }

  isInvalid(field: string) {
    const ctrl = this.form.get(field);
    return ctrl?.invalid && ctrl.touched;
  }
}
