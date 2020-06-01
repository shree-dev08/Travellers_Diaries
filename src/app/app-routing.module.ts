import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TripComponent } from './trip/trip.component';
import { TripDetailComponent } from './trip/trip-detail/trip-detail.component';
import { UpcomingTripsComponent } from './upcoming-trips/upcoming-trips.component';
import { UpcomingTripDetailComponent } from './upcoming-trips/upcoming-trip-detail/upcoming-trip-detail.component';
import { HappyTravellersComponent } from './happy-travellers/happy-travellers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { BlogItemComponent } from './blog/blog-item/blog-item.component';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'blog',component: BlogComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'detail/:id', component: BlogDetailComponent},
  {path: 'home/our-story',component:OurStoryComponent},
  {path: 'home/our-team',component:OurTeamComponent},
  {path: 'home/trips',component:TripComponent},
  {path: 'trip-detail/:id',component:TripDetailComponent},
  {path: 'home/upcoming-trips',component:UpcomingTripsComponent},
  {path: 'upcoming-trip-detail/:id',component:UpcomingTripDetailComponent},
  {path: 'home/happy-travellers', component:HappyTravellersComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
