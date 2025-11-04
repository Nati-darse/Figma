import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-bar.html',
  styleUrls: ['./social-bar.css']
})
export class SocialBarComponent {
  socials = ['Google', 'Facebook', 'Instagram', 'Threads'];
}
