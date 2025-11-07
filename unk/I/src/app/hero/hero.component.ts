import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() title = 'Spaces That Speak Volumes Without Saying a Word';
  @Input() subtitle = 'From vision to reality — interior design tailored to your taste, lifestyle, and budget.';
}
