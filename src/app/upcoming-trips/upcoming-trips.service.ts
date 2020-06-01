import { Injectable,EventEmitter} from '@angular/core';
import { UpcomingTrips } from './upcoming-trips.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingTripsService {
  //tripSelected = new EventEmitter<Trip>();
  upcomingTrips: UpcomingTrips[] = [
                    new UpcomingTrips(1,
                      'UpcomingTrip 1',
                      200,
                      'assets/images/trip_img1.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                    new UpcomingTrips(2,
                      'UpcomingTrip 2',
                      300,
                      'assets/images/trip_img2.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                    new UpcomingTrips(3,
                      'UpcomingTrip 3',
                      250,
                      'assets/images/trip_img3.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                    new UpcomingTrips(4,
                      'UpcomingTrip 4',
                      500,
                      'assets/images/trip_img4.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                    new UpcomingTrips(5,
                      'UpcomingTrip 5',
                      450,
                      'assets/images/trip_img5.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                    new UpcomingTrips(6,
                      'UpcomingTrip 6',
                      270,
                      'assets/images/trip_img6.jpg',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error'
                    ),
                  ]

    constructor() { }

    getUpcomingTrips(): Observable<UpcomingTrips[]> {
      // TODO: send the message _after_ fetching the heroes
      //this.messageService.add('HeroService: fetched heroes');
      return of(this.upcomingTrips);
    }
  
    getUpcomingTrip(id: number): Observable<UpcomingTrips> {
      // TODO: send the message _after_ fetching the hero
      //this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(this.upcomingTrips.find(tripFind => tripFind.id === id));
    }
}
