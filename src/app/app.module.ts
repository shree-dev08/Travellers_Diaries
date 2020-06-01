import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogItemComponent } from './blog/blog-item/blog-item.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TripComponent } from './trip/trip.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { UpcomingTripsComponent } from './upcoming-trips/upcoming-trips.component';
import { HappyTravellersComponent } from './happy-travellers/happy-travellers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    BlogDetailComponent,
    BlogItemComponent,
    OurStoryComponent,
    SidebarComponent,
    OurTeamComponent,
    TripComponent,
    FooterComponent,
    UpcomingTripsComponent,
    HappyTravellersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
