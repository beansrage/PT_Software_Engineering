import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AnnouncementsBarComponent } from './announcements-bar/announcements-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsBarComponent,
    NavbarComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
