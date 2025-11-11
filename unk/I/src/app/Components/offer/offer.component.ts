import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  imports :[CommonModule],
  standalone: true,
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  offers = [
    {
      title: 'Residential Design',
      image: 'assets/i3.jpeg',
      description: 'Create homes that tell your unique story'
    },
    {
      title: 'Commercial Spaces',
      image: 'assets/i7.jpeg', 
      description: 'Design environments that inspire productivity'
    },
    {
      title: 'Space Renovation',
      image: 'assets/i5.jpeg',
      description: 'Transform existing spaces with creative solutions'
    },
    {
      title: 'Design Consultation',
      image: 'assets/i6.jpeg',
      description: 'Expert guidance for your design journey'
    }
  ];
}