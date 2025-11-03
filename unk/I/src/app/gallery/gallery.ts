import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GalleryComponent {
  images = new Array(8).fill(0).map((_, i) => ({
    src: `/assets/gallery-${i + 1}.jpg`,
    alt: `Gallery ${i + 1}`
  }));
}
