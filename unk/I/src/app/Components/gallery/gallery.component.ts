import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = new Array(8).fill(0).map((_, i) => ({
    src: `/assets/gallery-${i + 1}.jpg`,
    alt: `Gallery ${i + 1}`
  }));
}
