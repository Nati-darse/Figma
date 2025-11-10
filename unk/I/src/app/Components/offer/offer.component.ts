import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Offer {
  title: string;
  image: string;
}

@Component({
  selector: 'app-offer',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  offers: Offer[] = [
    { title: 'Complete Project Management', image: '/assets/offer-1.jpg' },
    { title: 'High-Quality Materials', image: '/assets/offer-2.jpg' },
    { title: 'On-Time Delivery', image: '/assets/offer-3.jpg' },
    { title: 'Interiors Items', image: '/assets/offer-4.jpg' }
  ];
}
