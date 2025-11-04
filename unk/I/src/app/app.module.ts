import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

//  these are all component
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar';
import { HeroComponent } from './hero/hero';
import { SocialBarComponent } from './social-bar/social-bar';
import { OfferComponent } from './offer/offer';
import { ServicesComponent } from './services/services';
import { GalleryComponent } from './gallery/gallery';
import { StoryComponent } from './story/story';
import { FaqComponent } from './faq/faq';
import { FooterComponent } from './footer/footer';

@NgModule({
  declarations: [
    AppComponent,
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
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent] // this tells Angular: start rendering here
})
export class AppModule { }
