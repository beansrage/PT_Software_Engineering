import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RatingComponent } from './rating/rating.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { WebsiteVisitorsComponent } from './website-visitors/website-visitors.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ReviewsComponent,
    RatingComponent,
    SentimentAnalysisComponent,
    WebsiteVisitorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
