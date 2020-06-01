import { Component, OnInit, Input } from '@angular/core';
import { UpcomingTrips } from '../upcoming-trips.model';
import { ActivatedRoute } from '@angular/router';
import { UpcomingTripsService } from '../upcoming-trips.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-upcoming-trip-detail',
    templateUrl: './upcoming-trip-detail.component.html',
    styleUrls: ['./upcoming-trip-detail.component.css']
})
export class UpcomingTripDetailComponent implements OnInit{
   @Input() upcomingTrip: UpcomingTrips;

    constructor(private route:ActivatedRoute,private upcomingTripsService: UpcomingTripsService,private location: Location){}

    ngOnInit(){
        this.getUpcomingTrip();
    }


    getUpcomingTrip(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.upcomingTripsService.getUpcomingTrip(id).subscribe(tripSelect => this.upcomingTrip = tripSelect);
    }
    
    goBack(): void {
        this.location.back();
    }
}