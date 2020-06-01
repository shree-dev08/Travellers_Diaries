import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../trip.model';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-trip-detail',
    templateUrl: './trip-detail.component.html',
    styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit{
    @Input() trip: Trip;

    ngOnInit(){
        this.getTrip();
    }

    constructor(private route:ActivatedRoute,private tripService: TripService,private location: Location){}

    getTrip(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.tripService.getTrip(id).subscribe(tripSelect => this.trip = tripSelect);
    }
    
    goBack(): void {
        this.location.back();
    }
}