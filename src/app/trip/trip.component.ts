import { Component, OnInit, Input } from '@angular/core';
import { Trip } from './trip.model';
import { TripService } from './trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  trips: Trip[];
  @Input() trip: Trip;
 // selectedTrip:Trip;
  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.trips = this.tripService.trips;
  }

  // onSelect(tripSelect: Trip):void{
  //   this.selectedTrip = tripSelect;
  // }

}
