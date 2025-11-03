import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface QA {
  q: string;
  a: string;
  open?: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrls: ['./faq.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FaqComponent {
  faqs: QA[] = [
    { q: 'How much do your interior design services cost?', a: 'Costs depend on scope. Book a free call for details.' },
    { q: 'Do you provide furniture and decor?', a: 'Yes, we source, procure, and install items for you.' },
    { q: 'What is the timeline for a typical project?', a: 'Small makeovers take weeks; full projects take months.' }
  ];

  toggle(i: number) {
    this.faqs[i].open = !this.faqs[i].open;
  }
}
