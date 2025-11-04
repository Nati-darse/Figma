import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ServiceItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ServicesComponent {
  items: ServiceItem[] = [
    { title: 'Home Interior Design', description: 'Tailored interiors that blend comfort, function, and personal style.' },
    { title: 'Office & Commercial Design', description: 'Smart, stylish, and branded interiors that boost productivity.' },
    { title: 'Interior Styling & Makeovers', description: 'Quick transformations ideal for events, rentals, or resale.' }
  ];
}
