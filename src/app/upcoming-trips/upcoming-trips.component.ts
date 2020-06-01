import { Component, OnInit, Input } from '@angular/core';
import { UpcomingTrips } from './upcoming-trips.model';
import { UpcomingTripsService } from './upcoming-trips.service';

@Component({
  selector: 'app-upcoming-trips',
  templateUrl: './upcoming-trips.component.html',
  styleUrls: ['./upcoming-trips.component.css']
})
export class UpcomingTripsComponent implements OnInit {

upcomingTrips: UpcomingTrips[];
  @Input() upcomingTrip: UpcomingTrips;

  constructor(private upcomingTripsService: UpcomingTripsService) { }

  ngOnInit(): void {
    this.upcomingTrips = this.upcomingTripsService.upcomingTrips;
  }


}
