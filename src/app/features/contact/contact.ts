import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FadeInDirective],
  templateUrl: './contact.html',
})
export class ContactComponent {
  // Remplacez par votre clé Web3Forms (https://web3forms.com)
  private readonly WEB3FORMS_KEY = '153845b3-ded1-4e81-ad02-4d831099cc80';

  name = signal('');
  email = signal('');
  message = signal('');
  formStatus = signal<FormStatus>('idle');
  validationError = signal('');

  private isFormValid(name: string, email: string, message: string): boolean {
    if (!name) {
      this.validationError.set('Veuillez renseigner votre nom.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.validationError.set('Veuillez entrer une adresse email valide.');
      return false;
    }
    if (message.length < 10) {
      this.validationError.set('Le message doit contenir au moins 10 caractères.');
      return false;
    }
    this.validationError.set('');
    return true;
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    if (this.formStatus() === 'sending') return;

    const name = this.name().trim();
    const email = this.email().trim();
    const message = this.message().trim();

    if (!this.isFormValid(name, email, message)) return;

    this.formStatus.set('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: this.WEB3FORMS_KEY,
          name,
          email,
          message,
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();
      if (result.success) {
        this.formStatus.set('success');
        this.name.set('');
        this.email.set('');
        this.message.set('');
      } else {
        this.formStatus.set('error');
      }
    } catch {
      this.formStatus.set('error');
    }
  }

  resetForm() {
    this.formStatus.set('idle');
    this.validationError.set('');
  }
}
