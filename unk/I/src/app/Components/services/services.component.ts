import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ServiceItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  items: ServiceItem[] = [
    { 
      title: 'Home Interior Design', 
      description: 'Tailored interiors that blend comfort, function, and personal style to create your perfect living space.' 
    },
    { 
      title: 'Office & Commercial Design', 
      description: 'Smart, stylish, and branded interiors that boost productivity and reflect your corporate identity.' 
    },
    { 
      title: 'Interior Styling & Makeovers', 
      description: 'Quick transformations ideal for events, rentals, or resale with maximum visual impact.' 
    }
  ];
}