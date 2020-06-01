import { Injectable,EventEmitter} from '@angular/core';
import { Trip } from './trip.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  //tripSelected = new EventEmitter<Trip>();
  trips: Trip[] = [
                    new Trip(
                      1,
                      'Trip 1',
                      200,
                      'assets/images/trip_img1.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                    new Trip(
                      2,
                      'Trip 2',
                      300,
                      'assets/images/trip_img2.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                    new Trip(
                      3,
                      'Trip 3',
                      250,
                      'assets/images/trip_img3.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                    new Trip(
                      4,
                      'Trip 4',
                      500,
                      'assets/images/trip_img4.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                    new Trip(
                      5,
                      'Trip 5',
                      450,
                      'assets/images/trip_img5.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                    new Trip(
                      6,
                      'Trip 6',
                      270,
                      'assets/images/trip_img6.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                  ]

    constructor() { }

    getTrips(): Observable<Trip[]> {
      // TODO: send the message _after_ fetching the heroes
      //this.messageService.add('HeroService: fetched heroes');
      return of(this.trips);
    }
  
    getTrip(id: number): Observable<Trip> {
      // TODO: send the message _after_ fetching the hero
      //this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(this.trips.find(tripFind => tripFind.id === id));
    }
}
