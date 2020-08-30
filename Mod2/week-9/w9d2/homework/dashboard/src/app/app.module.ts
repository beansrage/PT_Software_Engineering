import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
