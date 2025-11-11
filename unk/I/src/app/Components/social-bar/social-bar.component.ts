import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.css']
})
export class SocialBarComponent {
  isVisible = true;

  closeBar() {
    this.isVisible = false;
  }
}