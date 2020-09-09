import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AnnouncementsBarComponent } from './announcements-bar/announcements-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { MysteryJungleBoxComponent } from './mystery-jungle-box/mystery-jungle-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsBarComponent,
    NavbarComponent,
    SlideShowComponent,
    MysteryJungleBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
