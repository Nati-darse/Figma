import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface QA {
  q: string;
  a: string;
  open?: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs: QA[] = [
    { 
      q: 'How much do your interior design services cost?', 
      a: 'Our pricing varies based on the scope and complexity of your project. We offer flexible packages starting from basic consultations to full-service design. During our free initial consultation, we\'ll discuss your budget and provide a detailed quote tailored to your specific needs.',
      open: false 
    },
    { 
      q: 'Do you provide furniture and decor sourcing?', 
      a: 'Yes, we offer complete sourcing services. We handle everything from selecting the perfect pieces to procurement, delivery, and installation. We have access to trade-only suppliers and can help you find unique items that fit your style and budget.',
      open: false 
    },
    { 
      q: 'What is the typical timeline for an interior design project?', 
      a: 'Project timelines vary: small makeovers can be completed in 2-4 weeks, medium projects take 4-8 weeks, and full-home transformations typically require 2-4 months. We provide a detailed project timeline during our planning phase and keep you updated throughout the process.',
      open: false 
    },
    { 
      q: 'Can you work with my existing furniture and decor?', 
      a: 'Absolutely! We love incorporating existing pieces that hold sentimental value or that you simply love. We\'ll assess your current items and create a design plan that seamlessly blends them with new additions for a cohesive look.',
      open: false 
    },
    { 
      q: 'Do you offer virtual design services?', 
      a: 'Yes, we provide comprehensive virtual design services for clients who prefer remote collaboration. This includes video consultations, digital mood boards, 3D renderings, and detailed shopping lists with direct purchase links.',
      open: false 
    },
  
  ];

  toggle(i: number) {
    this.faqs[i].open = !this.faqs[i].open;
  }
}