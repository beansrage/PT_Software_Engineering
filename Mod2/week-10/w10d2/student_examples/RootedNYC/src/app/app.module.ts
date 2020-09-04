import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AnnouncementsBarComponent } from './announcements-bar/announcements-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
