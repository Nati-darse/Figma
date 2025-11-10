import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeroComponent } from './Components/hero/hero.component';
import { SocialBarComponent } from './Components/social-bar/social-bar.component';
import { OfferComponent } from './Components/offer/offer.component';
import { ServicesComponent } from './Components/services/services.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { StoryComponent } from './Components/story/story.component';
import { FaqComponent } from './Components/faq/faq.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    SocialBarComponent,
    OfferComponent,
    ServicesComponent,
    GalleryComponent,
    StoryComponent,
    FaqComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  protected readonly title = signal('I');
}
